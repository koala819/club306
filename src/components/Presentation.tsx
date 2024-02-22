'use client'

import styles from '@/styles/reactIntersectionObserver.module.css'
import { BsPatchPlus } from 'react-icons/bs'
import { useInView } from 'react-intersection-observer'

import Image from 'next/image'
import Link from 'next/link'

import { CercleLion } from './PeugeotPresentation'

import presentationPicture from '@/../../public/images/306Rouges16.svg'
import { useTheme } from '@/context/ThemeContext'

export const Presentation = () => {
  const { theme } = useTheme()
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  })

  const renderContent = () => {
    return (
      <section className="min-h-screen flex flex-col justify-between dark:bg-gray-800">
        <div className="container my-auto mx-auto flex px-5 lg:flex-row flex-col items-center justify-center">
          <div className="lg:flex-grow lg:w-1/2 w-5/6 lg:pr-24 flex flex-col lg:items-start lg:text-left mb-16 lg:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
              Le Premier et Unique Club en France dédié à la Peugeot 306
            </h1>
            <p className="mb-8 leading-relaxed dark:text-blue-gray-400">
              Le club a été créé suite à un besoin exprimé par de nombreuses
              personnes qui sont membres de forums ou de groupes.
            </p>
            <div className="flex flex-col lg:flex-row items-center">
              <Link href="/membership">
                <button className="flex items-center px-4 py-2 mr-0 mb-5 lg:mb-0 lg:mr-5 duration-150 active:shadow-lg navbarlinkHover dark:border-principal-dark border-2 border-principal-light">
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
          <div className="w-1/2 relative pb-32">
            <CercleLion
              color={
                theme === 'light'
                  ? 'var(--principal-light)'
                  : 'var(--principal-dark)'
              }
            />
            <Image
              src={presentationPicture}
              alt="Une Peugeot 306 rouge avec à l'arrière plan l'ancien logo Peugeot."
              width={720}
              height={600}
              className="absolute top-40"
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
        <div className="bg-principal-light dark:bg-principal-dark h-20 mb-20 flex items-center justify-around">
          <div className="flex items-center flex-col md:flex-row">
            <Image
              className="px-2"
              src="/images/helmet.svg"
              alt="Adhesion"
              width={50}
              height={50}
              color="red"
            />
            <p className="px-2 text-text-dark dark:text-bg-dark font-bold  text-center text-xs lg:text-lg">
              +300 Membres actifs
            </p>
          </div>
          <div className="flex items-center flex-col md:flex-row">
            <Image
              className="px-2"
              src="images/car.svg"
              alt="Adhesion"
              width={60}
              height={60}
            />
            <p className="px-2 text-text-dark dark:text-bg-dark font-bold text-center text-xs lg:text-lg">
              +116 Véhicules
            </p>
          </div>
          <div className="flex items-center flex-col md:flex-row">
            <Image
              className="px-2"
              src="/images/user.svg"
              alt="Adhesion"
              width={50}
              height={50}
            />
            <p className="px-2 text-text-dark dark:text-bg-dark font-bold  text-center text-xs lg:text-lg">
              Conseils Personnalisés
            </p>
          </div>
          <div className="flex items-center flex-col md:flex-row">
            <Image
              className="px-2"
              src="/images/gearLever.svg"
              alt="Adhesion"
              width={35}
              height={35}
            />
            <p className="px-2 text-text-dark dark:text-bg-dark font-bold  text-center text-xs lg:text-lg">
              Avantage pièces
            </p>
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
