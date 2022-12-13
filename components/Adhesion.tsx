import React from 'react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/reactIntersectionObserver.module.css';

export default function Adhesion() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4
  });
  const renderContent = () => {
    return (
      <section className='w-full bg-[#D7DEED] border-0'>
        <div className='flex justify-center items-center h-screen'>
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
}