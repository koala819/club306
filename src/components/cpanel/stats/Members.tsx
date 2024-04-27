'use client'

import { FR } from 'country-flag-icons/react/3x2'
import { GB } from 'country-flag-icons/react/3x2'
import { BE } from 'country-flag-icons/react/3x2'
import { NL } from 'country-flag-icons/react/3x2'
import { CH } from 'country-flag-icons/react/3x2'
import { useEffect, useState } from 'react'

import { countMembers, countMembersByCountry } from '@/lib/supabase'

export default function Members() {
  const [nbMembers, setNbMembers] = useState(null)
  const [nbMembersByCountry, setNbMembersByCountry] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        setNbMembers(await countMembers())
        const countMembersByCountrys = await countMembersByCountry()
        countMembersByCountrys !== undefined &&
          setNbMembersByCountry(countMembersByCountrys)
      } catch (error) {
        console.log('error fetch data', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="flex flex-wrap text-center  items-center">
      <section className="text-center items-center mb-8 w-full">
        <div className="flex justify-center">
          <div className="p-4 w-full max-w-md">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-[#174191] w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                {nbMembers}
              </h2>
              <p className="leading-relaxed">Membres</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap text-center items-center justify-center w-full">
        {Object.keys(nbMembersByCountry).length !== 0 && (
          <div className="lg:flex grid grid-cols-2 sm:grid-cols-3 gap-4">
            {Object.entries<number>(nbMembersByCountry)
              .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
              .map(([country, count], index) => (
                <div key={index} className="space-x-4 p-4 ">
                  {country === 'France' && (
                    <div className="w-32 h-32">
                      <FR title="France" />
                    </div>
                  )}
                  {country === 'Angleterre' && (
                    <div className="w-32 h-32">
                      <GB title="Angleterre" />
                    </div>
                  )}
                  {country === 'Belgique' && (
                    <div className="w-32 h-32">
                      <BE title="Belgique" />
                    </div>
                  )}
                  {country === 'Hollande' && (
                    <div className="w-32 h-32">
                      <NL title="Hollande" />
                    </div>
                  )}
                  {country === 'Suisse' && (
                    <div className="w-32 h-32">
                      <CH title="Suisse" />
                    </div>
                  )}
                  <h2 className="text-md font-medium text-gray-900">
                    {count} membres
                  </h2>
                  <p className="text-sm">en {country}</p>
                </div>
              ))}
          </div>
        )}
      </section>
    </div>
  )
}
