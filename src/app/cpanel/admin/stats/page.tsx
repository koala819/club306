'use client';
import { useEffect } from 'react';
import Car from '@/components/cpanel/stats/Car';
import Age from '@/components/cpanel/stats/Age';
import InscriptionByMonth from '@/components/cpanel/stats/InscriptionByMonth';
import Members from '@/components/cpanel/stats/Members';

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
          <Members />
          <Car />
          <InscriptionByMonth />
          <Age />
        </div>
      </section>
    </div>
  );
}
