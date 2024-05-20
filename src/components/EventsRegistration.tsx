'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

import { FormEventConfirm } from '@/src/components/FormEventConfirm'
import { FormEventConnect } from '@/src/components/FormEventConnect'

import { returnMemberInfo } from '@/src/lib/supabase'

export default function EventsRegistration() {
  const [userId, setUserId] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [eventID, setEventID] = useState<string>('')

  const { data: session } = useSession()
  const userMail = session?.user?.email || ''

  useEffect(() => {
    if (session) {
      try {
        async function fetchData() {
          const { last_name, first_name, id } = await returnMemberInfo(userMail)
          setFirstName(first_name)
          setLastName(last_name)
          setUserId(id)
        }
        fetchData()
      } catch (error: any) {
        toast.error(error)
      }
    }
  }, [session])

  const searchParams = useSearchParams()

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())
    const eventID = params.get('eventID') || ''
    setEventID(eventID)
  }, [searchParams])

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center py-20 space-x-4">
      <picture className="sm:absolute z-0 w-full h-full">
        <Image
          src="/images/youngtimer-festival.jpg"
          layout="fill"
          objectFit="cover"
          alt="Huit Peugeot 306 alignées dans un champ"
          className="blur brightness-50"
        />
      </picture>

      <text className="lg:w-1/2 z-10">
        <h1 className="p-8 text-text-dark">Réserver ma place à un évènement</h1>
        <p className="leading-9 text-text-dark px-2">
          Bienvenue sur la page de réservation d'événement du Club 306,
          l'endroit où chaque passionné de la route peut réserver sa place pour
          les moments inoubliables à venir ! Si vous êtes déjà membre,
          connectez-vous à votre compte. Pour nos nouveaux ami(e)s, merci
          d'adhérer au club. Rejoignez-nous sur la route et réservez dès
          maintenant votre place pour l'excitation à venir au Club 306 !
        </p>
      </text>

      <div className="my-8 z-10 w-11/12 lg:w-1/3">
        {session ? (
          <FormEventConfirm
            userMail={userMail}
            userFirstName={firstName}
            userLastName={lastName}
            userId={userId}
            eventID={eventID}
          />
        ) : (
          <FormEventConnect />
        )}
      </div>
    </div>
  )
}
