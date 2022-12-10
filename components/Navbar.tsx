import { useState } from 'react';
import Image from 'next/image';
import picture306 from '../public/images/logoClub306.png';
import Link from 'next/link';
import styles from '../styles/navbar.module.css';

export default function Navbar(props: any) {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLeClubOpen, setLeClubOpen] = useState(false);
  const [isEventOpen, setEventOpen] = useState(false);
  const [isMemberOpen, setMemberOpen] = useState(false);

  return (
    <div className='relative'>
      <nav className='flex px-4 border-b md:shadow-lg items-center px-2
            bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 '
           style={{ backgroundColor: props.bgColor.bgColor }}
      >
        <Link href='/'>
          <a>
            <Image
              src={picture306}
              alt='logo club 306'
              width={240}
              height={46}
              className='mr-3 h-6 sm:h-10'
            />
          </a>
        </Link>
        {/*SECTION MOBILE*/}
        <section className='MOBILE-MENU flex md:hidden ml-auto top-full left-0 right-0 '>
          <div
            className='HAMBURGER-ICON space-y-2'
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
          </div>

          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
            <div
              className='absolute top-0 right-0 px-8 py-8'
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className='h-8 w-8 text-gray-600'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </svg>
            </div>
            <ul className='flex flex-col items-center justify-between min-h-[250px]'>
              <li
                className='flex justify-between p-4 items-center hover:bg-gray-50 space-x-2 border-b border-gray-400 my-8 uppercase'>
                <Link href='/'>Accueil</Link>
              </li>

              <li onClick={() => setLeClubOpen((prev) => !prev)}>
                <div
                  className='flex justify-between p-4 items-center hover:bg-gray-50 space-x-2 border-b border-gray-400 my-8 uppercase'
                >
                  <span>le Club</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-4 h-4 fill-current pt-1'
                    viewBox='0 0 24 24'
                  >
                    <path d='M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z' />
                  </svg>
                </div>
                <ul className={isLeClubOpen ? 'showSubMenu' : 'hideMenuNav'}>
                  <li>
                    <Link href='presentation' className='flex px-4 py-3 hover:bg-gray-50'>
                      Présentation
                    </Link>
                  </li>
                  <li>
                    <Link href='staff' className='flex px-4 py-3 hover:bg-gray-50'>
                      le Staff
                    </Link>
                  </li>
                  <li>
                    <Link href='rules' className='flex px-4 py-3 hover:bg-gray-50'>
                      Règlement du Club
                    </Link>
                  </li>
                  <li>
                    <Link href='press' className='flex px-4 py-3 hover:bg-gray-50'>
                      Revue de presse
                    </Link>
                  </li>
                </ul>
              </li>

              <li onClick={() => setEventOpen((prev) => !prev)}>
                <div
                  className='flex justify-between p-4 items-center hover:bg-gray-50 space-x-2 border-b border-gray-400 my-8 uppercase'
                >
                  <span>Evènements</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-4 h-4 fill-current pt-1'
                    viewBox='0 0 24 24'
                  >
                    <path d='M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z' />
                  </svg>
                </div>
                <ul className={isEventOpen ? 'showSubMenu' : 'hideMenuNav'}>
                  <li>
                    <Link href='Event' className='flex px-4 py-3 hover:bg-gray-50'>
                      Evènements à venir
                    </Link>
                  </li>
                  <li>
                    <Link href='blog' className='flex px-4 py-3 hover:bg-gray-50'>
                      Blog : évènements passés
                    </Link>
                  </li>
                </ul>
              </li>

              <li onClick={() => setMemberOpen((prev) => !prev)}>
                <div
                  className='flex justify-between p-4 items-center hover:bg-gray-50 space-x-2 border-b border-gray-400 my-8 uppercase'
                >
                  <span>Membres</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-4 h-4 fill-current pt-1'
                    viewBox='0 0 24 24'
                  >
                    <path d='M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z' />
                  </svg>
                </div>
                <ul className={isMemberOpen ? 'showSubMenu' : 'hideMenuNav'}>
                  <li>
                    <Link href='login'>
                      Se Connecter
                    </Link>
                  </li>
                  <li>
                    <Link href='partners'>
                      Partenariats
                    </Link>
                  </li>
                </ul>
              </li>

              <li className='border-b border-gray-400 my-8 uppercase'>
                <Link href='contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </section>

        {/*SECTION NORMALE*/}
        <ul
          className='md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0 DESKTOP-MENU hidden space-x-8'>
          <li>
            <Link href='/'>
              <a className={styles.a}>Accueil</a>
            </Link>
          </li>
          <li className='relative parent'>
            <div
              className='flex justify-between md:inline-flex p-4 items-center hover:bg-gray-50 space-x-2'>
              <span>le Club</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-4 h-4 fill-current pt-1'
                viewBox='0 0 24 24'
              >
                <path d='M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z' />
              </svg>
            </div>
            <ul
              className='child transition duration-300 md:absolute top-full right-0 md:w-48 bg-white md:shadow-lg md:rounded-b '>
              <li>
                <Link href='presentation'>
                  <a className={styles.a}>Présentation</a>
                </Link>
              </li>
              <li>
                <Link href='staff'>
                  <a className={styles.a}>le Staff</a>
                </Link>
              </li>
              <li>
                <Link href='rules'>
                  <a className={styles.a}>Règlement du Club</a>
                </Link>
              </li>
              <li>
                <Link href='press'>
                  <a className={styles.a}>Revue de presse</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className='relative parent'>
            <div
              className='flex justify-between md:inline-flex p-4 items-center hover:bg-gray-50 space-x-2'>
              <span>Evènements</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-4 h-4 fill-current pt-1'
                viewBox='0 0 24 24'
              >
                <path d='M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z' />
              </svg>
            </div>
            <ul
              className='child transition duration-300 md:absolute top-full right-0 md:w-48 bg-white md:shadow-lg md:rounded-b '>
              <li>
                <Link href='event'>
                  <a className={styles.a}>Evènements à venir</a>
                </Link>
              </li>
              <li>
                <Link href='blog'>
                  <a className={styles.a}>Blog : évènements passés</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className='relative parent'>
            <div
              className='flex justify-between md:inline-flex p-4 items-center hover:bg-gray-50 space-x-2'
            >
              <span>Membres</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-4 h-4 fill-current pt-1'
                viewBox='0 0 24 24'
              >
                <path d='M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z' />
              </svg>
            </div>
            <ul
              className='child transition duration-300 md:absolute top-full right-0 md:w-48 bg-white md:shadow-lg md:rounded-b '>
              <li>
                <Link href='login'>
                  <a className={styles.a}>Se Connecter</a>
                </Link>
              </li>
              <li>
                <Link href='partners'>
                  <a className={styles.a}>Partenariats</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href='contact'>
              <a className={styles.a}>Contact</a>
            </Link>
          </li>
        </ul>
        {/* <div className="ml-auto md:hidden text-gray-500 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
        </div> */}
      </nav>
    </div>
  );
}

