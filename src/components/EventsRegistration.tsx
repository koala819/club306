'use client'

import { useSession } from 'next-auth/react'

import Image from 'next/image'

import { FormEventConnect } from '@/components/FormEventConnect'

export default function EventsRegistration() {
  const { data: session } = useSession()
  const userMail = session?.user?.email || ''

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center py-20 space-x-4">
      <picture className="sm:absolute z-0 w-full h-full">
        <Image
          src="/images/youngtimer-festival.jpg"
          layout="fill" // Utilisation de layout="fill" pour une couverture complète
          objectFit="cover" // Assurer que l'image couvre entièrement l'espace disponible
          alt="Huit Peugeot 306 alignées dans un champ"
          className="blur brightness-50" // Application d'un flou et ajustement de la luminosité
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
        <FormEventConnect userMail={userMail} />
      </div>
    </div>
  )
}
