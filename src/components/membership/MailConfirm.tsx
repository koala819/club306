'use client'

import { Spinner } from "@heroui/react"
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'

import { useRouter } from 'next/navigation'

import { PersonalInfo, Vehicles } from '@/src/types/models'

import { generateUniqueToken } from '@/src/lib/generateUniqueToken'
import { sendManualValidationAlert } from '@/src/lib/mail/utils'
import { getMemberId } from '@/src/lib/supabase'
import { record } from '@/src/lib/supabase/record'

export default function MailConfirm({
  userIdFromlocalStorage,
  paymentContext,
}: {
  userIdFromlocalStorage: string
  paymentContext: {
    paymentCode: string
    checkoutIntentId: string
    orderId: string
  }
}) {
  const [recordInDb, setRecordInDb] = useState<boolean>(false)
  const [lastMbrIdFromDB, setLastMbrIdFromDB] = useState<number | null>(null)
  const [storedPersonalInfo, setStoredPersonalInfo] = useState<PersonalInfo>()
  const [storedVehicle, setStoredVehicle] = useState<Vehicles[]>()
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
        // Vérifier que les données nécessaires sont présentes
        if (!storedPersonalInfo) {
          console.error('Données personnelles manquantes pour userId:', userIdFromlocalStorage)
          alert('Données personnelles manquantes. Veuillez recommencer le processus d\'inscription.')
          router.push('/membership')
          return
        }

        const response = await record(
          storedPersonalInfo,
          storedVehicle,
          lastMbrIdFromDB + 1,
          tokenForMember,
        )
        const data = await response.json()
        if (data.status !== 200) {
          const errorMessage = data.message || 'Erreur inconnue'
          alert(
            'Erreur pour vous enregistrer, merci de contacter le staff svp  et communiquer cette erreur : \n\n\n' +
              errorMessage +
              "\n\n Sans le message de l\'erreur, il nous sera difficile de vous aider !!!",
          )
          router.push('/contact')
        } else {
          // console.log('YES RECORD IN DB with ', storedPersonalInfo);
          const vehiclesAsText =
            storedVehicle && storedVehicle.length > 0
              ? storedVehicle
                  .map(
                    (vehicle, index) =>
                      `Véhicule ${index + 1} - Immatriculation: ${vehicle.immatriculation}, Mine: ${vehicle.mine}, Modèle: ${vehicle.model}, Couleur: ${vehicle.color}, Finition: ${vehicle.finition}`,
                  )
                  .join(' | ')
              : 'Aucun véhicule renseigné'

          const mailResponse = await sendManualValidationAlert({
            first_name: storedPersonalInfo?.first_name || '',
            last_name: storedPersonalInfo?.last_name || '',
            email: storedPersonalInfo?.email || '',
            userId: userIdFromlocalStorage,
            paymentCode: paymentContext.paymentCode,
            checkoutIntentId: paymentContext.checkoutIntentId,
            orderId: paymentContext.orderId,
            address: storedPersonalInfo?.address || '',
            zip_code: storedPersonalInfo?.zip_code || '',
            town: storedPersonalInfo?.town || '',
            birth_date: String(storedPersonalInfo?.birth_date || ''),
            country: storedPersonalInfo?.country || '',
            phone: storedPersonalInfo?.phone || '',
            vehicles: vehiclesAsText,
          })
          const finished = await mailResponse.json()
          if (finished.status === 200) {
            toast.success('Alerte envoyée au secrétariat pour validation manuelle')
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
            Paiement reçu, dossier en attente de validation manuelle
          </h2>
          <text className="mt-2 text-base text-gray-600 space-y-4 text-left">
            <p>Merci pour votre adhésion au Club 306.</p>
            <p>
              Le secrétariat a reçu une alerte avec vos informations complètes
              pour contrôle.
            </p>
            <p className="underline font-bold">
              Votre adhésion sera validée après vérification manuelle.
            </p>
          </text>
          <p className="text-red-500 font-extrabold text-center mt-4">
            Si besoin, nous vous recontacterons pour corriger certaines données
          </p>
        </section>
      )}
    </section>
  )
}
