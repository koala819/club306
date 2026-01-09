/**
 * This route is responsible for the built-in authoring environment using Sanity Studio v3.
 * All routes under /studio will be handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */
'use client'

import dynamic from 'next/dynamic'
import config from '@/src/lib/blog/sanity/config'

const NextStudio = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto dark:border-gray-100"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Chargement de Sanity Studio...</p>
        </div>
      </div>
    ),
  }
)

export default function StudioPage() {
  return <NextStudio config={config} />
}
