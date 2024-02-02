'use client'

import { useSession } from 'next-auth/react'
import 'react-vertical-timeline-component/style.min.css'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Event() {
  const { data: session } = useSession()
  const router = useRouter()
  const { resolvedTheme } = useTheme()

  const events = [
    {
      title: 'Youngtimer Festival',
      img: 'https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/64d6324ab5ddf100a52cd2b7/website/YT250x100_32059042-f1c8-47de-bd9f-6353bb1937b6_7ec32563-80c4-4ec4-8533-4184b31b2ebd.jpg',
      lieux: 'MONTLHÉRY (91)',
      date: '27-04-2024',
      description:
        "Roulage en dynamique sur l’anneau de vitesse, expo en statique, parade de fin d’évènement Plus d'infos sur cet évènement, et inscription auprès de l'organisateur",
    },
    {
      title: 'PSCUK Fest',
      img: 'https://pscuk.net/wp-content/uploads/2019/08/PSCUK_logo-100.png',
      lieux: 'HILLCLIMB (UK)',
      date: '13-07-2024',
      description: 'Roulage en dynamique, expo en statique',
    },
    {
      title: 'Big Car Show',
      img: 'https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/355846746_285355980559758_2302410137672594369_n.jpg',
      lieux: 'LE MANS (72)',
      date: '18-08-2024',
      description: 'Roulage en dynamique, expo en statique',
    },
    // {
    //   title: 'Rassemblement Saint Tropez',
    //   lieux: 'Gassin (83)',
    //   date: '13-09-2024',
    //   description:
    //     'Samedi : Balade sur le tracé du rallye du Var et expo en statique Dimanche : quartier libre : Kart, paintball ou plage selon vos envies',
    // },
    // {
    //   title: 'Rassemblement Bretagne',
    //   lieux: 'PABU (22)',
    //   date: 'Date à venir',
    //   description:
    //     'Balade le long de la Côte de Granit Rose, reste du programme à venir',
    // },
    // {
    //   title: 'Rassemblement bordelais',
    //   lieux: 'GIRONDE (33)',
    //   date: 'Date à venir',
    //   description: 'Programme à venir',
    // },
  ]
  return (
    <div>
      <h1 className="mx-32 my-8 ">Découvrez les prochains événements</h1>
      <p className="mx-32 my-8 w-1/2">
        Rejoignez-nous pour vivre des moments passionnants, connectez-vous avec
        d'autres amateurs de voitures et participez à des expériences
        inoubliables sur la route et au-delà !
      </p>
      <div className="mx-32">
        {events.map((event, index) => (
          <div key={index} className="my-4">
            {/* container principal */}
            <div className="flex">
              {/* container img + date */}
              <div className="w-64 h-64 ">
                <Image
                  src={event.img || ''}
                  alt={'toto'}
                  height={500}
                  width={500}
                  // layout="fill"
                  // objectFit="container"
                  // className=" rounded-tl-lg rounded-bl-lg"
                />
                {/* <p className="flex w-64 justify-center">{event.date}</p> */}
              </div>
              {/* container info */}
              <div className="bg-green-400 w-4/6 p-8">
                <h2>{event.title}</h2>
                <p>{event.lieux}</p>
                <p className="pt-8 mt-8">{event.description}</p>
              </div>
              {/* container btn */}
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
    </div>
  )
}
