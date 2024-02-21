'use client'

import styles from '@/styles/reactIntersectionObserver.module.css'
import { BsPatchPlus } from 'react-icons/bs'
import { useInView } from 'react-intersection-observer'

import Image from 'next/image'
import Link from 'next/link'

import presentationPicture from '@/../../public/images/PeugeotPresentation.svg'

export const Presentation = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  })
  const renderContent = () => {
    return (
      <section className="w-full h-full items-center justify-center pb-4 dark:bg-gray-800">
        <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center ">
          <div className="lg:flex-grow w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
              Le Premier et Unique Club en France dédié à la Peugeot 306
            </h1>
            <p className="mb-8 leading-relaxed dark:text-blue-gray-400">
              Le club a été créé suite à un besoin exprimé par de nombreuses
              personnes qui sont membres de forums ou de groupes.
            </p>
            <div className="flex">
              <Link href="/membership">
                <button className="flex items-center px-4 py-2 mr-5 duration-150 active:shadow-lg navbarlinkHover dark:border-principal-dark border-2 border-principal-light">
                  <BsPatchPlus size={22} className="mr-2" />
                  Adhérer ...
                </button>
              </Link>
              <Link href="/club">
                <button className="flex items-center px-4 py-2 rounded-lg duration-150 active:shadow-lg navbarlinkHover border-2 border-principal-light dark:border-principal-dark">
                  <BsPatchPlus size={22} className="mr-2" />
                  En savoir plus ...
                </button>
              </Link>
            </div>
          </div>
          <div className="w-1/2">
            <Image
              src={presentationPicture}
              alt="Une Peugeot 306 rouge avec à l'arrière plan l'ancien logo Peugeot."
              width={720}
              height={600}
              className="mr-3 h-6 sm:h-10"
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
        <div className="flex items-center justify-around mt-4 bg-principal-light dark:bg-principal-dark w-full h-20">
          <div className="flex items-center">
            <Image
              className="px-2"
              src="/images/helmet.svg"
              alt="Adhesion"
              width={50}
              height={50}
            />
            <p className="px-2 text-text-dark font-bold">+300 Membres actifs</p>
          </div>
          <div className="flex items-center">
            <Image
              className="px-2"
              src="images/car.svg"
              alt="Adhesion"
              width={60}
              height={60}
            />
            <p className="px-2 text-text-dark font-bold">+116 Véhicules</p>
          </div>
          <div className="flex items-center">
            <Image
              className="px-2"
              src="/images/user.svg"
              alt="Adhesion"
              width={50}
              height={50}
            />
            <p className="px-2 text-text-dark font-bold">
              Conseils Personnalisés
            </p>
          </div>
          <div className="flex items-center">
            <Image
              className="px-2"
              src="/images/gearLever.svg"
              alt="Adhesion"
              width={35}
              height={35}
            />
            <p className="px-2 text-text-dark font-bold">Avantage pièces</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div
      className={
        inView ? `${styles.slider} ${styles.slider__zoom}` : `${styles.slider}`
      }
      ref={ref}
    >
      {renderContent()}
    </div>
  )
}
