'use client'

import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { FormEventConnect } from '@/src/components/FormEventConnect'

export default function EventsRegistration() {
  const router = useRouter()

  const { data: session } = useSession()

  useEffect(() => {
    if (session) {
      router.push(`${process.env.CLIENT_URL}/event`)
    }
  }, [session, router])

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
        {!session && <FormEventConnect />}
      </div>
    </div>
  )
}
