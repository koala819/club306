import React from 'react';
import Image from 'next/image';
import picture306 from '../public/images/logoClub306.png';
import CC from '../public/images/Cc-by_new.svg.png';
import Link from 'next/link';

export default function Footer() {
  return (
    <div>
      <footer className='bg-[#3B578E] text-white'>

        <div className='px-4 py-6 flex items-center sm:flex-row'>
          <div className='block sm:hidden'>
            <Image
              src={picture306}
              alt='logo club 306'
              width={240}
              height={46}
              className='mr-3 h-6 sm:h-10 block sm:hidden'
            />
          </div>
          <div className='flex mr-2'>
            <p className='text-sm font-bold mx-2 sm:mt-0 mt-4'>
              BY
            </p>
            <Image
              src={CC}
              alt='logo club 306'
              width={20}
              height={20}
              className='mr-3 h-6 sm:h-10'
            />
          </div>
          <Link href='https://github.com/koala819/'>Xavier</Link>


          <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>

              {/*Facebook*/}
            <Link href='https://www.facebook.com/club306france/'>
                <svg
                  fill='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-5 h-5'
                  viewBox='0 0 24 24'
                >
                  <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                </svg>
              </Link>

            {/*Instagram*/}
            <Link href='https://www.instagram.com/club306officielfrance/'
                  className='ml-3'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-5 h-5'
                  viewBox='0 0 24 24'
                >
                  <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
                  <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
                </svg>
              </Link>
            </span>
        </div>

      </footer>
    </div>
  );
}
