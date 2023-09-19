'use client';
import { useEffect } from 'react';
import InscriptionByMonth from './components/InscriptionByMonth';
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
          <Members />
          <Car />
          <InscriptionByMonth />
          <Age />
        </div>
      </section>
    </div>
  );
}
