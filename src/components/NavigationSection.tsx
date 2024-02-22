import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

export const NavigationSection = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row my-24">
      {/* Div gauche */}
      <div className="w-1/2 relative mr-1">
        <Link href="/event">
          <div className="w-full h-full absolute inset-0 bg-black opacity-50"></div>
          {/* Voile noir opaque */}
          <Image
            src="/images/homePageArticle2.jpg"
            alt="Your Image"
            width={892}
            height={600}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 m-10">
            <h2 className="text-white text-2xl font-bold mb-6">
              Les événements
            </h2>
            <p className="text-white text-sm ">
              Rejoignez-nous pour vivre des moments passionnants, connectez-vous
              avec d'autres amateurs de voitures et participez à des expériences
              inoubliables sur la route et au-delà!
            </p>
          </div>
        </Link>
      </div>

      {/* Div droit */}
      <div className="w-1/2 ml-1">
        {/* Div haut */}
        <Link href="/blog">
          <div className="relative h-72 mb-2">
            <div className="w-full h-full absolute inset-0 bg-black opacity-50"></div>{' '}
            {/* Voile noir opaque */}
            <Image
              src="/images/homePageArticle3.jpg"
              alt="Your Image"
              width={892}
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 m-10">
              <h2 className="text-white text-2xl font-bold mb-6">Actualités</h2>
              <p className="text-white text-sm ">
                Plongez dans des récits passionnants, des conseils utiles et des
                actualités du monde automobile.
              </p>
            </div>
          </div>
        </Link>

        {/* Div bas */}
        <Link href="/photosVideos">
          <div className="relative h-72 ">
            <div className="w-full h-full absolute inset-0 bg-black opacity-50"></div>{' '}
            {/* Voile noir opaque */}
            <Image
              src="/images/homePageArticle1.jpg"
              alt="Your Image"
              width={892}
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 m-10">
              <h2 className="text-white text-2xl font-bold mb-6">
                Les Photos/Vidéos
              </h2>
              <p className="text-white text-sm ">
                Plongez dans l'action, revivez des moments mémorables, et
                découvrez l'esprit unique qui anime notre club.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
