'use client'

import { useEffect, useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

import { Events, ThemesEvent } from '@/src/types/models'

import { EditCalendar } from '@/src/components/cpanel/event/EditCalendar'

import { getAllEvents, getAllThemesEvent } from '@/src/lib/supabase'
import moment from 'moment'
import 'moment/locale/fr'

export default function Calendar({ year }: { year: number }) {
  const [isEditing, setIsEditing] = useState(false)
  const [events, setEvents] = useState<Events[]>([])
  const [evenThemes, setEvenThemes] = useState<ThemesEvent[]>([])
  const [editedEvent, setEditedEvent] = useState<Events>()

  useEffect(() => {
    moment.locale('fr')
    async function fetch() {
      const eventResponse = await getAllEvents(year)
      // console.log('eventResponse', eventResponse);
      if (eventResponse !== undefined && Array.isArray(eventResponse)) {
        setEvents(eventResponse)
      }
      const themeEventResp = await getAllThemesEvent()
      if (themeEventResp !== undefined && Array.isArray(themeEventResp)) {
        setEvenThemes(themeEventResp)
      }
    }
    fetch()
  }, [year])

  const openEditBox = (event: Events) => {
    // console.log('openEditBox', event);
    setEditedEvent({
      title: event.title,
      description: event.description,
      dates: event.dates,
      month: event.month,
      theme: event.theme,
      year: event.year,
    })

    setIsEditing(true)
  }

  return (
    <div>
      {isEditing && editedEvent && (
        <EditCalendar
          year={year}
          event={editedEvent}
          themes={evenThemes}
          closeEditor={setIsEditing}
        />
      )}

      {events.length > 0 && evenThemes.length > 0 ? (
        events
          .slice()
          .sort((a, b) => (a.month ?? 0) - (b.month ?? 0))
          .map((event) => {
            const monthIndex = (event?.month ?? 1) - 1
            const monthName = moment().month(monthIndex).format('MMMM')

            return event?.title ? (
              // WITH EVENT
              event?.theme && evenThemes[event?.theme - 1] !== undefined ? (
                <div
                  key={event.month}
                  onClick={() => openEditBox(event)}
                  // onMouseEnter={(e) => {
                  //   e.currentTarget.style.backgroundColor = 'rgb(96 165 250)';
                  //   e.currentTarget.style.color = 'rgb(0 0 0)';
                  // }}
                  // onMouseLeave={(e) => {
                  //   e.currentTarget.style.backgroundColor =
                  //     evenThemes[event?.theme || 0 - 1].background;
                  //   e.currentTarget.style.color =
                  //     evenThemes[event?.theme || 0 - 1].color;
                  // }}
                  className="p-5 cursor-pointer rounded mb-5 shadow-lg"
                  style={{
                    backgroundColor: evenThemes[event?.theme - 1].background,
                    color: evenThemes[event?.theme - 1].color,
                  }}
                >
                  <h3 className="text-center text-2xl uppercase pb-8 font-extrabold">
                    {event.title}
                  </h3>
                  <p>{event.description}</p>
                  <p className="text-center">{monthName}</p>
                </div>
              ) : null
            ) : (
              // WITHOUT EVENT
              <div
                key={event.id}
                onClick={() => openEditBox(event)}
                className="p-5 cursor-pointer rounded mb-5 shadow-lg bg-gray-400 hover:bg-blue-400 hover:text-black text-white capitalize"
              >
                <span>{monthName}</span>
                <h3 className="text-center text-2xl uppercase pb-8 font-extrabold">
                  {''}
                </h3>
              </div>
            )
          })
      ) : (
        <ClipLoader />
      )}
    </div>
  )
}
