'use client'

// bg-blue-500 sm:bg-red-400 md:bg-green-400 lg:bg-yellow-500 xl:bg-orange-500 2xl:border-l-cyan-600
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import 'react-vertical-timeline-component/style.min.css'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { EventsData } from '@/types/models'

import { getAllEvents } from '@/lib/events'

export default function Event() {
  const { data: session } = useSession()
  const router = useRouter()
  const { resolvedTheme } = useTheme()
  const { theme, setTheme } = useTheme()
  const blackLogo = '/images/logoClub306.png'
  const whiteLogo = '/images/logoClub306_blanc.png'
  const currentYear = new Date().getFullYear
  const [events, setEvents] = useState<EventsData[]>([])

  const eventRegister = () => {
    if (
      typeof window !== 'undefined' &&
      !window.location.pathname.includes('/eventsRegistration')
    ) {
      router.push('/eventsRegistration')
    }
  }

  useEffect(() => {
    async function fetch() {
      const eventResponse = await getAllEvents(new Date().getFullYear())
      if (eventResponse !== undefined && Array.isArray(eventResponse)) {
        setEvents(eventResponse)
      }
    }
    fetch()
  }, [])

  return (
    <div>
      <Image
        src="/images/bandeauEvent.png"
        width={1920}
        height={280}
        alt="Huit Peugeot 306 alignées dans un champ"
        className="object-cover w-full"
      />

      <h1 className="mt-20 text-center px-10 xl:mx-32 xl:px-0 xl:text-left">
        Découvrez les prochains événements
      </h1>
      <p className="lg:mx-32 mt-10 mb-20 w-3/4 text-center xl:text-left">
        Rejoignez-nous pour vivre des moments passionnants, connectez-vous avec
        d'autres amateurs de voitures et participez à des expériences
        inoubliables sur la route et au-delà !
      </p>
      <div className="mx-4 xl:mx-32">
        {events
          .slice()
          .sort((a, b) => (a.month ?? 0) - (b.month ?? 0))
          .map((event, index) => {
            if (!event.title || !event.place || !event.description) {
              return null
            }

            let dateToDisplay

            if (
              event.dates.toLowerCase() == 'dates à venir' ||
              event.dates.toLowerCase() == '(dates à venir)'
            ) {
              const months = [
                'Janvier',
                'Février',
                'Mars',
                'Avril',
                'Mai',
                'Juin',
                'Juillet',
                'Août',
                'Septembre',
                'Octobre',
                'Novembre',
                'Décembre',
              ]

              const monthIndex = event.month - 1
              const month = months[monthIndex]

              dateToDisplay = `${month} ${event.dates}`
            } else {
              dateToDisplay = event.dates
            }

            return (
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
                      src={
                        event.img || (theme === 'light' ? blackLogo : whiteLogo)
                      }
                      alt={event.title}
                      height={256}
                      width={256}
                      className="mx-auto xl:mb-0 xl:mt-0 sm:mb-5 sm:mt-10"
                    />
                    <p className="flex justify-center pt-4 text-xl text-center font-semibold">
                      {dateToDisplay}
                    </p>
                  </div>
                  {/* container info */}
                  <div
                    className={`w-full xl:w-3/4 p-4 flex-col justify-center`}
                  >
                    <h2 className="text-center xl:text-left">{event.title}</h2>
                    <p className="text-center xl:text-left text-gray-500">
                      {event.place}
                    </p>
                    <p className="text-center px-20 pt-6 xl:text-left xl:p-0 xl:pt-5">
                      {event.description}
                    </p>
                  </div>
                  {/* container btn */}
                  <div className="flex items-center justify-center xl:m-5 my-10">
                    <button
                      onClick={eventRegister}
                      className="w-44 rounded-lg py-2 mx-0 xl:ml-15 border-principal-light bg-transparent text-text-light hover:bg-principal-light hover:text-text-dark hover:border-transparent border-2
              dark:bg-transparent dark:border-principal-dark dark:text-principal-dark dark:hover:bg-principal-dark dark:hover:border-principal-dark dark:hover:text-bg-dark"
                    >
                      Réserver ma place
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
