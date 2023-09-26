'use client';
import { useEffect, useState } from 'react';
import { DisplaySVG } from '@/components/DisplaySvg';
import { countCars, countCarsByModel } from '@/lib/supabase';

export default function Car() {
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
        setNbCars(await countCars());
        setNbCarsByType(await countCarsByModel());
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
          <DisplaySVG name="3 Portes" color="174191" />
          <h2 className="title-font font-medium text-3xl text-gray-900">
            {nbCars}
          </h2>
          <p className="leading-relaxed">Véhicules</p>
        </div>
      </div>
      <div className="p-4 md:w-1/2 w-full">
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
