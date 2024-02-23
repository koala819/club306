'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'

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

  console.log(events)

  const imageContent = (
    <div className="absolute bottom-0 left-0 p-4 text-white">
      <h2 className="text-xl font-semibold text-text-dark">Titre de l'image</h2>
      <p className="mt-6">
        Roulage en dynamique sur l’anneau de vitesse, expo en statique, parade
        de fin d’évènement.
      </p>
      <p className="mt-6">2021-03-06</p>
    </div>
  )
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
      <div className="m-10">
        <div className="container flex mx-auto mb-2">
          <div className="w-1/2 h-1/2">
            <div className=" relative">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <Image
                src="/images/homePageArticle2.jpg"
                alt="Your Image"
                width={500}
                height={250}
                className="w-full h-full object-cover mb-2 mr-2"
              />
              {imageContent}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <Image
                src="/images/homePageArticle2.jpg"
                alt="Your Image"
                width={500}
                height={250}
                className="w-full h-full object-cover"
              />
              {imageContent}
            </div>
          </div>
          <div className="w-1/2 relative">
            <div className="absolute inset-0 bg-black opacity-50 -right-2 ml-2"></div>
            <Image
              src="/images/homePageArticle2.jpg"
              alt="Your Image"
              width={500}
              height={500}
              className="w-full h-full object-cover ml-2"
            />
            {imageContent}
          </div>
        </div>
        <div className="container flex mx-auto">
          <div className="w-1/2 relative">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <Image
              src="/images/homePageArticle2.jpg"
              alt="Your Image"
              width={500}
              height={500}
              className="w-full h-full object-cover mr-2"
            />
            {imageContent}
          </div>
          <div className="w-1/2 h-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-black opacity-50 -right-2 ml-2"></div>
              <Image
                src="/images/homePageArticle2.jpg"
                alt="Your Image"
                width={500}
                height={250}
                className="w-full h-full object-cover mb-2 ml-2"
              />
              {imageContent}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-black opacity-50 -right-2 ml-2"></div>
              <Image
                src="/images/homePageArticle2.jpg"
                alt="Your Image"
                width={500}
                height={250}
                className="w-full h-full object-cover ml-2"
              />
              {imageContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
