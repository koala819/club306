'use client';
import { useEffect, useState } from 'react';
import { countMembers, countMembersByCountry } from '@/lib/supabase';
import France from './flags/France';
import UK from './flags/UK';
import Belgium from './flags/Belgium';
import Netherlands from './flags/Netherlands';

export default function Members() {
  const [nbMembers, setNbMembers] = useState(null);
  const [nbMembersByCountry, setNbMembersByCountry] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setNbMembers(await countMembers());
        const countMembersByCountrys = await countMembersByCountry();
        countMembersByCountrys !== undefined &&
          setNbMembersByCountry(countMembersByCountrys);
      } catch (error) {
        console.log('error fetch data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap text-center  items-center">
      <div className="p-4 md:w-1/2 w-full">
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
      <div className="p-4 md:w-1/2 w-full">
        <div>
          {Object.keys(nbMembersByCountry).length !== 0 && (
            <div className="flex flex-wrap -m-4">
              {Object.entries<number>(nbMembersByCountry)
                .sort(([keyA], [keyB]) => {
                  return keyA.localeCompare(keyB);
                })
                .map(([country, count], index) => (
                  <div
                    key={index}
                    className={`p-4 md:w-1/${
                      Object.keys(nbMembersByCountry).length
                    } sm:w-1/2 w-full`}
                  >
                    <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                      {country === 'France' && <France />}
                      {country === 'Angleterre' && <UK />}
                      {country === 'Belgique' && <Belgium />}
                      {country === 'Hollande' && <Netherlands />}
                      <h2 className="title-font font-medium text-3xl text-gray-900">
                        {count} membres
                      </h2>
                      <p className="leading-relaxed">en {country}</p>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
