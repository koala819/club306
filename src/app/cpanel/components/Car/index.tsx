'use client';
import { useEffect, useState } from 'react';
import { DisplaySVG } from '../../../idg/DisplaySvg';
import { countCars, countCarsByModel, countMembers } from '@/lib/supabase';

export default function Car() {
  const [nbMembers, setNbMembers] = useState(null);
  const [nbCars, setNbCars] = useState(null);
  const [nbCarsByType, setNbCarsByType] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setNbMembers(await countMembers());
        setNbCars(await countCars());
        setNbCarsByType(await countCarsByModel());
      } catch (error) {
        console.log('error fetch data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap text-center bg-slate-400 items-center">
      <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
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
      <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <DisplaySVG name="3 Portes" color="174191" />
          <h2 className="title-font font-medium text-3xl text-gray-900">
            {nbCars}
          </h2>
          <p className="leading-relaxed">Véhicules</p>
        </div>
      </div>
      <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
        <div className="grid grid-cols-2 gap-4">
          {/* Première ligne */}
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <DisplaySVG name="3 Portes" color="174191" />
            <h2 className="title-font font-medium text-3xl text-gray-900">
              {nbCarsByType[1]}
            </h2>
            <p className="leading-relaxed">3 Portes</p>
          </div>
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <DisplaySVG name="5 Portes" color="174191" />
            <h2 className="title-font font-medium text-3xl text-gray-900">
              {nbCarsByType[2]}
            </h2>
            <p className="leading-relaxed">5 Portes</p>
          </div>

          {/* Deuxième ligne */}
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <DisplaySVG name="Cabriolet" color="174191" />
            <h2 className="title-font font-medium text-3xl text-gray-900">
              {nbCarsByType[4]}
            </h2>
            <p className="leading-relaxed">Cabriolets</p>
          </div>
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <DisplaySVG name="Sedan" color="174191" />
            <h2 className="title-font font-medium text-3xl text-gray-900">
              {nbCarsByType[5]}
            </h2>
            <p className="leading-relaxed">Sedans</p>
          </div>

          {/* Trosième ligne */}
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <DisplaySVG name="Break" color="174191" />
            <h2 className="title-font font-medium text-3xl text-gray-900">
              {nbCarsByType[3]}
            </h2>
            <p className="leading-relaxed">Breaks</p>
          </div>
        </div>
      </div>
    </div>
  );
}
