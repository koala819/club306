'use client'

import { Button, Tooltip } from '@nextui-org/react'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { EventsData } from '@/src/types/models'

import blackLogo from '@/public/images/logoClub306.png'
import whiteLogo from '@/public/images/logoClub306_blanc.png'
import { useTheme } from '@/src/context/ThemeContext'
import { checkRegisterMembers, returnIdFromMail } from '@/src/lib/newSupabase'

export function EventCard({ event }: { event: EventsData }) {
  const { data: session } = useSession()
  const [isRegistered, setIsRegistered] = useState<boolean>(false)
  const { theme } = useTheme()
  const router = useRouter()
  const dateToDisplay = formatDate(event.dates, event.month)
  const imgSrc = event.img || (theme === 'light' ? blackLogo : whiteLogo)
  const currentMonth = new Date().getMonth()

  useEffect(() => {
    async function checkRegister() {
      const response = await returnIdFromMail(session?.user?.email || '')
      const result = await response.json()

      let memberId = ''
      if (result && result.length > 0) {
        memberId = String(result[0].id)
      }

      const register = await checkRegisterMembers(memberId, event.id.toString())
      setIsRegistered(register)
    }
    checkRegister()
  }, [session])

  return (
    <div className="flex flex-col xl:flex-row border-t-2 min-h-60 border-gray dark:border-text-dark items-center">
      {/* container img + date */}
      <div className="w-full xl:w-1/4 text-principal-light dark:text-principal-dark m-8 sm:pt-0">
        <Image
          src={imgSrc}
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
      <div className="w-full xl:w-3/4 p-4 flex-col justify-center">
        <h2 className="text-center xl:text-left">{event.title}</h2>
        <p className="text-center xl:text-left text-gray-500">{event.place}</p>
        <p className="text-center px-20 pt-6 xl:text-left xl:p-0 xl:pt-5">
          {event.description}
        </p>
      </div>
      {/* container btn */}
      <div className="flex-col items-center justify-center relative xl:m-5 my-10">
        {session ? (
          isRegistered ? (
            <Button isDisabled>Déjà inscrit</Button>
          ) : (
            <Button
              className="btn-custom"
              onClick={() => {
                const query = new URLSearchParams({
                  eventID: event.id.toString(),
                })
                router.push(`/eventsRegistration?${query}`)
              }}
            >
              Réserver ma place
            </Button>
          )
        ) : (
          <Tooltip
            content={
              <div className="bg-white border border-principal-light p-2 rounded shadow-md dark:hover:bg-[#000015] dark:border-principal-dark m-4">
                <p className="w-full text-principal-light font-bold p-4 dark:text-principal-dark">
                  Je suis déjà membre
                </p>
                <div className="flex justify-center">
                  <Button
                    className="btn-custom"
                    onClick={() => router.push('/eventsRegistration')}
                  >
                    Connexion
                  </Button>
                </div>

                <p className="text-principal-light font-bold p-4 dark:text-principal-dark">
                  Sinon devenez membre
                </p>
                <div className="flex justify-center ">
                  <Button
                    className="btn-custom"
                    onClick={() => router.push('/membership')}
                  >
                    S'inscrire
                  </Button>
                </div>
              </div>
            }
          >
            <>
              {event.month > currentMonth ? (
                <Button className="btn-custom">Réserver ma place</Button>
              ) : (
                <Button disabled>Fini</Button>
              )}
            </>
          </Tooltip>
        )}
      </div>
    </div>
  )
}

function formatDate(date: string, month: number) {
  if (
    date.toLowerCase() == 'dates à venir' ||
    date.toLowerCase() == '(dates à venir)'
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

    const monthIndex = month - 1
    const newMonth = months[monthIndex]
    const dateToDisplay = `${newMonth} ${date}`

    return dateToDisplay
  }

  return date
}
