'use client'

import { useSession } from 'next-auth/react'

import Image from 'next/image'

import { FormEventConnect } from '@/components/FormEventConnect'

export default function EventsRegistration() {
  const { data: session } = useSession()
  const userMail = session?.user?.email || ''

  return (
    // Container Principal
    <div className="flex items-center justify-around py-20">
      {/* Container Img background */}
      <div className="absolute z-0 w-full h-full">
        <Image
          src="/images/youngtimer-festival.jpg"
          width={1920}
          height={280}
          alt="Huit Peugeot 306 alignées dans un champ"
          className="object-cover w-full blur brightness-50"
        />
      </div>

      {/* Container Form */}
      <div className="my-8 z-10">
        <FormEventConnect userMail={userMail} />
      </div>

      {/* Container Paragraphe */}
      <div className="text-center w-1/2 p-8 pl-0 z-10">
        <h1 className="p-8 text-text-dark">Réserver ma place à un évènement</h1>
        <p className="leading-9 text-text-dark">
          Bienvenue sur la page de réservation d'événement du Club 306,
          l'endroit où chaque passionné de la route peut réserver sa place pour
          les moments inoubliables à venir ! Si vous êtes déjà membre,
          connectez-vous à votre compte. Pour nos nouveaux ami(e)s, merci
          d'adhérer au club. Rejoignez-nous sur la route et réservez dès
          maintenant votre place pour l'excitation à venir au Club 306 !
        </p>
      </div>
    </div>
  )
}
