import Layout from '../components/Layout';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IoCarSport } from 'react-icons/io5';
import { MdAccountBox } from 'react-icons/md';
import { SiFreelancer } from 'react-icons/si';
import { returnMemberInfo, getMemberCars, getCarColor } from '../lib/supabase';

import Infos from '../components/idg/Infos';
import Garage from '../components/idg/Garage';
import Subscription from '../components/idg/Subscription';

export default function Idg() {
  const { data: session } = useSession();
  const router = useRouter();
  const [member, setMember] = useState<Member | undefined>(undefined);

  const [activeTab, setActiveTab] = useState('Mes Infos');
  const [cars, setCars] = useState<Car[] | undefined>(undefined);
  const [viewCar, setViewCar] = useState(0);

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  const displayCar = (car: number) => {
    setViewCar(() => car);
  };

  useEffect(() => {
    if (!session) {
      router.push('/');
    }
  }, [router, session]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await returnMemberInfo(session?.user?.email);
      if (response !== false && response[0] !== undefined) {
        const memberData: Member = {
          address: response[0].address,
          birth_date: response[0].birth_date,
          car_color: response[0].car_color,
          car_model: response[0].car_model,
          created_at: response[0].created_at,
          first_name: response[0].first_name,
          email: response[0].email,
          id: response[0].id,
          immatriculation: response[0].immatriculation,
          last_name: response[0].last_name,
          phone: response[0].phone,
          town: response[0].town,
          zip_code: response[0].zip_code,
        };
        setMember(() => memberData);
      }

      getMemberCars(member?.id).then(async (data) => {
        if (data !== null) {
          if (data) {
            if (Array.isArray(data)) {
              const carData: Car[] = [];
              for (let i = 0; i < data.length; i++) {
                const carData_Object: Car = {
                  color: await getCarColor(data[i].color_id).then((data) => {
                    if (data) {
                      return { name: data.nom, hexa: data.hexa };
                    } else {
                      return { name: null, hexa: null };
                    }
                  }),
                  finition: data[i].finition,
                  immatriculation: data[i].immatriculation,
                  min: data[i].min,
                  model: data[i].modele,
                };
                carData.push(carData_Object);
                setCars(() => carData);
              }
            }
          }
          // console.log('min:', membersCars.min);
          // console.log('modele:', membersCars.modele);

          // console.log('carData_Array', data[0].members_cars?.[0]);
          // const carData: Car = {
          //   color: data[0]?.members_cars?.[0]?.color_id,
          //   finition: data[0].members_cars?.[0].finition,
          //   immatriculation: data[0].members_cars?.[0].immatriculation,
          //   min: data[0].members_cars?.[0].min,
          //   model: data[0].members_cars?.[0].model,
          // };
          // setCar(() => carData);
          // console.log('car', car);
        }
      });
    };
    fetchData();
  }, [member?.address]);

  return (
    <>
      {session && (
        <Layout title="Mon Compte">
          <div className="bg-slate-800 h-full">
            <div
              className="flex flex-grow items-center"
              style={{ height: '74vh' }}
            >
              <div
                className="w-11/12 2xl:w-3/4 bg-white mx-auto rounded-2xl mt-2 sm:mt-0 shadow-xl  shadow-slate-300/60"
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
                          className={`p-5 flex-1 flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white focus:ring-4 focus:outline-none ${
                            activeTab === 'Mes Infos'
                              ? 'bg-blue-800'
                              : 'bg-gray-400 hover:bg-gray-700'
                          }`}
                          onClick={() => handleTabClick('Mes Infos')}
                        >
                          <MdAccountBox size={26} />
                          {window.innerWidth > 768 && (
                            <span>&nbsp;Mes Infos</span>
                          )}
                        </li>
                        <li
                          className={`p-5 flex-1 flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white focus:ring-4 focus:outline-none ${
                            activeTab === 'Mon Garage'
                              ? 'bg-blue-800'
                              : 'bg-gray-400 hover:bg-gray-700'
                          }`}
                          onClick={() => handleTabClick('Mon Garage')}
                        >
                          <IoCarSport size={26} />
                          {window.innerWidth > 768 && (
                            <span>&nbsp;Mon Garage</span>
                          )}
                        </li>
                        <li
                          className={`p-5 flex-1 flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white focus:ring-4 focus:outline-none ${
                            activeTab === 'Mon Adhésion'
                              ? 'bg-blue-800'
                              : 'bg-gray-400 hover:bg-gray-700'
                          }`}
                          onClick={() => handleTabClick('Mon Adhésion')}
                        >
                          <SiFreelancer size={26} />
                          {window.innerWidth > 768 && (
                            <span>&nbsp;Mon Adhésion</span>
                          )}
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
                      />
                    )}
                    {activeTab === 'Mon Garage' && (
                      <Garage
                        carColor={cars?.[viewCar].color.hexa}
                        immatriculation={cars?.[viewCar].immatriculation}
                        model={cars?.[viewCar].model}
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
        </Layout>
      )}
    </>
  );

  interface Member {
    address: string;
    birth_date: string;
    car_color: string;
    car_model: string;
    created_at: string;
    email: string;
    first_name: string;
    id: number;
    immatriculation: string;
    last_name: string;
    phone: string;
    town: string;
    zip_code: string;
  }

  interface Car {
    color: {
      name: string | null;
      hexa: string | null;
    };
    finition: string;
    immatriculation: string;
    min: string;
    model: string;
  }
}
