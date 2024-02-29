'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'
import React from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { EventsDataPicture } from '@/types/models'

export default function PhotosVideos() {
  const router = useRouter()
  const currentYear = new Date().getFullYear()

  const data = [
    {
      id: 1,
      year: 2023,
      title: 'YoungTimer',
      img: 'https://newsdanciennes.com/content/uploads/2023/03/Youngtimers-Festival-2023-1.jpg',
      nbrPicture: 20,
      link: 'https://exemple.com/yougtimer',
    },
    {
      id: 2,
      year: 2023,
      title: '30 de la 306',
      img: 'https://www.francebleu.fr/s3/cruiser-production/2023/10/a6fc0d43-03e0-48ad-a29e-e283305c97c8/1200x680_sc_3061.jpg',
      nbrPicture: 12,
      link: 'https://exemple.com/30ans306',
    },
  ]

  const organizeEventsByYear = (): { [year: number]: EventsDataPicture[] } => {
    const eventsByYear: { [year: number]: EventsDataPicture[] } = {}
    data.forEach((event) => {
      const year = event.year
      if (event.year !== null && event.title !== null) {
        if (eventsByYear[year]) {
          eventsByYear[year].push(event)
        } else {
          eventsByYear[year] = [event]
        }
      }
    })
    return eventsByYear
  }

  const handleClick = (
    eventYear: string,
    eventTitle: string,
    idEvent: string,
  ) => {
    const eventYearTitle = eventYear + '/' + eventTitle + '/'
    const eventId = idEvent
    localStorage.setItem('eventYearTitle', eventYearTitle)
    localStorage.setItem('eventId', eventId)
    router.push(`/photosVideos/details`)
  }
  const renderAccordionItems = (): JSX.Element[] => {
    const eventsByYear = organizeEventsByYear()
    const accordionItems: JSX.Element[] = []
    accordionItems.push(
      <AccordionItem
        key={0}
        title={currentYear.toString()}
        className="flex flex-col items-center"
      >
        <div className="w-3/4 mx-auto">
          {eventsByYear[currentYear] ? (
            data.map((event, index) => (
              <div key={index}>
                <h2 className="">{event.title}</h2>
                <div
                  onClick={() =>
                    handleClick(
                      event.year.toString(),
                      event.title.toString(),
                      event.id.toString(),
                    )
                  }
                >
                  <Image
                    src={event.img}
                    alt={event.title}
                    height={256}
                    width={256}
                  />
                </div>
                <p>{event.nbrPicture} photos</p>
              </div>
            ))
          ) : (
            <div>
              <h2 className="">Rejoignez l'aventure 306 !</h2>
              <h3>Photos a venir !</h3>
            </div>
          )}
        </div>
      </AccordionItem>,
    )

    for (let i = 1; i <= 2; i++) {
      const year = parseInt((currentYear - i).toString())
      accordionItems.push(
        <AccordionItem
          key={i}
          title={(currentYear - i).toString()}
          className="flex flex-col items-center"
        >
          <div>
            {eventsByYear[year] ? (
              data.map((event, index) => (
                <div key={index}>
                  <h2 className="">{event.title}</h2>
                  <div
                    onClick={() =>
                      handleClick(
                        event.year.toString(),
                        event.title.toString(),
                        event.id.toString(),
                      )
                    }
                  >
                    <Image
                      src={event.img}
                      alt={event.title}
                      height={256}
                      width={256}
                    />
                  </div>
                  <p>{event.nbrPicture} photos</p>
                </div>
              ))
            ) : (
              <h3>Aucune photos pour le moment !</h3>
            )}
          </div>
        </AccordionItem>,
      )
    }

    return accordionItems
  }

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
      <div className="columns-3 py-3 flex">
        <Accordion
          defaultExpandedKeys={[[0].toString()]}
          className="text-center"
        >
          {data.length > 0 ? (
            renderAccordionItems()
          ) : (
            <AccordionItem
              key="no-data"
              title="Aucune photos pour le moment !"
              className="flex flex-col items-center"
            >
              <h3>Aucune photos pour le moment !</h3>
            </AccordionItem>
          )}
        </Accordion>
      </div>
    </div>
  )
}
