'use client';
import { useEffect, useState } from 'react';
import { returnMemberInfo } from '@/lib/supabase';
import Image from 'next/image';
import { FaCity } from 'react-icons/fa';
import { IoMdMailOpen } from 'react-icons/io';
import { MdPhoneAndroid } from 'react-icons/md';
import { GiCarWheel } from 'react-icons/gi';
import ClipLoader from 'react-spinners/ClipLoader';

export default function Infos({ session }: any) {
  const [member, setMember] = useState<Member | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const response = await returnMemberInfo(session?.user?.email);

      if (response !== false && response[0] !== undefined) {
        const memberData: Member = {
          address: response[0].address,
          birth_date: response[0].birth_date,
          created_at: response[0].created_at,
          first_name: response[0].first_name,
          email: response[0].email,
          id: response[0].id,
          last_name: response[0].last_name,
          phone: response[0].phone,
          town: response[0].town,
          zip_code: response[0].zip_code,
        };
        setMember(() => memberData);
      }
    };
    fetchData();
  }, []);

  //   useEffect(() => {
  //     console.log('member', member);
  //     if (member === undefined) {
  //       return (

  //       );
  //     } else {
  //       // Render something when member is defined
  //       return (
  //         <div>
  //           <p>Welcome, {member.first_name}!</p>
  //           {/* Add more JSX for rendering member data */}
  //         </div>
  //       );
  //     }
  //   }, [member]);

  return (
    <>
      {member === undefined ? (
        <div className="fixed inset-0 flex justify-center items-center">
          <div className="flex flex-col items-center justify-center  bg-white p-4 rounded-lg shadow-lg text-black">
            <p className="text-xl font-semibold mb-4">Veuillez patienter</p>
            <ClipLoader
              loading={true}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <p className="mt-8 text-black">Chargement des données ...</p>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center mt-16">
          <div className="flex flex-col items-center p-4 md:pr-32 bg-gray-100 dark:bg-gray-900 rounded-3xl md:flex-row">
            <div className="-mt-16 md:-my-16 md:-ml-32">
              <Image
                className="w-auto h-32 lg:h-48"
                src="https://raw.githubusercontent.com/koala819/Unlimitd_front/develop/QR_Code.png"
                alt="QR Code officiel Club306"
                width="1000"
                height="1000"
              />
            </div>
            <div className="flex flex-col space-y-4 mt-4 md:ml-8">
              <div className="flex flex-col items-center md:items-start">
                <h2 className="text-xl font-medium">
                  {member?.first_name} &nbsp; {member?.last_name}
                </h2>
              </div>
              <div className="flex">
                <div className="mr-4">
                  <GiCarWheel size={26} />
                </div>
                <p className="text-gray-400 text-lg font-extrabold">
                  {member?.id !== undefined && member?.id <= 100
                    ? '00' + member?.id
                    : member?.id}
                </p>
              </div>
              <div className="flex">
                <div className="mr-4">
                  <FaCity size={26} />
                </div>
                <div>
                  <p className="text-base font-medium text-gray-400">
                    {member?.address}
                  </p>
                  <p className="text-base font-medium text-gray-400">
                    {member?.zip_code} &nbsp; {member?.town}
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4">
                  <MdPhoneAndroid size={26} />
                </div>
                <p className="text-base font-medium text-gray-400">
                  {member?.phone}
                </p>
              </div>
              <div className="flex">
                <div className="mr-4">
                  <IoMdMailOpen size={26} />
                </div>
                <p className="text-base font-medium text-gray-400">
                  {member?.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

interface Member {
  address: string;
  birth_date: string;
  created_at: string;
  email: string;
  first_name: string;
  id: number;

  last_name: string;
  phone: string;
  town: string;
  zip_code: string;
}
