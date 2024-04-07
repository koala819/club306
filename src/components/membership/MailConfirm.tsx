'use client'

import { Spinner } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'

import { useRouter } from 'next/navigation'

import { PersonalInfo, Vehicles } from '@/types/models'

import { generateUniqueToken } from '@/lib/generateUniqueToken'
import { sendConfirmationMail } from '@/lib/mail/utils'
import { getMemberId, record } from '@/lib/supabase'

export default function MailConfirm({
  userIdFromlocalStorage,
}: {
  userIdFromlocalStorage: string
}) {
  const [recordInDb, setRecordInDb] = useState<boolean>(false)
  const [lastMbrIdFromDB, setLastMbrIdFromDB] = useState<number | null>(null)
  const [storedPersonalInfo, setStoredPersonalInfo] = useState<PersonalInfo>()
  const [storedVehicle, setStoredVehicle] = useState<Vehicles>()
  const router = useRouter()
  const tokenForMember = generateUniqueToken()

  useEffect(() => {
    const fetchData = async () => {
      const memberIdFromDB = await getMemberId()
      memberIdFromDB?.data !== null &&
        setLastMbrIdFromDB(() => memberIdFromDB?.data[0].id)

      const storedPersonalInfoJSON = localStorage.getItem(
        `personalInfo_${userIdFromlocalStorage}`,
      )
      if (storedPersonalInfoJSON) {
        setStoredPersonalInfo(() => JSON.parse(storedPersonalInfoJSON))
      }

      const storedVehicleJSON = localStorage.getItem(
        `vehicles_${userIdFromlocalStorage}`,
      )
      if (storedVehicleJSON) {
        setStoredVehicle(() => JSON.parse(storedVehicleJSON))
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      if (lastMbrIdFromDB !== null) {
        const response = await record(
          storedPersonalInfo,
          storedVehicle,
          lastMbrIdFromDB + 1,
          tokenForMember,
        )
        const data = await response.json()
        if (data.status !== 200) {
          alert(
            'Erreur pour vous enregistrer, merci de contacter le staff svp  et communiquer cette erreur : \n\n\n' +
              data.message +
              "\n\n Sans le message de l'erreur, il nous sera difficile de vous aider !!!",
          )
          router.push('/contact')
        } else {
          // console.log('YES RECORD IN DB with ', storedPersonalInfo);
          const mailResponse = await sendConfirmationMail(
            storedPersonalInfo?.first_name || '',
            storedPersonalInfo?.last_name || '',
            storedPersonalInfo?.email || '',
            tokenForMember,
          )
          const finished = await mailResponse.json()
          if (finished.status === 200) {
            toast.success('Veuillez consulter votre boite mail')
            setRecordInDb(true)
          } else {
            console.error('Send mail with ERROR ', finished.data)
          }
        }
      }
    }

    fetchData()
  }, [lastMbrIdFromDB])

  return (
    <section>
      {!recordInDb ? (
        <>
          <h2 className="text-2xl font-semibold text-center mb-16">
            Enregistrement des informations dans notre base de données
          </h2>
          <div className="flex items-center justify-center">
            <Spinner
              label="Veuillez patienter"
              color="primary"
              labelColor="primary"
              size="lg"
            />
          </div>
        </>
      ) : (
        <section className="p-8">
          <h2 className="text-2xl font-semibold text-center mb-16">
            Il ne vous reste plus qu'à confirmer votre e-mail !
          </h2>
          <text className="mt-2 text-base text-gray-600 space-y-4 text-left">
            <p>Merci de votre adhésion au Club 306</p>
            <p>Vous avez reçu un e-mail de confirmation à l'adresse :</p>
            <p>{storedPersonalInfo?.email}</p>
            <p className="underline font-bold">
              Cette étape est obligatoire pour valider votre inscription !
            </p>
          </text>
          <p className="text-red-500 font-extrabold text-center mt-4">
            Vérifiez vos spams
          </p>
        </section>
      )}
    </section>
  )
}
