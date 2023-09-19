import { createClient } from '../../../prismicio';
import { Blog } from '@/components/Blog';

export default async function Handle() {
  const client = createClient();
  const articles = await client.getByType('articles');
  const mappedArticles = articles.results.map((article: any) => ({
    uid: article.uid,
    data: {
      featureImageUrl: article.data.featureImageUrl,
      dateEvent: article.data.dateEvent,
      title: article.data.title,
      description: article.data.description,
    },
  }));

  return <Blog articles={mappedArticles} />;
}
