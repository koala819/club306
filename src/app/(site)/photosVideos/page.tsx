import { Metadata } from 'next'

import PhotosVideos from '@/components/PhotosVideos'

export const metadata: Metadata = {
  title: 'Galerie Club 306: Photos & Vidéos Événements Automobiles',
  description:
    'Explorez la galerie Club 306 pour des moments uniques en photos et vidéos des rassemblements automobiles.',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/photosVideos`,
  },
}

const eventsData = [
  {
    id: 1,
    year: 2023,
    title: 'YoungTimer',
    img: 'https://newsdanciennes.com/content/uploads/2023/03/Youngtimers-Festival-2023-1.jpg',
    nbrPicture: 0,
    link: '/',
  },
  {
    id: 2,
    year: 2023,
    title: '30ans',
    img: 'https://www.francebleu.fr/s3/cruiser-production/2023/10/a6fc0d43-03e0-48ad-a29e-e283305c97c8/1200x680_sc_3061.jpg',
    nbrPicture: 0,
    link: '/',
  },
  {
    id: 3,
    year: 2024,
    title: 'YT24',
    img: '/images/YT24.jpg',
    nbrPicture: 0,
    link: '/',
  },
]

export default async function Page() {
  const updatedData = await updatePicturesCount()

  return <PhotosVideos eventsData={updatedData} />
}

async function updatePicturesCount() {
  return await Promise.all(
    eventsData.map(async (event) => {
      const count = await fetchPicturesCount(event.year.toString(), event.title)
      return { ...event, nbrPicture: count }
    }),
  )
}

async function fetchPicturesCount(
  year: string,
  folderName: string,
): Promise<number> {
  try {
    const url = `${process.env.CLIENT_URL}/api/cloudinary/?folder=${year}/${folderName}`
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Failed to fetch')
    }
    const data = await response.json()
    // console.log('data ', data.count)
    return data.count
  } catch (error) {
    console.error('Error fetching data:', error)
    return 0
  }
}
