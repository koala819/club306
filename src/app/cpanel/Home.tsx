'use client';
import { useEffect, useState } from 'react';
import {
  countCars,
  countCarsByModel,
  countMembers,
  countMembersByAge,
  countMembersByCountry,
  countMembersByMonth,
} from '@/lib/supabase';
import BarChart from './components/Barchart';
import Car from './components/Car';
import Members from './components/Members';
import Age from './components/Age';

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
      } catch (error) {
        console.log('error fetch data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex-grow bg-gray-100 p-4 ">
      <section className="text-gray-600 body-font">
        <div
        // className="container px-5 py-24 "
        >
          <div className="flex flex-col text-center w-full mb-20 bg-green-500">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Statistiques du Club 306
            </h1>
          </div>
          {/* Display number of members and cars*/}
          <Car />
          {/* Display Members inscription by month */}
          <BarChart />
          {/* Display Members by country */}
          <Members />
          {/* Display Members by age */}
          <Age />
        </div>
      </section>
    </div>
  );
}
