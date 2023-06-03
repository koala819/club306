import { RichText } from 'prismic-reactjs';
import { Layout } from '../../src/components/Layout';
import type { GetServerSidePropsContext } from 'next';
import { createClient } from '../../prismicio';
import Image from 'next/image';
import Link from 'next/link';

export default function Article({ article }: any) {
  return (
    <Layout title="Article">
      <div className="w-2/3 mx-auto">
        <h1 className="text-3xl uppercase font-bold opacity-50 my-10">
          {RichText.render(article.data.title)}
        </h1>
        <div className="flex justify-center">
          <Image
            className="shadow-xl mb-10"
            src={article.data.featureImageUrl.url}
            alt=""
            width="1000"
            height="1000"
          />
        </div>
        <h1 className="text-lg opacity-75">
          {RichText.render(article.data.paragraphes)}
        </h1>
        <div className="text-center my-12">
          <Link
            href="/blog"
            className="text-white bg-blue-500 border-0 py-4 px-6 focus:outline-none hover:bg-[#DB2323] rounded text-lg"
          >
            Retour &nbsp; 👈
          </Link>
        </div>
      </div>
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
