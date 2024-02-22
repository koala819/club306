'use client'

import { useEffect, useState } from 'react'

import Alert from './Alert'
import { EventsSection } from './EventsSection'
import { NavigationSection } from './NavigationSection'
import { Partners } from './Partners'
import { Presentation } from './Presentation'

import { createClient } from '@/prismicio'

export function Homepage({ withMember }: { withMember: boolean }) {
  const [mappedArticles, setMappedArticles] = useState<any>([])
  const [displayBox, setDisplayBox] = useState(true)

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
      {withMember && displayBox && <Alert setDisplayBox={setDisplayBox} />}
      <Presentation />
      <EventsSection />
      <NavigationSection />
      <Partners />
    </div>
  )
}
