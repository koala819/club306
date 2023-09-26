'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import styles from '@/styles/reactIntersectionObserver.module.css';
import { ArticleProps, ArticlesProps } from '@/types/models';

export const BlogSection = ({ articles }: ArticlesProps) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.2,
  });
  const renderContent = () => {
    return (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {articles !== undefined &&
              articles.map((article: ArticleProps) => (
                <div className="p-4 md:w-1/3" key={article.uid}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden dark:bg-gray-800">
                    <div className="relative aspect-video">
                      <Image
                        className="object-cover rounded-md"
                        src={article.data.featureImageUrl.url}
                        alt={article.data.featureImageUrl.alt || 'image'}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        fill
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 dark:text-gray-200 mb-1">
                        {article.data.dateEvent}
                      </h2>
                      <div className="title-font text-lg font-medium text-gray-900 mb-3 dark:text-gray-400">
                        {article.data.title[0].text}
                      </div>
                      <div className="leading-relaxed mb-3 dark:text-gray-200">
                        {article.data.description[0].text}
                      </div>
                      <div className="flex items-center flex-wrap ">
                        <Link
                          className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0 hover:underline hover:text-[#DB2323] dark:text-orange-600 dark:hover:text-orange-300"
                          href={`/${article.uid}`}
                        >
                          Lire Plus
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
  return (
    <div
      className={
        inView ? `${styles.slider} ${styles.slider__zoom}` : `${styles.slider}`
      }
      ref={ref}
    >
      {renderContent()}
    </div>
  );
};
