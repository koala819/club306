import { createClient } from '../../prismicio';
import { Homepage } from './homepage/Homepage';

export default async function Home() {
  const client = createClient();
  const articles = await client.getByTag('index');
  const mappedArticles = articles.results.map((article) => ({
    uid: article.uid,
    data: {
      featureImageUrl: article.data.featureImageUrl,
      dateEvent: article.data.dateEvent,
      title: article.data.title,
      description: article.data.description,
    },
  }));

  return (
    <div>
      <Homepage articles={mappedArticles} />
    </div>
  );
}
