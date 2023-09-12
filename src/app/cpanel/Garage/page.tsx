'use client';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { DisplaySVG } from '@/app/idg/DisplaySvg';
import Tab from './components/Tab';
import DeleteCar from './components/DeleteCar';
import RootLayout from '@/app/layout';
import CustomLayout from '../layout';
import { returnMemberInfo, getMemberCars } from '@/lib/supabase';
import UpdateCar from './components/UpdateCar';
import { HiPencil } from 'react-icons/hi';

export default function Garage() {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState('mesInfos');
  const [member, setMember] = useState<Member | undefined>(undefined);
  const [cars, setCars] = useState<Car[] | undefined>(undefined);
  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  const [displayUpdateCar, setDisplayUpdateCar] = useState(false);
  const [modifyValue, setModifyValue] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editing, setEditing] = useState(false);

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

  const handleMobileBoxClick = (value: string | undefined | null) => {
    if (window.innerWidth <= 810) {
      setDisplayUpdateCar(true);
      value !== undefined && value !== null && setModifyValue(() => value);
    }
  };

  const handleEditClick = (value: string | undefined | null) => {
    setDisplayUpdateCar(true);
    value !== undefined && value !== null && setModifyValue(() => value);
  };

  function isColorDark(hexColor: string): boolean {
    const red = parseInt(hexColor.slice(0, 2), 16);
    const green = parseInt(hexColor.slice(2, 4), 16);
    const blue = parseInt(hexColor.slice(4, 6), 16);

    // Calculer la luminance selon la formule relative à la perception humaine
    const luminance = 0.299 * red + 0.587 * green + 0.114 * blue;

    // Si la luminance est inférieure à 128, la couleur est considérée comme foncée
    return luminance < 128;
  }

  const carColor = cars !== undefined ? cars[currentCarIndex].color.hexa : null;
  const isDark = carColor !== null && isColorDark(carColor);

  return (
    <RootLayout hideNavbar hideFooter>
      <CustomLayout>
        <div className="flex flex-col items-center justify-center mt-4">
          <h1 className="text-3xl font-semibold text-center mb-16">
            {cars?.length === 1
              ? "Votre Garage est composé d'une voiture"
              : `Votre Garage est composé de ${cars?.length} voitures`}
          </h1>
          <div className="flex my-4 justify-center">
            {currentCarIndex > 0 && (
              <button
                onClick={handlePrevCar}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
              >
                Précédent
              </button>
            )}
            <h1 className="text-3xl font-semibold text-center mb-4 mr-2">
              Voiture n° {currentCarIndex + 1}
            </h1>
            {cars !== undefined && currentCarIndex < cars?.length - 1 && (
              <button
                onClick={handleNextCar}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Suivant
              </button>
            )}
          </div>

          <div
            className={`w-1/3 bg-gray-200 mb-8 p-4 rounded-lg ${
              isDark ? 'bg-gray-200' : 'bg-gray-500'
            }`}
          >
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
                {displayUpdateCar && (
                  <UpdateCar
                    setDisplayBox={setDisplayUpdateCar}
                    modifyValue={modifyValue}
                    editingIndex={editingIndex}
                    immatriculation={
                      (cars !== undefined &&
                        cars[currentCarIndex].immatriculation) ||
                      ''
                    }
                  />
                )}
                {cars !== undefined && (
                  <table className="w-full flex justify-center">
                    <tbody>
                      <tr
                        className=""
                        onClick={() =>
                          handleMobileBoxClick(cars[currentCarIndex].min)
                        }
                      >
                        <td className="w-1/5">Mine:</td>
                        <td
                          className="relative shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500"
                          onMouseEnter={() => {
                            setEditing(true);
                            setEditingIndex(0);
                          }}
                          onMouseLeave={() => setEditing(false)}
                        >
                          <span className="text-green-500 uppercase">
                            {cars !== undefined && cars[currentCarIndex].min}
                          </span>
                          {editing && editingIndex === 0 && (
                            <button
                              className="absolute -right-10 top-0 mr-2 bg-blue-500 text-white py-1 px-2 rounded cursor-pointer hover:bg-red-600"
                              onClick={() =>
                                handleEditClick(cars[currentCarIndex].min)
                              }
                            >
                              <HiPencil />
                            </button>
                          )}
                        </td>
                      </tr>
                      <tr
                        className=""
                        onClick={() =>
                          handleMobileBoxClick(
                            cars[currentCarIndex].immatriculation
                          )
                        }
                      >
                        <td className="w-1/5">Immatriculation:</td>
                        <td
                          className="relative shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500"
                          onMouseEnter={() => {
                            setEditing(true);
                            setEditingIndex(1);
                          }}
                          onMouseLeave={() => setEditing(false)}
                        >
                          <span className="text-green-500 uppercase">
                            {cars !== undefined &&
                              cars[currentCarIndex].immatriculation}
                          </span>
                          {editing && editingIndex === 1 && (
                            <button
                              className="absolute -right-10 top-0 mr-2 bg-blue-500 text-white py-1 px-2 rounded cursor-pointer hover:bg-red-600"
                              onClick={() =>
                                handleEditClick(
                                  cars[currentCarIndex].immatriculation
                                )
                              }
                            >
                              <HiPencil />
                            </button>
                          )}
                        </td>
                      </tr>
                      <tr
                        className=""
                        onClick={() =>
                          handleMobileBoxClick(cars[currentCarIndex].model)
                        }
                      >
                        <td className="w-1/5">Modele:</td>
                        <td
                          className="relative shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500"
                          onMouseEnter={() => {
                            setEditing(true);
                            setEditingIndex(2);
                          }}
                          onMouseLeave={() => setEditing(false)}
                        >
                          <span className="text-green-500 uppercase">
                            {cars !== undefined && cars[currentCarIndex].model}
                          </span>
                          {editing && editingIndex === 2 && (
                            <button
                              className="absolute -right-10 top-0 mr-2 bg-blue-500 text-white py-1 px-2 rounded cursor-pointer hover:bg-red-600"
                              onClick={() =>
                                handleEditClick(cars[currentCarIndex].model)
                              }
                            >
                              <HiPencil />
                            </button>
                          )}
                        </td>
                      </tr>
                      <tr
                        className=""
                        onClick={() =>
                          handleMobileBoxClick(cars[currentCarIndex].finition)
                        }
                      >
                        <td className="w-1/5">Finition:</td>
                        <td
                          className="relative shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500"
                          onMouseEnter={() => {
                            setEditing(true);
                            setEditingIndex(3);
                          }}
                          onMouseLeave={() => setEditing(false)}
                        >
                          <span className="text-green-500 uppercase">
                            {cars !== undefined &&
                              cars[currentCarIndex].finition}
                          </span>
                          {editing && editingIndex === 3 && (
                            <button
                              className="absolute -right-10 top-0 mr-2 bg-blue-500 text-white py-1 px-2 rounded cursor-pointer hover:bg-red-600"
                              onClick={() =>
                                handleEditClick(cars[currentCarIndex].finition)
                              }
                            >
                              <HiPencil />
                            </button>
                          )}
                        </td>
                      </tr>
                      <tr
                        className=""
                        onClick={() =>
                          handleMobileBoxClick(cars[currentCarIndex].color.name)
                        }
                      >
                        <td className="w-1/5">Couleur:</td>
                        <td
                          className="relative shadow-lg rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500"
                          onMouseEnter={() => {
                            setEditing(true);
                            setEditingIndex(4);
                          }}
                          onMouseLeave={() => setEditing(false)}
                        >
                          <span className="text-green-500 uppercase">
                            {cars !== undefined &&
                              cars[currentCarIndex].color.name}
                          </span>
                          {editing && editingIndex === 4 && (
                            <button
                              className="absolute -right-10 top-0 mr-2 bg-blue-500 text-white py-1 px-2 rounded cursor-pointer hover:bg-red-600"
                              onClick={() =>
                                handleEditClick(
                                  cars[currentCarIndex].color.name
                                )
                              }
                            >
                              <HiPencil />
                            </button>
                          )}
                        </td>
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
            {cars !== undefined &&
              cars.length >= 2 &&
              member?.id !== undefined && (
                <DeleteCar memberId={member?.id} car={cars[currentCarIndex]} />
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
