'use client';
import { useEffect, useState } from 'react';
import { countMembersByAge } from '@/lib/supabase';

export default function Age() {
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
    <div>
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
    // <div className="flex flex-wrap text-center bg-slate-400 items-center">
    //   <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
    //     <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
    //       <svg
    //         fill="none"
    //         stroke="currentColor"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth="2"
    //         className="text-[#174191] w-12 h-12 mb-3 inline-block"
    //         viewBox="0 0 24 24"
    //       >
    //         <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
    //         <circle cx="9" cy="7" r="4"></circle>
    //         <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
    //       </svg>
    //       <h2 className="title-font font-medium text-3xl text-gray-900">
    //         {nbMembers}
    //       </h2>
    //       <p className="leading-relaxed">Membres</p>
    //     </div>
    //   </div>
    //   <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
    //     <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
    //       <DisplaySVG name="3 Portes" color="174191" />
    //       <h2 className="title-font font-medium text-3xl text-gray-900">
    //         {nbCars}
    //       </h2>
    //       <p className="leading-relaxed">Véhicules</p>
    //     </div>
    //   </div>
    //   <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
    //     <div className="grid grid-cols-2 gap-4">
    //       {/* Première ligne */}
    //       <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
    //         <DisplaySVG name="3 Portes" color="174191" />
    //         <h2 className="title-font font-medium text-3xl text-gray-900">
    //           {nbCarsByType[1]}
    //         </h2>
    //         <p className="leading-relaxed">3 Portes</p>
    //       </div>
    //       <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
    //         <DisplaySVG name="5 Portes" color="174191" />
    //         <h2 className="title-font font-medium text-3xl text-gray-900">
    //           {nbCarsByType[2]}
    //         </h2>
    //         <p className="leading-relaxed">5 Portes</p>
    //       </div>

    //       {/* Deuxième ligne */}
    //       <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
    //         <DisplaySVG name="Cabriolet" color="174191" />
    //         <h2 className="title-font font-medium text-3xl text-gray-900">
    //           {nbCarsByType[4]}
    //         </h2>
    //         <p className="leading-relaxed">Cabriolets</p>
    //       </div>
    //       <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
    //         <DisplaySVG name="Sedan" color="174191" />
    //         <h2 className="title-font font-medium text-3xl text-gray-900">
    //           {nbCarsByType[5]}
    //         </h2>
    //         <p className="leading-relaxed">Sedans</p>
    //       </div>

    //       {/* Trosième ligne */}
    //       <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
    //         <DisplaySVG name="Break" color="174191" />
    //         <h2 className="title-font font-medium text-3xl text-gray-900">
    //           {nbCarsByType[3]}
    //         </h2>
    //         <p className="leading-relaxed">Breaks</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

interface MemberStats {
  emailsAge0to18: string[];
  age_18_30: number;
  age_30_40: number;
  age_40_50: number;
  age_more_50: number;
}
