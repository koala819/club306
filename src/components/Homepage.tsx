'use client';
import { Picture306 } from './Picture306';
import { Presentation } from './Presentation';
import { BlogSection } from './Blog';
import { Partners } from './Partners';
import Alert from './Alert';
import { useEffect, useState } from 'react';
import { createClient } from '@/prismicio';

export function Homepage({ withMember }: { withMember: boolean }) {
  const [mappedArticles, setMappedArticles] = useState<any>([]);
  const [displayBox, setDisplayBox] = useState(true);

  useEffect(() => {
    async function handle() {
      const client = createClient();
      const articles = await client.getByTag('index');
      setMappedArticles(
        articles.results.map((article: any) => ({
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
      {withMember && displayBox && <Alert setDisplayBox={setDisplayBox} />}
      <div className="hidden md:block">
        <Picture306 />
      </div>
      <Presentation />
      <BlogSection articles={mappedArticles} />
      <Partners />
    </div>
  );
}
