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
      className="flex justify-center items-center "
      style={{
        height: window.innerWidth <= 768 ? '64vh' : '50vh',
      }}
    >
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
              {firstName} &nbsp; {lastName}
            </h2>
          </div>
          <div className="flex">
            <div className="mr-4">
              <GiCarWheel size={26} />
            </div>
            <p className="text-gray-400 text-lg font-extrabold">
              {id !== undefined && id <= 100 ? '00' + id : id}
            </p>
          </div>
          <div className="flex">
            <div className="mr-4">
              <FaCity size={26} />
            </div>
            <div>
              <p className="text-base font-medium text-gray-400">{address}</p>
              <p className="text-base font-medium text-gray-400">
                {zipCode} &nbsp; {town}
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <MdPhoneAndroid size={26} />
            </div>
            <p className="text-base font-medium text-gray-400">{phone}</p>
          </div>
          <div className="flex">
            <div className="mr-4">
              <IoMdMailOpen size={26} />
            </div>
            <p className="text-base font-medium text-gray-400">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
