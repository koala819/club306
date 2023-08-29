'use client';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { DisplaySVG } from '@/app/idg/DisplaySvg';
import Tab from './Tab';
import RootLayout from '@/app/layout';
import CustomLayout from '../layout';
import { returnMemberInfo, getMemberCars } from '@/lib/supabase';

export default function Garage() {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState('mesInfos');
  const [member, setMember] = useState<Member | undefined>(undefined);
  const [cars, setCars] = useState<Car[] | undefined>(undefined);
  const [currentCarIndex, setCurrentCarIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await returnMemberInfo(session?.user?.email);
      if (response !== false && response[0] !== undefined) {
        const memberData: Member = {
          id: response[0].id,
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
  }, [member?.id]);

  const handleNextCar = () => {
    if (cars !== undefined && currentCarIndex < cars.length - 1) {
      setCurrentCarIndex(currentCarIndex + 1);
    }
  };

  const handlePrevCar = () => {
    if (currentCarIndex > 0) {
      setCurrentCarIndex(currentCarIndex - 1);
    }
  };

  return (
    <RootLayout hideNavbar hideFooter>
      <CustomLayout>
        <div className="flex flex-col items-center justify-center mt-4">
          <h1 className="text-3xl font-semibold text-center mb-16">
            {cars?.length === 1
              ? "Votre Garage est composé d'une voiture"
              : `Votre Garage est composé de ${cars?.length} voitures`}
          </h1>
          <h1 className="text-3xl font-semibold text-center mb-4">
            Voiture n° {currentCarIndex + 1}
          </h1>

          <div className="w-1/3 bg-gray-200 mb-8 p-4">
            {cars !== undefined && (
              <DisplaySVG
                name={cars[currentCarIndex].model}
                color={cars[currentCarIndex].color.hexa}
              />
            )}
          </div>

          <div className="w-full bg-gray-200 p-2 mb-4">
            <div className="flex space-x-4">
              <Tab
                label="Mes Infos"
                isActive={activeTab === 'mesInfos'}
                onClick={() => setActiveTab('mesInfos')}
              />
              <Tab
                label="Mon Panier"
                isActive={activeTab === 'monPanier'}
                onClick={() => setActiveTab('monPanier')}
              />
            </div>
          </div>

          <div className="w-full p-4 bg-white border border-gray-300 rounded-lg">
            {activeTab === 'mesInfos' && (
              <div>
                <h2 className="text-xl font-semibold">Mes Infos</h2>
                {cars !== undefined && (
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="font-semibold">Immatriculation:</td>
                        <td>{cars[currentCarIndex].immatriculation}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Modèle:</td>
                        <td>{cars[currentCarIndex].model}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Finition:</td>
                        <td>{cars[currentCarIndex].finition}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Couleur:</td>
                        <td>{cars[currentCarIndex].color.name}</td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>
            )}
            {activeTab === 'monPanier' && (
              <div>
                <table className="w-full">
                  <tbody>{/* Contenu de l'onglet "Mon Panier" */}</tbody>
                </table>
              </div>
            )}
          </div>
          <div className="mt-4">
            {currentCarIndex > 0 && (
              <button
                onClick={handlePrevCar}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
              >
                Précédent
              </button>
            )}
            {cars !== undefined && currentCarIndex < cars?.length - 1 && (
              <button
                onClick={handleNextCar}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Suivant
              </button>
            )}
          </div>
        </div>
      </CustomLayout>
    </RootLayout>
  );
}

interface Member {
  id: number;
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
