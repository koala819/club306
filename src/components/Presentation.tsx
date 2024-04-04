'use client'

import styles from '@/styles/reactIntersectionObserver.module.css'
import { useEffect, useState } from 'react'
import { BsPatchPlus } from 'react-icons/bs'
import { useInView } from 'react-intersection-observer'

import Image from 'next/image'
import Link from 'next/link'

import { CarSvg } from './CarSvg'
import { GearShiftSvg } from './GearShiftSvg'
import { HelmetSvg } from './HelmetSvg'
import { LionCircle } from './PeugeotPresentation'
import { UserSvg } from './UserSvg'

import presentationPicture from '@/../../public/images/306Rouges16.svg'
import { useTheme } from '@/context/ThemeContext'

export const Presentation = () => {
  const [screenSize, setScreenSize] = useState('')
  const { theme } = useTheme()
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  })

  useEffect(() => {
    const handleResize = () => {
      const largeur = window.innerWidth
      let newSize = ''

      if (largeur >= 1024) {
        newSize = 'ordinateur'
      } else if (largeur >= 768) {
        newSize = 'tablette'
      } else {
        newSize = 'telephone'
      }

      setScreenSize(newSize)
    }
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const sizeSvg1 = screenSize === 'ordinateur' ? 35 : 25
  const sizeSvg2 = screenSize === 'ordinateur' ? 50 : 40
  const sizeSvg3 = screenSize === 'ordinateur' ? 40 : 30

  const renderContent = () => {
    return (
      <section className="h-full lg:min-h-screen flex flex-col justify-between dark:bg-bg-dark">
        <div className="container lg:my-auto mx-auto my-0 flex px-5 lg:flex-row flex-col items-center justify-center">
          <div className="lg:flex-grow lg:w-1/2 w-5/6 lg:pr-24 flex flex-col lg:items-start lg:text-left lg:mb-16 mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-xl mb-4 lg:mb-8 font-medium text-principal-light dark:text-principal-dark">
              Le Premier et Unique Club en France dédié à la Peugeot 306
            </h1>
            <p className="my-1 lg:my-4 leading-relaxed dark:text-blue-gray-400 text-sm lg:text-base">
              Le club a été créé suite à un besoin exprimé par de nombreuses
              personnes qui sont membres de forums ou de groupes.
            </p>
            <div className="flex items-center mt-8 mb-9 lg:mb-0 w-max">
              <Link href="/membership">
                <button className="flex items-center text-sm lg:text-base px-4 py-2 mr-2 lg:mb-0 lg:mr-5 duration-150 active:shadow-lg navbarLinkHover dark:border-principal-dark border-2 border-principal-light dark:text-principal-dark">
                  <BsPatchPlus
                    size={22}
                    className="mr-2"
                    color={
                      theme === 'light'
                        ? 'var(--principal-light)'
                        : 'var(--principal-dark)'
                    }
                  />
                  Adhérer ...
                </button>
              </Link>
              <Link href="/club">
                <button className="flex items-center px-4 py-2 rounded-lg duration-150 active:shadow-lg navbarLinkHover border-2 border-principal-light dark:border-principal-dark dark:text-principal-dark text-sm lg:text-base">
                  <BsPatchPlus
                    size={22}
                    className="mr-2"
                    color={
                      theme === 'light'
                        ? 'var(--principal-light)'
                        : 'var(--principal-dark)'
                    }
                  />
                  En savoir plus ...
                </button>
              </Link>
            </div>
          </div>
          <div className="w-1/2 relative pb-14 my-4 lg:my-0 lg:pb-32 order-first lg:order-1">
            <LionCircle
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
              className="absolute top-14 lg:top-40"
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
        <div className="bg-principal-light dark:bg-principal-dark w-full h-20 mb-0 lg:mb-20 flex items-center justify-around">
          <div className="flex items-center flex-col md:flex-row lg:my-0 my-6">
            <HelmetSvg
              color={theme === 'light' ? 'var(--bg-light)' : 'var(--bg-dark)'}
              width={sizeSvg1}
              height={sizeSvg1}
            />
            <p className="px-2 text-text-dark dark:text-bg-dark font-bold  text-center text-xs lg:text-lg">
              +300 Membres actifs
            </p>
          </div>
          <div className="flex items-center flex-col md:flex-row">
            <CarSvg
              color={theme === 'light' ? 'var(--bg-light)' : 'var(--bg-dark)'}
              width={sizeSvg2}
              height={sizeSvg2}
            />
            <p className="px-2 text-text-dark dark:text-bg-dark font-bold text-center text-xs lg:text-lg">
              +356 Véhicules
            </p>
          </div>
          <div className="flex items-center flex-col md:flex-row ">
            <UserSvg
              color={theme === 'light' ? 'var(--bg-light)' : 'var(--bg-dark)'}
              width={sizeSvg3}
              height={sizeSvg3}
            />
            <p className="px-2 text-text-dark dark:text-bg-dark font-bold  text-center text-xs lg:text-lg">
              Conseils Personnalisés
            </p>
          </div>
          <div className="flex items-center flex-col md:flex-row">
            <GearShiftSvg
              color={theme === 'light' ? 'var(--bg-light)' : 'var(--bg-dark)'}
              width={sizeSvg1}
              height={sizeSvg1}
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
