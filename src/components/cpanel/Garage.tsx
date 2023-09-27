'use client';
import { useContext, useEffect, useState } from 'react';
import { MemberContext } from '@/context/cpanel/MemberContext';
import { DisplaySVG } from '@/components/cpanel/DisplaySvg';
import { Loading } from '@/components/cpanel/Loading';
import DeleteCar from './garage/DeleteCar';
import UpdateCar from './garage/UpdateCar';
import { returnMemberInfo, getMemberCars } from '@/lib/supabase';
import { HiPencil } from 'react-icons/hi';
import { BiSkipPreviousCircle, BiSkipNextCircle } from 'react-icons/bi';

export default function Garage({
  session,
  hide = false,
}: {
  session: any;
  hide?: boolean;
}) {
  const { member, updateMember } = useContext(MemberContext);
  // const [member, setMember] = useState<Member | undefined>(undefined);
  const [cars, setCars] = useState<Car[] | undefined>(undefined);
  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  const [displayUpdateCar, setDisplayUpdateCar] = useState(false);
  const [modifyValue, setModifyValue] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editing, setEditing] = useState(false);
  // const memberContext = useContext(MemberContext);
  // const member = memberContext ? memberContext.member : undefined;

  useEffect(() => {
    const fetchData = async () => {
      const response = await returnMemberInfo(session?.user?.email);
      if (response !== false && response[0] !== undefined) {
        const memberData: Member = {
          id: response[0].id,
        };
        // setMember(() => memberData);
        updateMember(() => memberData);
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

  // const handleMobileBoxClick = (value: string | undefined | null) => {
  //   if (window.innerWidth <= 810) {
  //     setDisplayUpdateCar(true);
  //     value !== undefined && value !== null && setModifyValue(() => value);
  //   }
  // };

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
    <>
      {cars === undefined ? (
        <Loading />
      ) : (
        <div className={`${hide ? '' : 'w-full lg:w-8/12 px-4 mx-auto mt-6 '}`}>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6rounded-lg bg-gray-50 dark:bg-slate-500 border-0 ">
            <div
              className={`${
                !hide ? 'flex flex-col items-center justify-center mt-4' : ''
              }`}
            >
              {!hide && (
                <h1 className="text-3xl font-semibold text-center mb-16">
                  {cars?.length === 1
                    ? "Votre Garage est composé d'une voiture"
                    : `Votre Garage est composé de ${cars?.length} voitures`}
                </h1>
              )}

              <section className="flex w-full items-center justify-center">
                <div className="w-1/3 flex justify-center">
                  {!hide ? (
                    <button
                      onClick={() => {
                        currentCarIndex > 0 && handlePrevCar();
                      }}
                      className={`${
                        !(currentCarIndex > 0)
                          ? 'bg-gray-50 text-gray-50 dark:bg-slate-500 dark:text-slate-500 hover:cursor-default'
                          : 'bg-blue-500 text-white px-4 py-2 rounded-md mr-2 dark:bg-blue-900'
                      }`}
                    >
                      Précédent
                    </button>
                  ) : (
                    <div
                      className="w-1/3 flex justify-center hover:cursor-pointer "
                      onClick={handlePrevCar}
                    >
                      <BiSkipPreviousCircle size={32} />
                    </div>
                  )}
                </div>

                <div
                  className={`${
                    !hide ? 'w-1/3 mb-8 p-4' : 'w-full'
                  }  rounded-lg ${
                    isDark
                      ? 'bg-gray-50 dark:bg-slate-500'
                      : 'bg-gray-50 dark:bg-slate-500'
                  }`}
                >
                  {cars !== undefined && (
                    <DisplaySVG
                      name={cars[currentCarIndex].model}
                      color={cars[currentCarIndex].color.hexa}
                    />
                  )}
                </div>

                <div className="w-1/3  flex justify-center">
                  {!hide ? (
                    <button
                      onClick={() => {
                        currentCarIndex < cars?.length - 1 && handleNextCar();
                      }}
                      className={`${
                        !(currentCarIndex < cars?.length - 1)
                          ? 'bg-gray-50 text-gray-50 dark:bg-slate-500 dark:text-slate-500 hover:cursor-default'
                          : 'bg-blue-500 text-white px-4 py-2 rounded-md mr-2 dark:bg-blue-900'
                      }`}
                    >
                      Suivant
                    </button>
                  ) : (
                    <div
                      className="w-1/3 flex justify-center hover:cursor-pointer"
                      onClick={handleNextCar}
                    >
                      <BiSkipNextCircle size={32} />
                    </div>
                  )}
                </div>
              </section>

              {!hide && (
                <>
                  <div className="w-full flex my-4 justify-center  p-2 mb-4">
                    <h1 className="text-3xl font-semibold text-center mb-4 mr-2">
                      Voiture n° {currentCarIndex + 1}
                    </h1>
                  </div>

                  <div className="w-full p-4 ">
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
                      <>
                        <div className="md:grid md:grid-cols-2 md:space-y-0 space-y-1 p-4 border-b">
                          <p className="text-black font-bold dark:font-normal">
                            Code Mine :
                          </p>
                          <section
                            className="relative rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500"
                            onMouseEnter={() => {
                              setEditing(true);
                              setEditingIndex(0);
                            }}
                            onMouseLeave={() => setEditing(false)}
                          >
                            <span className="text-primary dark:text-gray-900 uppercase font-bold">
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
                          </section>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:space-y-0 space-y-1 p-4 border-b">
                          <p className="text-black font-bold dark:font-normal">
                            Immatriculation :
                          </p>
                          <section
                            className="relative rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500"
                            onMouseEnter={() => {
                              setEditing(true);
                              setEditingIndex(1);
                            }}
                            onMouseLeave={() => setEditing(false)}
                          >
                            <span className="text-primary dark:text-gray-900 uppercase font-bold">
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
                          </section>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:space-y-0 space-y-1 p-4 border-b">
                          <p className="text-black font-bold dark:font-normal">
                            Modèle :
                          </p>
                          <section
                            className="relative rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500"
                            onMouseEnter={() => {
                              setEditing(true);
                              setEditingIndex(2);
                            }}
                            onMouseLeave={() => setEditing(false)}
                          >
                            <span className="text-primary dark:text-gray-900 uppercase font-bold">
                              {cars !== undefined &&
                                cars[currentCarIndex].model}
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
                          </section>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:space-y-0 space-y-1 p-4 border-b">
                          <p className="text-black font-bold dark:font-normal">
                            Finition :
                          </p>
                          <section
                            className="relative rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500"
                            onMouseEnter={() => {
                              setEditing(true);
                              setEditingIndex(3);
                            }}
                            onMouseLeave={() => setEditing(false)}
                          >
                            <span className="text-primary dark:text-gray-900 uppercase font-bold">
                              {cars !== undefined &&
                                cars[currentCarIndex].finition}
                            </span>
                            {editing && editingIndex === 3 && (
                              <button
                                className="absolute -right-10 top-0 mr-2 bg-blue-500 text-white py-1 px-2 rounded cursor-pointer hover:bg-red-600"
                                onClick={() =>
                                  handleEditClick(
                                    cars[currentCarIndex].finition
                                  )
                                }
                              >
                                <HiPencil />
                              </button>
                            )}
                          </section>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:space-y-0 space-y-1 p-4 border-b">
                          <p className="text-black font-bold dark:font-normal">
                            Couleur :
                          </p>
                          <section
                            className="relative rounded cursor-pointer transition-colors border-b-2 border-transparent hover:border-pink-500"
                            onMouseEnter={() => {
                              setEditing(true);
                              setEditingIndex(4);
                            }}
                            onMouseLeave={() => setEditing(false)}
                          >
                            <span className="text-primary dark:text-gray-900 uppercase font-bold">
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
                          </section>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="mt-4 mb-4">
                    {cars !== undefined &&
                      cars.length >= 2 &&
                      member?.id !== undefined && (
                        <DeleteCar
                          memberId={member?.id}
                          car={cars[currentCarIndex]}
                        />
                      )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

interface Member {
  id: number;
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

interface MemberContextType {
  member: any | undefined; // Remplacez 'any' par le type approprié de member
  updateMember: (newMember: any) => void; // Remplacez 'any' par le type approprié de member
}
