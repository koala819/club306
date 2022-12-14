import Image from "next/legacy/image";
import Link from 'next/link';
import styles from '../styles/reactIntersectionObserver.module.css';
import { useInView } from 'react-intersection-observer';
import presentationPicture from '../public/images/presentationPicture.jpg';
import React from 'react';


const Presentation = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4
  });
  const renderContent = () => {
    return (

        <section className='w-full h-screen items-center justify-center'>
          <div>
            <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
            <div
              className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
              <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
                Le Premier et Unique Club en France dédié à la Peugeot 306
              </h1>
              <p className='mb-8 leading-relaxed'>
                Le club a été crée suite à un besoin exprimé par de nombreuses personnes qui sont membres de forums ou
                de groupes.
              </p>
              <div className='flex justify-center'>
                <button
                  className='inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg'
                >
                  <Link href='/presentation'>
                    En savoir plus ...
                  </Link>
                </button>
              </div>
            </div>
            <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
              <Image
                src={presentationPicture}
                alt='logo club 306'
                width={720}
                height={600}
                className='mr-3 h-6 sm:h-10'
                layout='responsive'
              />
            </div>
          </div>
          </div>
          <div className='flex justify-center items-center'>
            <div className='w-1/2 flex justify-center items-center'>
              <p className='text-center md:text-3xl text-2xl font-medium'>
                Rejoignez nous en 30 secondes
              </p>
            </div>
            <div className='w-1/2 flex justify-center items-center'>
              <button
                className='w-1/3 text-center bg-[#DB2323] inline-flex py-3 px-5 rounded-lg items-center hover:bg-[#201C44] focus:outline-none'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  className='w-6 h-6 text-white'
                  viewBox='0 0 512 512'
                >
                  <path
                    d='M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z'></path>
                </svg>
                <span className='ml-4 flex items-start flex-col leading-none '>
                <span className='text-xs text-white mb-1'>
                  <Link href='membership'>Adhérer</Link>
                </span>
              </span>
              </button>
            </div>
          </div>
        </section>

    );

  };

  return (
    <div className={inView ? `${styles.slider} ${styles.slider__zoom}` : `${styles.slider}`} ref={ref}>
      {renderContent()}
    </div>
  );
};


export default Presentation;