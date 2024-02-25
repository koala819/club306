'use client'

import React, { useEffect, useState } from 'react'
import PhotoAlbum from 'react-photo-album'

import { EventsData } from '@/types/models'

import { getAllEvents } from '@/lib/events'

const photos = [
  { src: '/images/carroussel_306_Yellow.jpg', width: 800, height: 600 },
  { src: '/images/carroussel_306_Yellow.jpg', width: 1600, height: 900 },
  { src: '/images/carroussel_306_Yellow.jpg', width: 800, height: 600 },
  { src: '/images/carroussel_306_Yellow.jpg', width: 1600, height: 900 },
  { src: '/images/carroussel_306_Yellow.jpg', width: 800, height: 600 },
  { src: '/images/carroussel_306_Yellow.jpg', width: 1600, height: 900 },
  { src: '/images/carroussel_306_Yellow.jpg', width: 800, height: 600 },
  { src: '/images/carroussel_306_Yellow.jpg', width: 1600, height: 900 },
]

export default function Details() {
  const [events, setEvents] = useState<EventsData[]>([])

  useEffect(() => {
    async function fetchData() {
      try {
        const eventResponse = await getAllEvents(new Date().getFullYear())
        if (Array.isArray(eventResponse)) {
          setEvents(eventResponse)
        }
      } catch (error) {
        console.error('Error fetching events:', error)
      }
    }
    fetchData()
  }, [])

  {
    return (
      <div className="flex flex-col justify-center">
        <h1 className="text-center"></h1>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <PhotoAlbum layout="rows" photos={photos} />
      </div>
    )
  }
}
