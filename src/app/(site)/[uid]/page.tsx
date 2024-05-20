import { RichText } from 'prismic-reactjs';

import { createClient } from '@/src/prismicio';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@nextui-org/react';


type Params = { uid: string };

export default async function Article({ params }: { params: Params }) {
  const client = createClient();
  const article = await client
    .getByUID('articles', params.uid)
    .catch(() => notFound());

  return (
    // <Layout title="Article">
    //   <Navbar />
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
      <Button className="btn-custom">
          Retour &nbsp; 👈
        </Button>
      </Link>
    </div>
    // </Layout>
  );
}

// export async function getServerSideProps({
//   previewData,
//   ...context
// }: GetServerSidePropsContext) {
//   const client = createClient({ previewData });

//   let article = null;
//   if (typeof context.query.article === 'string') {
//     // console.log('check UID\n\n', context.query.article);
//     article = await client.getByUID('articles', context.query.article);
//   }

//   return {
//     props: {
//       article: article,
//     },
//   };
// }
