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
import Country from './components/Country';

export default function Home() {
  const [nbMembersByAge, setNbMembersByAge] = useState<MemberStats>({
    emailsAge0to18: [],
    age_18_30: 0,
    age_30_40: 0,
    age_40_50: 0,
    age_more_50: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await countMembersByAge();
        if (result) {
          setNbMembersByAge(result);
        }
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
          <Country />
        </div>
      </section>

      {nbMembersByAge !== null && (
        <div>
          <p>
            Nombre de membres ayant moins de 18 ans :{' '}
            {nbMembersByAge.emailsAge0to18.length}
            <ul>
              {nbMembersByAge.emailsAge0to18.map((mail, index) => (
                <li key={index}>email : {mail}</li>
              ))}
            </ul>
          </p>
          <p>
            Nombre de membres entre 18 et 30 ans : {nbMembersByAge.age_18_30}
          </p>
          <p>
            Nombre de membres entre 30 et 40 ans : {nbMembersByAge.age_30_40}
          </p>
          <p>
            Nombre de membres entre 40 et 50 ans : {nbMembersByAge.age_40_50}
          </p>
          <p>
            Nombre de membres de plus de 50 ans : {nbMembersByAge.age_more_50}
          </p>
        </div>
      )}
    </div>
  );
}
interface MemberStats {
  emailsAge0to18: string[];
  age_18_30: number;
  age_30_40: number;
  age_40_50: number;
  age_more_50: number;
}
