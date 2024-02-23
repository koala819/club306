import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { EventsData } from '@/types/models'

import blackLogo from '@../../public/images/logoClub306.png'
import whiteLogo from '@../../public/images/logoClub306_blanc.png'
import { useTheme } from '@/context/ThemeContext'
import { getAllEvents } from '@/lib/events'

const NUMBER_OF_EVENTS_TO_DISPLAY = 3

export const EventsSection = () => {
  const { data: session } = useSession()
  const [latestEvents, setLatestEvents] = useState<EventsData[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const [isHoveredArray, setIsHoveredArray] = useState<boolean[]>(
    Array(latestEvents.length).fill(false),
  )
  const { theme } = useTheme()

  const eventRegister = () => {
    if (
      typeof window !== 'undefined' &&
      !window.location.pathname.includes('/eventsRegistration')
    ) {
      router.push('/eventsRegistration')
    }
  }

  const membership = () => {
    if (
      typeof window !== 'undefined' &&
      !window.location.pathname.includes('/membership')
    ) {
      router.push('/membership')
    }
  }
  const handleButtonHover = (index: number) => {
    const updatedHoveredArray = [...isHoveredArray]
    updatedHoveredArray[index] = true
    setIsHoveredArray(updatedHoveredArray)
  }

  const handleButtonLeave = (index: number) => {
    const updatedHoveredArray = [...isHoveredArray]
    updatedHoveredArray[index] = false
    setIsHoveredArray(updatedHoveredArray)
  }

  useEffect(() => {
    async function fetchLatestEvents() {
      try {
        const allEventsResponse = await getAllEvents(new Date().getFullYear())

        if (Array.isArray(allEventsResponse) && allEventsResponse.length > 0) {
          // Trier les événements par date
          const sortedEvents = allEventsResponse.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
          )

          // Filtrer les événements non vides
          const nonEmptyEvents = sortedEvents.filter((event) => {
            return event.title && event.dates && event.description
          })

          // Sélectionner les trois derniers événements non vides
          const latestEvents = nonEmptyEvents.slice(
            0,
            NUMBER_OF_EVENTS_TO_DISPLAY,
          )
          setLatestEvents(latestEvents)
        } else {
          console.error('Aucun événement trouvé.')
        }
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des événements :",
          error,
        )
      } finally {
        setLoading(false)
      }
    }

    fetchLatestEvents()
  }, [])

  if (loading) {
    return <div>Chargement...</div>
  }

  return (
    <section className="container mx-auto px-5">
      <h1 className="mb-8 mt-14 xl:text-left text-center">
        Les prochains événements
      </h1>
      <p className="mb-8 w-full mx-0 xl:text-left text-center">
        Rejoignez-nous pour vivre des moments passionnants, connectez-vous avec
        d'autres amateurs de voitures et participez à des expériences
        inoubliables sur la route et au-delà !
      </p>

      {latestEvents
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
            <div key={index}>
              {/* container principal */}
              <div className="flex flex-col xl:flex-row border-t-2 min-h-60 border-gray dark:border-text-dark items-center">
                {/* container img + date */}
                <div className="w-full xl:w-1/4 text-principal-light dark:text-principal-dark m-8 sm:pt-0">
                  <Image
                    src={
                      event.img || (theme === 'light' ? blackLogo : whiteLogo)
                    }
                    alt={event.title}
                    height={156}
                    width={156}
                    className="mx-auto xl:mb-0 xl:mt-0 sm:mb-5 sm:mt-10"
                  />
                  <p className="flex justify-center pt-4 text-xl text-center font-semibold">
                    {dateToDisplay}
                  </p>
                </div>
                {/* container info */}
                <div className="w-full xl:w-3/4 p-4 flex-col justify-center">
                  <h2 className="text-center xl:text-left">{event.title}</h2>
                  <p className="text-center xl:text-left text-gray-500">
                    {event.place}
                  </p>
                  <p className="text-center px-20 pt-6 xl:text-left xl:p-0 xl:pt-5">
                    {event.description}
                  </p>
                </div>
                {/* container btn */}
                <div className="flex-col items-center justify-center relative xl:m-5 my-10">
                  {session ? (
                    <button
                      className="w-44 rounded-lg py-2 mx-0 xl:ml-15 border-principal-light bg-transparent text-text-light hover:bg-principal-light hover:text-text-dark hover:border-transparent border-2 dark:bg-transparent dark:border-principal-dark dark:text-principal-dark dark:hover:bg-principal-dark dark:hover:border-principal-dark dark:hover:text-bg-dark relative"
                      onClick={eventRegister}
                    >
                      Réserver ma place
                    </button>
                  ) : (
                    <button
                      className="w-44 rounded-lg py-2 mx-0 xl:ml-15 border-principal-light bg-transparent text-text-light hover:bg-principal-light hover:text-text-dark hover:border-transparent border-2
                        dark:bg-transparent dark:border-principal-dark dark:text-principal-dark dark:hover:bg-principal-dark dark:hover:border-principal-dark dark:hover:text-bg-dark relative"
                      onMouseEnter={() => handleButtonHover(index)}
                      onMouseLeave={() => handleButtonLeave(index)}
                    >
                      Réserver ma place
                      {isHoveredArray[index] && (
                        <div className="w-max absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-1 bg-white border border-principal-light p-2 rounded shadow-md dark:bg-[#000015] dark:border-principal-dark">
                          <p className="text-principal-light font-bold p-4 dark:text-principal-dark">
                            Je suis déjà membre
                          </p>
                          <button
                            className="w-1/2 mb-1 rounded py-2 border-principal-light bg-transparent text-text-light hover:bg-principal-light hover:text-text-dark hover:border-transparent border-2 dark:bg-transparent dark:border-principal-dark dark:text-principal-dark dark:hover:bg-principal-dark dark:hover:border-principal-dark dark:hover:text-bg-dark"
                            onClick={eventRegister}
                          >
                            Connexion
                          </button>
                          <p className="text-principal-light font-bold p-4 dark:text-principal-dark">
                            Sinon devenez membre
                          </p>
                          <button
                            className="w-1/2 rounded py-2 border-principal-light bg-transparent text-text-light hover:bg-principal-light hover:text-text-dark hover:border-transparent border-2 dark:bg-transparent dark:border-principal-dark dark:text-principal-dark dark:hover:bg-principal-dark dark:hover:border-principal-dark dark:hover:text-bg-dark"
                            onClick={membership}
                          >
                            S'inscrire
                          </button>
                        </div>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          )
        })}
    </section>
  )
}
