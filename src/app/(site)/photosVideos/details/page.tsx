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

  const nbrPhotos = 21
  const photos = Array.from({ length: nbrPhotos }, (_, index) => ({
    src: `https://res.cloudinary.com/djbwavqnp/image/upload/c_fill,w_3840,h_2560,g_auto/f_auto/q_auto/v1/${eventYearTitle}${String(index).padStart(2, '0')}?_a=BAVCcWIB0`,
    width: sizeWidth,
    height: sizeHeight,
    id: index + 1,
  }))
  console.log(photos)
  const [currentImage, setCurrentImage] = useState(0)
  const [srcImage, setSrcImage] = useState('')
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false)

  const openLightbox = (index: number, src: string) => {
    setCurrentImage(index)
    setSrcImage(src)
    setLightboxIsOpen(true)
  }

  const closeLightbox = () => {
    setCurrentImage(0)
    setLightboxIsOpen(false)
  }
  console.log(srcImage)
  return (
    <div className="grid grid-cols-3">
      {photos.map((photo, index) => (
        <div key={index}>
          <CldImage
            onClick={() => openLightbox(index, photo.src)}
            crop="fill"
            src={photo.src}
            width={photo.width}
            height={photo.height}
            alt=""
            className="p-1"
            sizes="100vw"
          />
        </div>
      ))}
      <Lightbox
        index={currentImage}
        open={lightboxIsOpen}
        close={closeLightbox}
        slides={photos.map((photo) => ({
          src: photo.src,
          width: photo.width * 2,
          height: photo.height * 2,
        }))}
      />
    </div>
  )
}
