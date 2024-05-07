import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

export const NavigationSection = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row my-16 lg:my-24">
      {/* Div gauche */}
      <div className="w-full md:w-1/2 relative mr-1 mb-2 md:mb-0 ">
        <Link href="/event">
          <div className="w-full h-full absolute inset-0 bg-black opacity-50"></div>
          {/* Voile noir opaque */}
          <Image
            src="/images/homePageArticle2.jpg"
            alt="Your Image"
            width={892}
            height={600}
            className="w-full h-full object-cover min-h-72"
          />
          <div className="absolute bottom-1/2 lg:bottom-0 left-0 translate-y-1/2 lg:translate-y-0 m-0 px-1 lg:px-0 lg:m-10">
            <h3 className="text-white text-2xl font-bold mb-6 text-center lg:text-left">
              Les événements
            </h3>
            <p className="text-white text-sm text-center lg:text-left ">
              Rejoignez-nous pour vivre des moments passionnants, connectez-vous
              avec d'autres amateurs de voitures et participez à des expériences
              inoubliables sur la route et au-delà!
            </p>
          </div>
        </Link>
      </div>

      {/* Div droit */}
      <div className="w-full md:w-1/2 ml-1">
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
            <div className="absolute bottom-1/2 lg:bottom-0 left-0 translate-y-1/2 lg:translate-y-0 m-0 px-1 lg:px-0 lg:m-10">
              <h3 className="text-white text-2xl font-bold mb-6 text-center lg:text-left">
                Actualités
              </h3>
              <p className="text-white text-sm text-center lg:text-left">
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
            <div className="absolute bottom-1/2 lg:bottom-0 left-0 translate-y-1/2 lg:translate-y-0 m-0 px-1 lg:px-0 lg:m-10">
              <h3 className="text-white text-2xl font-bold mb-6 text-center lg:text-left">
                Les Photos/Vidéos
              </h3>
              <p className="text-white text-sm text-center lg:text-left">
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
