import { QueryOptions, type QueryParams, createClient } from 'next-sanity'
import { draftMode } from 'next/headers'
import { token } from './token'
import { apiVersion, dataset, projectId } from './api'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import 'server-only'

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  stega: {
    enabled: process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview',
    studioUrl: '/studio',
  },
})

export async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  revalidate = 60, // default revalidation time in seconds
  tags = [],
}: {
  query: QueryString
  params?: QueryParams
  revalidate?: number | false
  tags?: string[]
}) {
  const { isEnabled: isDraftMode } = await draftMode()

  if (isDraftMode && !token) {
    console.warn('Draft mode is enabled but SANITY_API_READ_TOKEN is missing. Draft content may not be accessible.')
  }

  const queryOptions: QueryOptions = {}
  let maybeRevalidate = revalidate

  if (isDraftMode) {
    queryOptions.token = token
    queryOptions.perspective = 'previewDrafts'
    queryOptions.stega = true

    maybeRevalidate = 0 // Do not cache in Draft Mode
  } else if (tags.length) {
    maybeRevalidate = false // Cache indefinitely if tags supplied
  }

  return client.fetch(query, params, {
    ...queryOptions,
    next: {
      revalidate: maybeRevalidate,
      tags,
    },
  })
}

export function getClient(preview?: { token: string }) {
  if (preview) {
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    })
  }
  return client
}

const builder = imageUrlBuilder(client)

// Fonction pour obtenir l'URL d'image
export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Fonction pour obtenir l'URL d'image en fonction de la source choisie
export function getImageUrl(article: any): string {
  if (!article) {
    return '/images/default_product.png'
  }

  try {
    // Si une image Cloudinary existe
    if (article.titleImagebyCloudinary?.url) {
      return article.titleImagebyCloudinary.url
    }

    // Sinon, utiliser l'image Sanity par défaut
    if (article.titleImage) {
      return urlFor(article.titleImage).url()
    }

    // Si aucune des deux images n'est disponible, revenir à l'image par défaut
    return '/images/default_product.png'
  } catch (error) {
    console.error('Error getting image URL:', error)
    return '/images/default_product.png'
  }
}
