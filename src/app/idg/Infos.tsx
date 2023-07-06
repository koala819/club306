'use client';
import Image from 'next/image';
import { FaCity } from 'react-icons/fa';
import { IoMdMailOpen } from 'react-icons/io';
import { MdPhoneAndroid } from 'react-icons/md';
import { GiCarWheel } from 'react-icons/gi';

export const Infos = ({
  firstName,
  lastName,
  email,
  phone,
  address,
  zipCode,
  town,
  id,
}: {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  address: string | undefined;
  zipCode: string | undefined;
  town: string | undefined;
  id: number | undefined;
}) => {
  return (
    <div
      className="flex justify-center items-center h-full"
      style={{
        height: window.innerWidth <= 768 ? '64vh' : '50vh',
      }}
    >
      <div className="flex flex-col items-center w-full max-w-xs p-4 bg-gray-100 dark:bg-gray-900 rounded-3xl md:flex-row">
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
              {firstName} &nbsp; {lastName}
            </h2>
          </div>
          <div className="flex">
            <GiCarWheel size={26} />
            <p className="text-base font-medium text-gray-400 flex justify-center w-full">
              {id !== undefined && id <= 100 ? '00' + id : id}
            </p>
          </div>
          <div>
            <FaCity size={26} />
            <p className="text-base font-medium text-gray-400">{address}</p>
            <p className="text-base font-medium text-gray-400">
              {zipCode} &nbsp; {town}
            </p>
          </div>
          <div className="flex">
            <MdPhoneAndroid size={26} />
            <p className="text-base font-medium text-gray-400">&nbsp;{phone}</p>
          </div>
          <div className="flex">
            <IoMdMailOpen size={26} />
            <p className="text-base font-medium text-gray-400">&nbsp;{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
