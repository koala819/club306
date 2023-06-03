import Outings from '../components/Outings';
import Partners from '../components/partners/Partners';
import Layout from '../components/Layout';
import Presentation from '../components/Presentation';
import type { GetStaticPropsContext } from 'next';
import { createClient } from '../prismicio';
import dynamic from 'next/dynamic';

const Picture306 = dynamic(() => import('../components/Picture306'), {
  ssr: false,
  loading: () => <p>Chargement ...</p>,
});

export default function Index({ articles }: any) {
  return (
    <Layout title="Index">
      <div className="hidden md:block">
        <Picture306 />
      </div>
      <Presentation />
      <Outings articles={articles} />
      <Partners />
    </Layout>
  );
}

export async function getServerSideProps({
  previewData,
}: GetStaticPropsContext) {
  const client = createClient({ previewData });

  const articles = await client.getByTag('index');

  return {
    props: {
      articles: articles,
    },
  };
}
