'use client';
import Image from 'next/image';
import { ArticleProps, ArticlesProps } from '@/types/Components';
import Link from 'next/link';

export const Blog = ({ articles }: ArticlesProps) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {articles !== undefined &&
            articles.map((article: ArticleProps) => (
              <div className="p-4 md:w-1/3 " key={article.uid}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden dark:bg-gray-800">
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
                    <div className="title-font text-lg font-medium text-gray-900 mb-3 dark:text-blue-gray-400">
                      {article.data.title[0].text}
                    </div>
                    <div className="leading-relaxed mb-3">
                      {article.data.description[0].text}
                    </div>
                    <div className="flex items-center flex-wrap ">
                      <Link
                        className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0 hover:underline hover:text-[#DB2323]  dark:text-white dark:hover:text-blue-500"
                        href={`/${article.uid}`}
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
  );
};

export function linkResolver(document: any) {
  const xx = '/uid/' + document.uid;
  console.log('check xx\n\n', xx);
}
