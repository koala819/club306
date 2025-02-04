'use client'

import { Button } from '@heroui/react'
import { useSession } from 'next-auth/react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { EventsData } from '@/src/types/models'

import blackLogo from '@/public/images/logoClub306.png'
import whiteLogo from '@/public/images/logoClub306_blanc.png'
import { useTheme } from '@/src/context/ThemeContext'

export function EventCard({ event }: { event: EventsData }) {
  const { data: session } = useSession()

  const { theme } = useTheme()
  const router = useRouter()
  const dateToDisplay = formatDate(event.dates, event.month)
  const imgSrc = event.img || (theme === 'light' ? blackLogo : whiteLogo)

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
          event.link ? (
            <Button
              className="btn-custom"
              onPress={() => router.push(event.link)}
              target="_blank"
            >
              Réserver ma place
            </Button>
          ) : (
            <Button disabled>En attente</Button>
          )
        ) : (
          <Button
            className="btn-custom"
            onPress={() => router.push('/eventsRegistration')}
          >
            Se connecter
          </Button>
        )}
      </div>
    </div>
  )
}

function formatDate(date: string, month: number) {
  if (date === null || month === null) {
    return null
  }
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
