'use client'

import React from 'react'
import PhotoAlbum from 'react-photo-album'

const photos = [
  { src: '/images/carroussel_306_Yellow.jpg', width: 800, height: 600 },
  { src: '/images/carroussel_306_Yellow.jpg', width: 1600, height: 900 },
  { src: '/images/carroussel_306_Yellow.jpg', width: 800, height: 600 },
  { src: '/images/carroussel_306_Yellow.jpg', width: 1600, height: 900 },
  { src: '/images/carroussel_306_Yellow.jpg', width: 800, height: 600 },
  { src: '/images/carroussel_306_Yellow.jpg', width: 1600, height: 900 },
  { src: '/images/carroussel_306_Yellow.jpg', width: 800, height: 600 },
  { src: '/images/carroussel_306_Yellow.jpg', width: 1600, height: 900 },
]

export default function PhotosVideos() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-center">Photos et Vidéos</h1>
      <PhotoAlbum layout="rows" photos={photos} />
    </div>
  )
}
