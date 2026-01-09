import Image from 'next/image'
import { PortableTextComponents } from '@portabletext/react'
import { urlFor } from '@/src/lib/blog/sanity/client'

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null

      const imageUrl = urlFor(value).width(800).height(600).url()
      const alt = value.alt || 'Image'

      const sizeClasses = {
        small: 'max-w-md',
        medium: 'max-w-2xl',
        large: 'max-w-4xl',
      }
      const sizeClass = sizeClasses[value.size as keyof typeof sizeClasses] || sizeClasses.medium

      return (
        <div className={`my-8 flex flex-col items-center ${sizeClass} mx-auto`}>
          <Image
            src={imageUrl}
            alt={alt}
            width={800}
            height={600}
            className="rounded-lg shadow-lg w-full h-auto"
          />
          {value.caption && (
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">{value.caption}</p>
          )}
        </div>
      )
    },
    youtube: ({ value }) => {
      if (!value?.url) return null

      // Extraire l'ID de la vidéo YouTube depuis l'URL
      const getYouTubeId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
        const match = url.match(regExp)
        return match && match[2].length === 11 ? match[2] : null
      }

      const videoId = getYouTubeId(value.url)
      if (!videoId) return null

      return (
        <div className="my-8 flex justify-center">
          <div className="relative w-full max-w-4xl aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )
    },
    cloudinaryImage: ({ value }) => {
      if (!value?.url) return null

      const sizeClasses = {
        small: 'max-w-md',
        medium: 'max-w-2xl',
        large: 'max-w-4xl',
      }

      return (
        <div className={`my-8 flex justify-center ${sizeClasses[value.size as keyof typeof sizeClasses] || sizeClasses.medium}`}>
          <Image
            src={value.url}
            alt={value.alt || 'Image Cloudinary'}
            width={1000}
            height={1000}
            className="rounded-lg shadow-lg"
          />
        </div>
      )
    },
    codeBlock: ({ value }) => {
      if (!value?.code) return null

      return (
        <div className="my-8">
          {value.filename && (
            <div className="bg-gray-800 text-gray-200 px-4 py-2 rounded-t-lg text-sm">
              {value.filename}
            </div>
          )}
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-b-lg overflow-x-auto">
            <code className={`language-${value.language || 'text'}`}>
              {value.code}
            </code>
          </pre>
        </div>
      )
    },
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold my-6">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold my-5">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold my-4">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold my-3">{children}</h4>,
    h5: ({ children }) => <h5 className="text-lg font-bold my-2">{children}</h5>,
    h6: ({ children }) => <h6 className="text-base font-bold my-2">{children}</h6>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => <p className="my-4 leading-relaxed">{children}</p>,
  },
  marks: {
    link: ({ children, value }) => {
      const target = value?.href?.startsWith('http') ? '_blank' : undefined
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-blue-600 hover:underline"
        >
          {children}
        </a>
      )
    },
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside my-4 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside my-4 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="ml-4">{children}</li>,
    number: ({ children }) => <li className="ml-4">{children}</li>,
  },
}
