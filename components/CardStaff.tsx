import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function CardStaff({
                                    picture,
                                    name,
                                    role,
                                    content,
                                    car,
                                    localisation,
                                    facebook,
                                    insta,
                                    mail
                                  }: CardStaffProps) {
  return (
    <section className=' rounded-lg mb-8 lg:bg-white bg-red-500 overflow-y-auto sm:bg-blue-300'>
      <div className='center grid place-items-center'>

        <div className='w-full  flex justify-center'>
          <div className="text-center relative" >
            <Image
              src={picture}
              className="rounded-full w-32 mb-4 mx-auto mt-2"
              alt="photo membre club306"
              width="100"
              height="100"
            />
            <h5 className="text-xl font-medium leading-tight mb-2">{name}</h5>
            <p className="text-gray-500">{role}</p>
          </div>
        </div>

        <div className='mx-2 mt-4'>{content}</div>

        <div>
          <p className='my-4'>Voiture(s): {car}</p>
          <p>Localisation: {localisation}</p>
          <ul className='list-inside flex mx-auto justify-center my-4'>
            <Link
              href={facebook}
              className='text-gray-500'>
              <svg
                fill='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-5 h-5'
                viewBox='0 0 24 24'
              >
                <path
                  d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
              </svg>
            </Link>
            <Link
              href={insta}
              className='ml-3 text-gray-500'>
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
                <path
                  d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
              </svg>
            </Link>
            <Link
              href={mail}
              className='ml-4 text-gray-500'>
              <svg fill='currentColor' strokeLinecap='round' strokeLinejoin='round'
                   strokeWidth='2' className='w-5 h-5' viewBox='0 0 24 24'>
                <path
                  d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
              </svg>
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
}

export interface CardStaffProps {
  picture: string
  name?: string,
  role?: string,
  content?: string,
  car?: string,
  localisation?: string,
  facebook?: any,
  insta?: any,
  mail?: any,
  children?: React.ReactNode
}