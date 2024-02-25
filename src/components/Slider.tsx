'use client'

import React, { useEffect, useState } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import Image from 'next/image'

import { PartnerInfoType } from '@/types/models'

import { ourPartners } from '@/lib/supabase'
import styles from '@/styles/Slider.module.css'

export const Slider = ({ session }: { session: any }) => {
  const [registredMember, setRegistredMember] = useState(false)
  const [partnerData, setPartnerData] = useState<PartnerInfoType[] | null>(null)
  const [showCode, setShowCode] = useState<boolean>(false)
  const [selectedTitle, setSelectedTitle] = useState<string>('')
  const responsiveSettings = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ]

  useEffect(() => {
    if (session) {
      setRegistredMember(true)
    }
    const fetchData = async () => {
      try {
        const response = await ourPartners()
        if (response.data !== null) {
          const formattedData = response.data.map(
            (item: { [x: string]: any }) => {
              return {
                id: item.id,
                title: item.title,
                code: item.code,
                linkImg: item.linkImg,
                remise: item.remise,
                site: item.site,
                alt: item.alt,
              }
            },
          )
          setPartnerData(formattedData)
        }
        return response.data
      } catch (error) {
        console.error('Error to get data from partners : ', error)
      }
    }
    fetchData()
  }, [])

  function displayPresent(title: string) {
    setShowCode(true)
    setSelectedTitle(title)
  }

  const handleClick = () => {
    if (registredMember === true) {
    } else {
      window.location.href = '/membership'
    }
  }

  return (
    <div className={styles.container}>
      {partnerData && (
        <Slide
          slidesToScroll={1}
          slidesToShow={1}
          indicators={false}
          responsive={responsiveSettings}
        >
          {partnerData.map((partner) => (
            <div key={partner.id}>
              <div
                className={`dark:bg-gray-800 ${styles.card} dark:hover:border-principal-dark`}
              >
                <div className="flex w-full justify-center">
                  <Image
                    loading="lazy"
                    src={partner.linkImg || ''}
                    alt={partner.alt || ''}
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="px-6 py-4 h-full">
                  <div className="font-[700] text-xl mb-2 flex justify-center">
                    <a
                      href={partner.site}
                      className="underline decoration-transparent transition duration-300 ease-in-out hover:decoration-inherit"
                    >
                      {partner.title}
                    </a>
                  </div>
                  <div className="h-16 flex items-center justify-center">
                    <p className="text-gray-700 text-base text-center dark:text-gray-400">
                      {partner.remise}
                    </p>
                  </div>
                </div>
                <button
                  className="w-full bg-principal-light dark:bg-principal-dark dark:text-bg-dark hover:bg-gray-700 text-text-dark  justify-center font-bold py-2 px-4 rounded flex dark:hover:bg-gray-900 dark:hover:text-white"
                  onMouseEnter={() => displayPresent(partner.title || '')}
                  onMouseLeave={() => setShowCode(false)}
                  onClick={() => handleClick()}
                >
                  <svg
                    fill="#000000"
                    className="fill-current w-5 h-5 mr-2"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 464.628 464.628"
                    enableBackground="new 0 0 464.628 464.628"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {' '}
                      <path d="m394.33,105.596h-76.136c22.944-22.372 37.216-53.596 37.216-88.096 0-9.665-7.835-17.5-17.5-17.5-44.786,0-84.057,24.045-105.596,59.9-21.539-35.855-60.81-59.9-105.595-59.9-9.665,0-17.5,7.835-17.5,17.5 0,34.5 14.273,65.724 37.216,88.096h-76.137c-9.665,0-17.5,7.835-17.5,17.5v324.033c0,9.665 7.835,17.5 17.5,17.5h324.032c9.665,0 17.5-7.835 17.5-17.5v-324.033c0-9.665-7.835-17.5-17.5-17.5zm-17.5,162.016h-127.016v-127.016h127.016v127.016zm-58.646-230.385c-7.525,32.765-33.378,58.618-66.144,66.143 7.526-32.766 33.379-58.619 66.144-66.143zm-105.596,66.142c-32.765-7.525-58.618-33.378-66.143-66.143 32.765,7.525 58.618,33.378 66.143,66.143zm2.226,37.227v127.016h-127.016v-127.016h127.016zm-127.016,162.016h127.016v127.017h-127.016v-127.017zm162.016,127.016v-127.016h127.016v127.017h-127.016z"></path>{' '}
                    </g>
                  </svg>
                  <span>
                    {showCode && selectedTitle === partner.title
                      ? registredMember
                        ? partner.code
                        : 'Réservé à nos membres !!!'
                      : 'Voir le code'}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </Slide>
      )}
    </div>
  )
}
