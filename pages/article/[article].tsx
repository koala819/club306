import { RichText } from 'prismic-reactjs';
import { Layout } from '@/components/Layout';
import { Navbar } from '@/components/Navbar';
import type { GetServerSidePropsContext } from 'next';
import { createClient } from '../../prismicio';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import Provider from '@/components/Provider';

export default function Article({ article }: any) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Layout title="Article">
      <Provider>
        <Navbar />
        <div className="w-2/3 mx-auto flex justify-center items-center flex-col space-y-10 mt-4 mb-4">
          <div className="text-3xl uppercase font-bold opacity-50">
            {RichText.render(article.data.title)}
          </div>
          <div className="flex justify-center">
            <Image
              className="shadow-xl mb-10"
              src={article.data.featureImageUrl.url}
              alt=""
              width="1000"
              height="1000"
            />
          </div>
          <div className="text-lg opacity-75">
            {RichText.render(article.data.paragraphes)}
          </div>

          <Link href="/blog">
            <button className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg duration-150 hover:bg-blue-500 active:shadow-lg">
              Retour &nbsp; 👈
            </button>
          </Link>
        </div>
      </Provider>
    </Layout>
  );
}

export async function getServerSideProps({
  previewData,
  ...context
}: GetServerSidePropsContext) {
  const client = createClient({ previewData });

  let article = null;
  if (typeof context.query.article === 'string') {
    // console.log('check UID\n\n', context.query.article);
    article = await client.getByUID('articles', context.query.article);
  }

  return {
    props: {
      article: article,
    },
  };
}
