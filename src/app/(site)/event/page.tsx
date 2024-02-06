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

  const { theme, setTheme } = useTheme()

  const blacklogo = '/images/logoClub306.png'
  const whitelogo = '/images/logoClub306_blanc.png'

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
      img: 'https://scontent-cdg4-3.xx.fbcdn.net/v/t39.30808-6/355480898_285350153893674_600223413613523048_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=783fdb&_nc_ohc=0i2YBSNAey8AX-Hnfmq&_nc_ht=scontent-cdg4-3.xx&oh=00_AfBKqk3OCs7aFoQolqiDZa-9rZfbJUiFNPaHnphhotPyOw&oe=65C23EC0',
      lieux: 'LE MANS (72)',
      date: '18-08-2024',
      description: 'Roulage en dynamique, expo en statique',
    },
    {
      title: 'Rassemblement Saint Tropez',
      img: 'https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/420094436_10231357157822352_1429647633587264682_n.jpg?stp=cp6_dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=d8d9c5&_nc_ohc=LUZGdV5zO7QAX9P3xp7&_nc_oc=AQmzrBJaygJ56tJYYe3zkK47gfZOOsaVdsLSV-tgJWT0L299FcKpW--Oz48OoAJNRf0&_nc_ht=scontent-cdg4-2.xx&oh=00_AfD_LvoRP9AsOvF6QuGncc0bGU2LOSXcpxi0cWzpvVhzsw&oe=65C15A8E',
      lieux: 'Gassin (83)',
      date: '13-09-2024',
      description:
        'Samedi : Balade sur le tracé du rallye du Var et expo en statique Dimanche : quartier libre : Kart, paintball ou plage selon vos envies',
    },
    {
      title: 'Rassemblement Bretagne',
      img: '',
      lieux: 'PABU (22)',
      date: 'Date à venir',
      description:
        'Balade le long de la Côte de Granit Rose, reste du programme à venir',
    },
    {
      title: 'Rassemblement bordelais',
      img: '',
      lieux: 'GIRONDE (33)',
      date: 'Date à venir',
      description: 'Programme à venir',
    },
  ]
  return (
    <div>
      <Image
        src="/images/bandeauEvent.png"
        width={1920}
        height={280}
        alt="Huit Peugeot 306 alignées dans un champ"
        className="object-cover w-full"
      />

      <h1 className="lg:mx-32 text-center xl:text-left mt-10">
        Découvrez les prochains événements
      </h1>
      <p className="lg:mx-32 mt-8 mb-16 w-3/4 text-center xl:text-left">
        Rejoignez-nous pour vivre des moments passionnants, connectez-vous avec
        d'autres amateurs de voitures et participez à des expériences
        inoubliables sur la route et au-delà !
      </p>
      <div className="mx-4 xl:mx-32">
        {events.map((event, index) => (
          <div key={index} className="">
            {/* container principal */}
            <div
              className={`flex flex-col xl:flex-row border-t-2 border-gray dark:border-text-dark items-center`}
            >
              {/* container img + date */}
              <div
                className={`w-full xl:w-1/4 text-principal-light dark:text-principal-dark m-8 sm:pt-0`}
              >
                <Image
                  src={event.img || (theme === 'light' ? blacklogo : whitelogo)}
                  alt={event.title}
                  height={256}
                  width={256}
                  className="mx-auto xl:mb-0 xl:mt-0 sm:mb-5 sm:mt-10"
                />
                <p className="flex justify-center pt-4 text-xl font-semibold">
                  {event.date}
                </p>
              </div>
              {/* container info */}
              <div className={`w-3/4 p-10 flex-col justify-center`}>
                <h2 className="text-center xl:text-left">{event.title}</h2>
                <p className="text-center xl:text-left text-gray-500">
                  {event.lieux}
                </p>
                <p className="pt-4 text-center xl:text-left">
                  {event.description}
                </p>
              </div>
              {/* container btn */}
              <div className="flex items-center justify-center xl:m-5 my-10  ">
                <button
                  className="w-44 rounded-lg py-2 mx-0 xl:ml-15 border-principal-light bg-transparent text-text-light hover:bg-principal-light hover:text-text-dark hover:border-transparent border-2
                  dark:bg-transparent dark:border-principal-dark dark:text-principal-dark dark:hover:bg-principal-dark dark:hover:border-principal-dark dark:hover:text-bg-dark"
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
