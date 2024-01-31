'use client'

import { NextUIProvider } from '@nextui-org/react'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { GiPartyPopper } from 'react-icons/gi'
import { GoFlame, GoRuby } from 'react-icons/go'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Event() {
  const { data: session } = useSession()
  const router = useRouter()
  const { resolvedTheme } = useTheme()

  const events = [
    {
      title: 'Youngtimer Festival',
      lieux: 'MONTLHÉRY (91)',
      date: '27-04-2024',
      description:
        "Roulage en dynamique sur l’anneau de vitesse, expo en statique, parade de fin d’évènement Plus d'infos sur cet évènement, et inscription auprès de l'organisateur",
    },
    {
      title: 'PSCUK Fest',
      lieux: 'HILLCLIMB (UK)',
      date: '13-07-2024',
      description: 'Roulage en dynamique, expo en statique',
    },
    {
      title: 'Big Car Show',
      lieux: 'LE MANS (72)',
      date: '18-08-2024',
      description: 'Roulage en dynamique, expo en statique',
    },
    {
      title: 'Rassemblement Saint Tropez',
      lieux: 'Gassin (83)',
      date: '13-09-2024',
      description:
        'Samedi : Balade sur le tracé du rallye du Var et expo en statique Dimanche : quartier libre : Kart, paintball ou plage selon vos envies',
    },
    {
      title: 'Rassemblement Bretagne',
      lieux: 'PABU (22)',
      date: 'Date à venir',
      description:
        'Balade le long de la Côte de Granit Rose, reste du programme à venir',
    },
    {
      title: 'Rassemblement bordelais',
      lieux: 'GIRONDE (33)',
      date: 'Date à venir',
      description: 'Programme à venir',
    },
  ]
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <h1 className="my-8 mx-32 text-principal-light text-4xl font-bold">
          Découvrez les prochains événements
        </h1>
        <p className="my-8 mx-32 w-1/2">
          Rejoignez-nous pour vivre des moments passionnants, connectez-vous
          avec d'autres amateurs de voitures et participez à des expériences
          inoubliables sur la route et au-delà !
        </p>
        <div className="mx-32">
          {events.map((event, index) => (
            <div key={index} className="my-4">
              {/*container principal*/}
              <div className="flex">
                {/*container img + date*/}
                <div className="w-64 h-64 ">
                  <Image
                    // Mettre les photos des events dans le dossier image et refresh le lien
                    /////////////////////////////////////////////////////////////////////////
                    src={`/images/${event.title.toLowerCase().replace(/ /g, '-')}.jpg`}
                    //////////////////////////////////////////////////////////////////////////
                    alt={event.title}
                    layout="fill"
                    objectFit="container"
                    className=" rounded-tl-lg rounded-bl-lg"
                  />
                  <p className="text-lg w-64 text-center">{event.date}</p>
                </div>
                {/*container info*/}
                <div className="bg-green-400 w-4/6 p-8">
                  <h2 className="text-2xl font-bold text-principal-light">
                    {event.title}
                  </h2>
                  <p className="text-lg">{event.lieux}</p>
                  <p className="pt-8 mt-8">{event.description}</p>
                </div>
                {/*container btn*/}
                <div className="flex items-center">
                  <button
                    className="rounded-lg mr-10 p-2 border-transparent bg-principal-light text-text-dark hover:bg-transparent hover:text-principal-light hover:border-principal-light border-2
                 dark:bg-principal-dark dark:text-bg-dark dark:hover:bg-transparent dark:hover:border-principal-dark dark:hover:text-principal-dark"
                  >
                    Réserver ma place
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </NextThemesProvider>
    </NextUIProvider>
  )
}
