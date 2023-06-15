'use client';
import Image from 'next/image';
import { Button } from 'antd';
import { BsPatchPlus } from 'react-icons/bs';
import { Adhesion } from './Adhesion';
import styles from './reactIntersectionObserver.module.css';
import { useInView } from 'react-intersection-observer';
import presentationPicture from '../../../public/images/presentationPicture.jpg';

export const Presentation = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });
  const renderContent = () => {
    return (
      <section className="w-full h-full items-center justify-center pb-4">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Le Premier et Unique Club en France dédié à la Peugeot 306
            </h1>
            <p className="mb-8 leading-relaxed">
              Le club a été créé suite à un besoin exprimé par de nombreuses
              personnes qui sont membres de forums ou de groupes.
            </p>
            <Button
              type="primary"
              className="success"
              size="large"
              href="/club"
              icon={<BsPatchPlus size={20} />}
            >
              En savoir plus ...
            </Button>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              src={presentationPicture}
              alt="Deux Hommes dans une 306"
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