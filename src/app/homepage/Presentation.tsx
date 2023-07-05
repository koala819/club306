'use client';
import Image from 'next/image';
import { BsPatchPlus } from 'react-icons/bs';
import { Adhesion } from './Adhesion';
import styles from './reactIntersectionObserver.module.css';
import { useInView } from 'react-intersection-observer';
import presentationPicture from '../../../public/images/presentationPicture.jpg';
import Link from 'next/link';

export const Presentation = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });
  const renderContent = () => {
    return (
      <section className="w-full h-full items-center justify-center pb-4 dark:bg-gray-800">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
              Le Premier et Unique Club en France dédié à la Peugeot 306
            </h1>
            <p className="mb-8 leading-relaxed dark:text-blue-gray-400">
              Le club a été créé suite à un besoin exprimé par de nombreuses
              personnes qui sont membres de forums ou de groupes.
            </p>
            <Link href="/club">
              <button className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg duration-150 hover:bg-blue-500 active:shadow-lg">
                <BsPatchPlus size={22} className="mr-2" />
                En savoir plus ...
              </button>
            </Link>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              src={presentationPicture}
              alt="Deux Personnes dans une 306"
              width={720}
              height={600}
              className="mr-3 h-6 sm:h-10"
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Adhesion />
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
