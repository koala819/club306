'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { IoCarSport } from 'react-icons/io5';
import { MdAccountBox } from 'react-icons/md';
import { SiFreelancer } from 'react-icons/si';
import { returnMemberInfo, getMemberCars } from '@/lib/supabase';
import { Infos } from './Infos';
import { Garage } from './Garage';
import { Subscription } from './Subscription';

export default function Idg({ email }: { email: string }) {
  const [activeTab, setActiveTab] = useState('Mes Infos');
  const [member, setMember] = useState<Member | undefined>(undefined);
  const [cars, setCars] = useState<Car[] | undefined>(undefined);
  const [viewCar, setViewCar] = useState(0);

  const { resolvedTheme } = useTheme();

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  const displayCar = (car: number) => {
    setViewCar(() => car);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await returnMemberInfo(email);
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

      member?.id !== undefined &&
        getMemberCars(member?.id).then(async (cars: any) => {
          if (cars) {
            if (Array.isArray(cars)) {
              const carData: Car[] = [];
              for (let i = 0; i < cars.length; i++) {
                const carData_Object: Car = {
                  color: {
                    name: cars[i].color_name.name,
                    hexa: cars[i].hexa.hexa,
                  },
                  finition: cars[i].finition.name,
                  immatriculation: cars[i].immatriculation,
                  min: cars[i].min,
                  model: cars[i].model.name,
                };
                carData.push(carData_Object);
                setCars(() => carData);
              }
            }
          }
        });
    };
    fetchData();
  }, [member?.address]);

  return (
    <div className="bg-slate-800 h-full">
      <div className="flex flex-grow items-center" style={{ height: '74vh' }}>
        <div
          className="w-11/12 2xl:w-3/4 bg-white dark:bg-gray-800 mx-auto rounded-2xl mt-2 sm:mt-0 shadow-xl  shadow-slate-300/60"
          style={{
            height: window.innerWidth <= 768 ? '95%' : '75%',
            display: 'grid',
          }}
        >
          <div>
            <div className="flex flex-row">
              <div className="items-center justify-center w-full">
                <ul className="flex">
                  <li
                    className={`p-5 flex-1 flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white focus:ring-4 focus:outline-none hover:cursor-pointer ${
                      activeTab === 'Mes Infos'
                        ? resolvedTheme === 'dark'
                          ? 'bg-gray-800 hover:cursor-auto'
                          : 'bg-blue-800'
                        : resolvedTheme === 'dark'
                        ? 'bg-gray-500 hover:bg-gray-700'
                        : 'bg-gray-400 hover:bg-gray-700'
                    }`}
                    onClick={() => handleTabClick('Mes Infos')}
                  >
                    <MdAccountBox size={26} />
                    {window.innerWidth > 768 && <span>&nbsp;Mes Infos</span>}
                  </li>
                  <li
                    className={`p-5 flex-1 flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white focus:ring-4 focus:outline-none hover:cursor-pointer ${
                      activeTab === 'Mon Garage'
                        ? resolvedTheme === 'dark'
                          ? 'bg-gray-800 hover:cursor-auto'
                          : 'bg-blue-800'
                        : resolvedTheme === 'dark'
                        ? 'bg-gray-500 hover:bg-gray-700'
                        : 'bg-gray-400 hover:bg-gray-700'
                    }`}
                    onClick={() => handleTabClick('Mon Garage')}
                  >
                    <IoCarSport size={26} />
                    {window.innerWidth > 768 && <span>&nbsp;Mon Garage</span>}
                  </li>
                  <li
                    className={`p-5 flex-1 flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white focus:ring-4 focus:outline-none hover:cursor-pointer ${
                      activeTab === 'Mon Adhésion'
                        ? resolvedTheme === 'dark'
                          ? 'bg-gray-800 hover:cursor-auto'
                          : 'bg-blue-800'
                        : resolvedTheme === 'dark'
                        ? 'bg-gray-500 hover:bg-gray-700'
                        : 'bg-gray-400 hover:bg-gray-700'
                    }`}
                    onClick={() => handleTabClick('Mon Adhésion')}
                  >
                    <SiFreelancer size={26} />
                    {window.innerWidth > 768 && <span>&nbsp;Mon Adhésion</span>}
                  </li>
                </ul>
              </div>
            </div>

            <section>
              {activeTab === 'Mes Infos' && (
                <Infos
                  firstName={member?.first_name}
                  lastName={member?.last_name}
                  address={member?.address}
                  zipCode={member?.zip_code}
                  town={member?.town}
                  email={member?.email}
                  phone={member?.phone}
                  id={member?.id}
                />
              )}
              {activeTab === 'Mon Garage' && (
                <Garage
                  carColor={cars?.[viewCar].color.hexa}
                  immatriculation={cars?.[viewCar].immatriculation}
                  modelName={cars?.[viewCar].model}
                  finition={cars?.[viewCar].finition}
                  colorName={cars?.[viewCar].color.name}
                  min={cars?.[viewCar].min}
                  carsNumber={cars?.length}
                  displayCar={displayCar}
                />
              )}
              {activeTab === 'Mon Adhésion' && (
                <>
                  <Subscription beginDate={member?.created_at} />
                </>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
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

type Car = {
  color: {
    name: string | null;
    hexa: string | null;
  };
  finition: string;
  immatriculation: string;
  min: string;
  model: string;
};
