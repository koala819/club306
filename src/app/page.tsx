'use client';
import { useEffect, useState } from 'react';
import { createClient } from '../../prismicio';
import { Homepage } from './homepage/Homepage';

export default async function RootPage() {
  const [mappedArticles, setMappedArticles] = useState<any>([]);

  useEffect(() => {
    async function handle() {
      const client = createClient();
      const articles = await client.getByTag('index');
      setMappedArticles(
        articles.results.map((article) => ({
          uid: article.uid,
          data: {
            featureImageUrl: article.data.featureImageUrl,
            dateEvent: article.data.dateEvent,
            title: article.data.title,
            description: article.data.description,
          },
        }))
      );
    }
    handle();
  }, []);

  return (
    <div>
      <title>Home</title>
      <meta name="description" content="My homepage" />
      <Homepage articles={mappedArticles} />
    </div>
  );
}
