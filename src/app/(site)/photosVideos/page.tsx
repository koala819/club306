'use client'

import { useEffect, useState } from 'react'
import React from 'react'
import Gallery from 'react-photo-gallery'

import Image from 'next/image'
import Link from 'next/link'

import { EventsData } from '@/types/models'

import { getAllEvents } from '@/lib/events'

export default function PhotosVideos() {
  const [events, setEvents] = useState<EventsData[]>([])

  useEffect(() => {
    async function fetch() {
      const eventResponse = await getAllEvents(new Date().getFullYear())
      if (eventResponse !== undefined && Array.isArray(eventResponse)) {
        setEvents(eventResponse)
      }
    }
    fetch()
  }, [])

  const data = [
    {
      id: 1,
      img: '/images/youngtimer-festival.jpg',
      title: 'Youngtimer Festival 1',
      descriptif: 'Youngtimer Festival',
      date: '05/12/2021',
    },
    {
      id: 2,
      img: '/images/youngtimer-festival.jpg',
      title: 'Youngtimer Festival 2',
      descriptif: 'Youngtimer Festival',
      date: '05/12/2021',
    },
    {
      id: 3,
      img: '/images/youngtimer-festival.jpg',
      title: 'Youngtimer Festival 3',
      descriptif: 'Youngtimer Festival',
      date: '05/12/2021',
    },
    {
      id: 4,
      img: '/images/youngtimer-festival.jpg',
      title: 'Youngtimer Festival 4',
      descriptif: 'Youngtimer Festival',
      date: '05/12/2021',
    },
    {
      id: 5,
      img: '/images/youngtimer-festival.jpg',
      title: 'Youngtimer Festival 5',
      descriptif: 'Youngtimer Festival',
      date: '05/12/2021',
    },
    {
      id: 6,
      img: '/images/youngtimer-festival.jpg',
      title: 'Youngtimer Festival 6',
      descriptif: 'Youngtimer Festival',
      date: '05/12/2021',
    },
  ]

  return (
    <div>
      {/* bandeau supp */}
      <div className="flex flex-col justify-center w-full bg-[url('/images/bandeauEvent.png')] relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="text-center text-text-dark mt-10 z-10">
          Plongez dans l'Action : Galerie Photos et Vidéos
        </h1>
        <p className="text-center text-text-dark my-10 w-1/2 z-10">
          Bienvenue dans notre galerie dédiée aux moments forts de notre
          communauté automobile. Ici, les images prennent vie et les vidéos
          captent l'énergie palpitante de chaque événement du Club 306.
          Découvrez l'essence même de nos rassemblements, explorez les détails
          qui rendent chaque rencontre unique, et ressentez la passion qui anime
          notre communauté.
        </p>
      </div>
      {/* galerie */}
      <div className="columns-3 py-3">
        {data.map((item, index) => {
          return (
            <div key={index} className="relative pb-3">
              <Link href={`/details/${item.id}`}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={1920}
                  height={1080}
                  className="object-cover w-full"
                />
                <div className="absolute w-3/4 top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <h1 className="text-center text-text-dark">{item.title}</h1>
                  <p className="text-center text-text-dark">
                    {item.descriptif}
                  </p>
                  <p className="text-center text-text-dark">{item.date}</p>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
