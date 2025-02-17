'use client'

import { useEffect, useState } from 'react'

import { EventsSection } from './EventsSection'
import { NavigationSection } from './NavigationSection'
import { Partners } from './Partners'
import { Presentation } from './Presentation'

import { createClient } from '@/src/prismicio'

export function Homepage() {
  const [mappedArticles, setMappedArticles] = useState<any>([])

  useEffect(() => {
    async function handle() {
      const client = createClient()
      const articles = await client.getByTag('index')
      setMappedArticles(
        articles.results.map((article: any) => ({
          uid: article.uid,
          data: {
            featureImageUrl: article.data.featureImageUrl,
            dateEvent: article.data.dateEvent,
            title: article.data.title,
            description: article.data.description,
          },
        })),
      )
    }
    handle()
  }, [])

  return (
    <div>
      <Presentation />
      <EventsSection />
      <NavigationSection />
      <Partners />
    </div>
  )
}
