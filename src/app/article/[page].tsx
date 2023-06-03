// import { RichText } from 'prismic-reactjs';
// import { Layout } from '../components/Layout';
// import type { GetServerSidePropsContext } from 'next';
// import { createClient } from '../../prismicio';
// import Image from 'next/image';
// import Link from 'next/link';

export default function Handle() {
  return (
    // <Layout title='Article'>
    //   <div className='w-2/3 mx-auto'>
    //     <h1 className='text-3xl uppercase font-bold opacity-50 my-10'>
    //       {RichText.render(article.data.title)}
    //     </h1>
    //     <div className='flex justify-center'>
    //       <Image
    //         className='shadow-xl mb-10'
    //         src={article.data.featureImageUrl.url}
    //         alt=''
    //         width='1000'
    //         height='1000'
    //       />
    //     </div>
    //     <h1 className='text-lg opacity-75'>
    //       {RichText.render(article.data.paragraphes)}
    //     </h1>
    //     <div className='text-center mb-20'>
    //       <Link
    //         href='/blog'
    //         className='inline-flex text-white bg-[#DB2323] border-0 py-2 px-6 focus:outline-none hover:bg-[#201C44] rounded text-lg'
    //       >
    //         Retour &nbsp; 👈
    //       </Link>
    //     </div>
    //   </div>
    // </Layout>
    <div>Il faut afficher 1 article du Blog !!!</div>
  );
}

// export async function getServerSideProps({
//   previewData,
//   ...context
// }: GetServerSidePropsContext) {
//   const client = createClient({ previewData });

//   let article = null;
//   if (typeof context.query.article === 'string') {
//     console.log('check UID', context.query.article);
//     article = await client.getByUID('articles', context.query.article);
//   }

//   return {
//     props: {
//       article: article,
//     },
//   };
// }
