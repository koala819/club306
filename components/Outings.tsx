import React from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import pictureArticle1 from '../public/images/homePageArticle1.jpg';
import pictureArticle2 from '../public/images/homePageArticle2.jpg';
import pictureArticle3 from '../public/images/homePageArticle3.jpg';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/reactIntersectionObserver.module.css';

export default function Outings() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4
  });
  const renderContent = () => {
  return (
    <section className='h-screen bg-[#D7DEED] '>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap -m-4'>
          <div className='p-4 md:w-1/3'>
            <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
              <Image
                src={pictureArticle1}
                alt='image article 1'
                className='lg:h-48 md:h-36 w-full object-cover object-center'
              />
              <div className='p-6'>
                <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
                  Nos dernières sorties
                </h2>
                <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                  2022: 100 ans de Peugeot VAUBAN Cergy (95)
                </h1>
                <p className='leading-relaxed mb-3'>
                  Peugeot Cergy VAUBAN a été créée en 1922 et à l’occasion de
                  ses 100ans le 26 juin 2022, une exposition a pris place.
                  Lors de cet événement, nous avons pu[…]
                </p>
                <div className='flex items-center flex-wrap '>
                  <Link className='text-blue-500 inline-flex items-center md:mb-2 lg:mb-0'
                        href='#'
                  >
                    Lire Plus
                    <svg
                      className='w-4 h-4 ml-2'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path d='M5 12h14'></path>
                      <path d='M12 5l7 7-7 7'></path>
                    </svg>
                  </Link>
                  <span
                    className='text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
                      <svg
                        className='w-4 h-4 mr-1'
                        stroke='currentColor'
                        strokeWidth='2'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        viewBox='0 0 24 24'
                      >
                        <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
                        <circle cx='12' cy='12' r='3'></circle>
                      </svg>
                      1.2K
                    </span>
                  <span className='text-gray-400 inline-flex items-center leading-none text-sm'>
                      <svg
                        className='w-4 h-4 mr-1'
                        stroke='currentColor'
                        strokeWidth='2'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        viewBox='0 0 24 24'
                      >
                        <path
                          d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                      </svg>
                      6
                    </span>
                </div>
              </div>
            </div>
          </div>
          <div className='p-4 md:w-1/3'>
            <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
              <Image
                src={pictureArticle2}
                alt='image article 2'
                className='lg:h-48 md:h-36 w-full object-cover object-center'
              />
              <div className='p-6'>
                <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
                  Nos dernières sorties
                </h2>
                <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                  Le Club306 présent à l’autodrome de Linas-Montlhéry le
                  samedi 29 mai 2021 à l’occasion du festival spécial voiture
                  française Liberté, Egalité, Roulez !
                </h1>
                <p className='leading-relaxed mb-3'>
                  Réservé votre week-end et surveillé votre boite mail!
                  L’équipe du Club306 revient à l’autodrome de Linas-Montlhéry
                  fin mai pour un week-end entre passionné d’autos ! Au
                  programme, un moment de convivialité[…]
                </p>
                <div className='flex items-center flex-wrap'>
                  <Link className='text-blue-500 inline-flex items-center md:mb-2 lg:mb-0'
                      href='#'
                  >
                    Lire Plus
                    <svg
                      className='w-4 h-4 ml-2'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path d='M5 12h14'></path>
                      <path d='M12 5l7 7-7 7'></path>
                    </svg>
                  </Link>
                  <span
                    className='text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
                      <svg
                        className='w-4 h-4 mr-1'
                        stroke='currentColor'
                        strokeWidth='2'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        viewBox='0 0 24 24'
                      >
                        <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
                        <circle cx='12' cy='12' r='3'></circle>
                      </svg>
                      1.2K
                    </span>
                  <span className='text-gray-400 inline-flex items-center leading-none text-sm'>
                      <svg
                        className='w-4 h-4 mr-1'
                        stroke='currentColor'
                        strokeWidth='2'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        viewBox='0 0 24 24'
                      >
                        <path
                          d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                      </svg>
                      6
                    </span>
                </div>
              </div>
            </div>
          </div>
          <div className='p-4 md:w-1/3'>
            <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
              <Image
                src={pictureArticle3}
                alt='image article 3'
                className='lg:h-48 md:h-36 w-full object-cover object-center'
              />
              <div className='p-6'>
                <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
                  Nos dernières sorties
                </h2>
                <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                  2020: Circuit des Ecuyers (02)
                </h1>
                <p className='leading-relaxed mb-3'>
                  Rassemblement : Sortie Piste Libre Date: 24 Octobre 2020
                  Lieu: Beuvardes (02080 Informations: Ici 2 membres: la
                  responsable Evenement (Isciane) et le Webmaster (Pascal) Au
                  programme: 8h40: arrivee sur les[…]
                </p>
                <div className='flex items-center flex-wrap '>
                  <Link className='text-blue-500 inline-flex items-center md:mb-2 lg:mb-0'
                        href='#'
                  >
                    Lire Plus
                    <svg
                      className='w-4 h-4 ml-2'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path d='M5 12h14'></path>
                      <path d='M12 5l7 7-7 7'></path>
                    </svg>
                  </Link>
                  <span
                    className='text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
                      <svg
                        className='w-4 h-4 mr-1'
                        stroke='currentColor'
                        strokeWidth='2'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        viewBox='0 0 24 24'
                      >
                        <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
                        <circle cx='12' cy='12' r='3'></circle>
                      </svg>
                      1.2K
                    </span>
                  <span className='text-gray-400 inline-flex items-center leading-none text-sm'>
                      <svg
                        className='w-4 h-4 mr-1'
                        stroke='currentColor'
                        strokeWidth='2'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        viewBox='0 0 24 24'
                      >
                        <path
                          d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                      </svg>
                      6
                    </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <button
          className='inline-flex text-white bg-[#DB2323] border-0 py-2 px-6 focus:outline-none hover:bg-[#201C44] rounded text-lg'>
          Nos autres sorties
        </button>
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
