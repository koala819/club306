'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'

import { EventsData } from '@/src/types/models'

import { EventCard } from '@/src/components/EventCard'

import { getAllEvents } from '@/src/lib/events'

export default function Event() {
  const [events, setEvents] = useState<EventsData[]>([])

  useEffect(() => {
    async function fetchEvents() {
      const eventResponse = await getAllEvents(new Date().getFullYear())
      if (eventResponse !== undefined && Array.isArray(eventResponse)) {
        setEvents(eventResponse)
      }
    }
    fetchEvents()
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
          .sort((a, b) => {
            const monthDiff = (a.month ?? 0) - (b.month ?? 0)
            if (monthDiff !== 0) return monthDiff
            const dayA = parseInt(a.dates.split('/')[0], 10) || 0
            const dayB = parseInt(b.dates.split('/')[0], 10) || 0
            return dayA - dayB
          })
          .map((event, index) => {
            return <EventCard key={index} event={event} />
          })}
      </div>
    </div>
  )
}
