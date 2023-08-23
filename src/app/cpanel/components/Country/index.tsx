'use client';
import { useEffect, useState } from 'react';
import { countMembersByCountry } from '@/lib/supabase';
import France from './France';
import UK from './UK';
import Belgium from './Belgium';
import Netherlands from './Netherlands';

export default function Country() {
  const [nbMembersByCountry, setNbMembersByCountry] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
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
  );
}
