'use client'

import React, { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

import { CldImage } from 'next-cloudinary'

export default function Details() {
  const eventYearTitle: string = localStorage.getItem(
    'eventYearTitle',
  ) as string
  const sizeWidth = 600
  const sizeHeight = 400
  let nbrPhotos = 21

  const photos = Array.from({ length: nbrPhotos }, (_, index) => ({
    src: `https://res.cloudinary.com/djbwavqnp/image/upload/c_fill,w_3840,h_2560,g_auto/f_auto/q_auto/v1/${eventYearTitle}${String(index).padStart(2, '0')}?_a=BAVCcWIB0`,
    width: sizeWidth,
    height: sizeHeight,
    id: index + 1,
  }))

  const [currentImage, setCurrentImage] = useState(0)
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false)

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setLightboxIsOpen(true)
  }

  const closeLightbox = () => {
    setCurrentImage(0)
    setLightboxIsOpen(false)
  }
  console.log(nbrPhotos)
  const renderPhotos = () => {
    const rows = []
    for (let i = 0; i < photos.length; i += 3) {
      rows.push(
        <div className="grid grid-cols-3" key={i}>
          {photos.slice(i, i + 3).map((photo, index) => (
            <div key={index} style={{ width: sizeWidth, height: sizeHeight }}>
              <CldImage
                onClick={() => openLightbox(i + index)}
                crop="fill"
                src={photo.src}
                width={sizeWidth}
                height={sizeHeight}
                alt=""
                className="p-1"
                sizes="100vw"
              />
            </div>
          ))}
        </div>,
      )
    }
    return rows
  }

  return (
    <div>
      {renderPhotos()}
      <Lightbox
        index={currentImage}
        open={lightboxIsOpen}
        close={closeLightbox}
        slides={photos.map((photo) => ({
          src: photo.src,
          width: sizeWidth * 2,
          height: sizeHeight * 2,
        }))}
      />
    </div>
  )
}
