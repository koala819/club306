import React from 'react';
import Image from "next/image";
import picturePartenaire1 from '../public/images/partenairesAutoDistribution.jpg';
import picturePartenaire2 from '../public/images/partenairesArtMotoren.jpg';
import picturePartenaire3 from '../public/images/partenairesOscaro.jpg';
import picturePartenaire4 from '../public/images/partenairesAventurePeugeot.jpg';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/reactIntersectionObserver.module.css';

export default function Partners() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4
  });
  const renderContent = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-full flex flex-col justify-center items-center'>
        <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-center pt-6'>
          Nos Partenaires
        </h1>
        <div className='px-4 py-2 w-full mt-4 text-center flex'>
          <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
            <div className='border-2 border-[#3B578E] px-4 py-6 rounded-lg'>
              <Image
                src={picturePartenaire1}
                alt='partenaire Auto Distribution'
                className='w-12 h-12 mb-3 inline-block'
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </div>
          </div>
          <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
            <div className='border-2 border-[#3B578E] px-4 py-6 rounded-lg'>
              <Image
                src={picturePartenaire2}
                alt='partenaire ART Motoren'
                className='w-12 h-12 mb-3 inline-block'
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </div>
          </div>
          <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
            <div className='border-2 border-[#3B578E] px-4 py-6 rounded-lg'>
              <Image
                src={picturePartenaire3}
                alt='partenaire Oscaro'
                className='w-12 h-12 mb-3 inline-block'
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </div>
          </div>
          <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
            <div className='border-2 border-[#3B578E] px-4 py-6 rounded-lg'>
              <Image
                src={picturePartenaire4}
                alt='partenaire Aventure Peugeot'
                className='w-12 h-12 mb-3 inline-block'
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  };

  return (
    <div className={inView ? `${styles.slider} ${styles.slider__zoom}` : `${styles.slider}`} ref={ref}>
      {renderContent()}
    </div>
  );
}