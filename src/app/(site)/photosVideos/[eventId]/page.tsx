'use client'

import { Button, Spinner } from "@heroui/react"
import { useEffect, useState } from 'react'
import PhotoAlbum from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'
// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function App() {
  const [index, setIndex] = useState(-1)
  const [photos, setPhotos] = useState([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const searchParams = useSearchParams()

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())
    const year = params.get('year')
    const title = params.get('title')
    const folder = `${year}/${title}`
    setIsLoading(true)
    fetchPhotosFromCloudinary(folder).then((photos) => {
      setPhotos(photos)
      setIsLoading(false)
    })
  }, [searchParams])

  return (
    <div className="py-32 px-4">
      {isLoading ? (
        <div className="flex justify-center">
          <Spinner
            label="Chargement des photos ..."
            color="primary"
            labelColor="primary"
            size="lg"
          />
        </div>
      ) : (
        <>
          <PhotoAlbum
            photos={photos}
            layout="rows"
            targetRowHeight={150}
            onClick={({ index }) => setIndex(index)}
          />

          <Lightbox
            slides={photos}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            // enable optional lightbox plugins
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          />
          <Link href="/photosVideos" className=" flex justify-center mt-8">
            <Button className="btn-custom">Retour &nbsp; 👈</Button>
          </Link>
        </>
      )}
    </div>
  )
}

async function fetchPhotosFromCloudinary(folder: string) {
  const url = `${process.env.CLIENT_URL}/api/cloudinary?folder=${encodeURIComponent(folder)}`

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Failed to fetch images from Cloudinary')
    }
    const data = await response.json()

    const photos = data.images.map(
      (image: { url: string; width: number; height: number }) => {
        return {
          src: image.url,
          width: image.width,
          height: image.height,
        }
      },
    )

    return photos
  } catch (error) {
    console.error('Error fetching images:', error)
    return []
  }
}
