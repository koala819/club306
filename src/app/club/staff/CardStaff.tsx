'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { VscGithub } from 'react-icons/vsc';
import { BsLinkedin, BsYoutube } from 'react-icons/bs';
import { IoMdMailOpen } from 'react-icons/io';
import { CardStaffProps } from '../../types/Components';

export const CardStaff = ({
  picture,
  name,
  role,
  content,
  car,
  localisation,
  facebook,
  insta,
  github,
  linkedin,
  mail,
  youtube,
}: CardStaffProps) => {
  return (
    <section className=' rounded-lg mb-8 bg-slate-200'>
      <div className='grid place-items-center text-sm'>
        <div className='max-w-full flex justify-center'>
          <div className='text-center relative'>
            <Image
              src={picture}
              className='rounded-full w-32 mb-4 mx-auto mt-2'
              alt={`photo de ${name} qui est un membre du staff Club306 `}
              width='100'
              height='100'
            />
            <h5 className='text-xl font-medium leading-tight mb-2'>{name}</h5>
            <p className='text-gray-500'>{role}</p>
          </div>
        </div>

        <div className='mx-2 mt-4 text-justify '>{content}</div>

        <div>
          <p className='my-4'>
            {car !== undefined &&
              car.split('\n').map((line: any, index: number) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
          </p>
          <p>Localisation: {localisation}</p>
          <ul className='list-inside flex mx-auto justify-center my-4'>
            <Link
              href={facebook}
              className={`text-gray-500 ${facebook === '#' && 'hidden'}`}
            >
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

            <Link
              href={insta}
              className={`ml-3 text-gray-500 ${insta === '#' && 'hidden'}`}
            >
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
            {github !== undefined && (
              <Link href={github} className='ml-3 text-gray-500'>
                <VscGithub size={20} />
              </Link>
            )}
            {youtube !== undefined && (
              <Link href={youtube} className='ml-3 text-gray-500'>
                <BsYoutube size={20} />
              </Link>
            )}
            {linkedin !== undefined && (
              <Link href={linkedin} className='ml-3 text-gray-500'>
                <BsLinkedin size={20} />
              </Link>
            )}
            <Link href={`mailto:${mail}`} className='ml-4 text-gray-500'>
              <IoMdMailOpen size={20} />
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
};
