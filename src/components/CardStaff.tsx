'use client'

import React from 'react'
import { BsLinkedin, BsYoutube } from 'react-icons/bs'
import { IoMdMailOpen } from 'react-icons/io'
import { VscGithub } from 'react-icons/vsc'

import Image from 'next/image'
import Link from 'next/link'

import { CardStaffProps } from '@/src/types/models'

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
    <section className=" rounded-lg mb-8 bg-slate-200 dark:bg-[#000015] p-6">
      <div className="grid place-items-center text-sm">
        <div className="max-w-full flex justify-center">
          <div className="text-center relative">
            <Image
              src={picture}
              className="rounded-full w-32 mb-4 mx-auto mt-2"
              alt={`photo de ${name} qui est un membre du staff Club306 `}
              width="100"
              height="100"
            />
            <h5 className="text-xl font-medium leading-tight mb-2 text-principal-light dark:text-principal-dark">
              {name}
            </h5>
            <p className="text-gray-500 dark:text-gray">{role}</p>
          </div>
        </div>

        <div className="mx-2 mt-4 text-justify dark:text-gray-300">
          {content}
        </div>

        <div>
          <p className="my-4 text-gray-500">
            {car !== undefined &&
              car.split('\n').map((line: any, index: number) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
          </p>
          <p className="text-gray-500">Localisation: {localisation}</p>
          <ul className="list-inside flex mx-auto justify-center my-4">
            <Link
              href={facebook}
              target="_blank"
              className={`text-gray-500 hover:text-principal-light dark:text-white dark:hover:text-principal-dark  ${
                facebook === '#' && 'hidden'
              }`}
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>

            <Link
              href={insta}
              target="_blank"
              className={`ml-3 text-gray-500 dark:text-white hover:text-principal-light dark:hover:text-principal-dark ${
                insta === '#' && 'hidden'
              }`}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            {github !== undefined && (
              <Link
                href={github}
                target="_blank"
                className="ml-3 text-gray-500 hover:text-principal-light dark:text-white dark:hover:text-principal-dark"
              >
                <VscGithub size={20} />
              </Link>
            )}
            {youtube !== undefined && (
              <Link
                href={youtube}
                target="_blank"
                className="ml-3 text-gray-500 hover:text-principal-light dark:text-white dark:hover:text-principal-dark"
              >
                <BsYoutube size={20} />
              </Link>
            )}
            {linkedin !== undefined && (
              <Link
                href={linkedin}
                target="_blank"
                className="ml-3 text-gray-500 hover:text-principal-light dark:text-white dark:hover:text-principal-dark"
              >
                <BsLinkedin size={20} />
              </Link>
            )}
            <Link
              href={`mailto:${mail}`}
              target="_blank"
              className="ml-4 text-gray-500 hover:text-principal-light dark:text-white dark:hover:text-principal-dark"
            >
              <IoMdMailOpen size={20} />
            </Link>
          </ul>
        </div>
      </div>
    </section>
  )
}
