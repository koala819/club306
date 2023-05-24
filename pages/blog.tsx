import Layout from '../components/Layout';
import Prismic from 'prismic-javascript';
import type { GetStaticPropsContext } from 'next';
import { createClient } from '../prismicio';
import { RichText } from 'prismic-reactjs';
import Link from 'next/link';
import Image from 'next/image';

export default function Blog({ articles }: any) {
  return (
    <Layout title="Blog : Evenements passés">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {articles.results.map((article: any) => (
              <div className="p-4 md:w-1/3" key={article.uid}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={article.data.featureImageUrl.url}
                    alt={article.data.featureImageUrl.alt}
                    width="1000"
                    height="1000"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {article.data.dateEvent}
                    </h2>
                    <div className="title-font text-lg font-medium text-gray-900 mb-3">
                      {RichText.render(article.data.title)}
                    </div>
                    <div className="leading-relaxed mb-3">
                      {RichText.render(article.data.description)}
                    </div>
                    <div className="flex items-center flex-wrap ">
                      <Link
                        className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0"
                        href={`article/${article.uid}`}
                      >
                        Lire la suite
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps({
  previewData,
}: GetStaticPropsContext) {
  const client = createClient({ previewData });

  const articles = await client.query(
    Prismic.Predicates.at('document.type', 'articles')
    // Prismic.Predicates.at('document.tags', ['index'])
  );
  console.log('articles\n', articles);

  return {
    props: {
      articles: articles,
    },
  };
}

{
  /* <h1>Blog : Evenements passés</h1> */
}
{
  /* <div className="flex">
        <div className="flex flex-col w-2/3 ml-24 mr-20">
          {articles.results.map((article: any) => (
            <div key={article.uid}>
              <Link href={`article/${article.uid}`}>
                <div className="bold text-3xl text-blue-600 cursor-pointer">
                  {RichText.render(article.data.title)}
                </div>
              </Link>
              <Image
                className="w-2/3"
                src={article.data.featureImageUrl.url}
                alt=""
                width="1000"
                height="1000"
              />
              <h1>{RichText.render(article.data.description)}</h1>
            </div>
          ))}
        </div>
      </div> */
}
