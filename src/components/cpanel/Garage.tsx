'use client';
import { useEffect, useState } from 'react';
import { DisplaySVG } from '@/components/cpanel/DisplaySvg';
import { Loading } from '@/components/cpanel/Loading';
import DeleteCar from './garage/DeleteCar';
import { returnMemberInfo } from '@/lib/supabase';
import { getMemberCars, updateCar } from '@/lib/cpanel/updateCar';
import { BiSkipPreviousCircle, BiSkipNextCircle } from 'react-icons/bi';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Select,
  SelectItem,
} from '@nextui-org/react';
import toast from 'react-hot-toast';
import { listPartsCar } from '@/lib/cpanel/listPartsCar';
import { Car, Color, Finition, Member, Model } from '@/types/models';

export default function Garage({
  session,
  hide = false,
}: {
  session: any;
  hide?: boolean;
}) {
  const [member, setMember] = useState<Member | undefined>(undefined);
  const [cars, setCars] = useState<Car[] | undefined>(undefined);
  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  const carColor = cars !== undefined ? cars[currentCarIndex].color.hexa : null;
  const isDark = carColor !== null && isColorDark(carColor);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [value, setValue] = useState('');
  const [newValue, setNewValue] = useState('');
  const [newModelSelected, setNewModelSelected] = useState<Set<string>>(
    new Set([])
  );
  const [newFinitionSelected, setNewFinitionSelected] = useState<Set<string>>(
    new Set([])
  );
  const [newColorSelected, setNewColorSelected] = useState<Set<string>>(
    new Set([])
  );
  const [title, setTitle] = useState('');
  const [colors, setColors] = useState<Color[]>([]);
  const [finitions, setFinitions] = useState<Finition[]>([]);
  const [models, setModels] = useState<Model[]>([]);
  const [immatriculation, setImmatriculation] = useState('');

  const sortedColors = [...colors].sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    return nameA.localeCompare(nameB);
  });

  const handleSelectionModelChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setNewModelSelected(new Set([e.target.value]));
  };
  const handleSelectionFinitionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setNewFinitionSelected(new Set([e.target.value]));
  };
  const handleSelectionColorChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setNewColorSelected(new Set([e.target.value]));
  };

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
                  mine: cars[i].min,
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

  useEffect(() => {
    listPartsCar({
      session,
      setMember,
      setColors,
      setFinitions,
      setModels,
    });
  }, []);

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

  function isColorDark(hexColor: string): boolean {
    const red = parseInt(hexColor.slice(0, 2), 16);
    const green = parseInt(hexColor.slice(2, 4), 16);
    const blue = parseInt(hexColor.slice(4, 6), 16);

    // Calculer la luminance selon la formule relative à la perception humaine
    const luminance = 0.299 * red + 0.587 * green + 0.114 * blue;

    // Si la luminance est inférieure à 128, la couleur est considérée comme foncée
    return luminance < 128;
  }

  const handleSaveClick = async () => {
    const commonUpdateCar = async (
      newName: string,
      propertyName: string,
      partName: string,
      newId?: string
    ) => {
      if (newName === '') {
        toast.error(`Aucune modification de ${propertyName} n'a été faite`);
        onClose();
        return;
      }

      if (newName === value) {
        toast.error(`Même ${propertyName} saisi`);
        onClose();
        return;
      }

      toast.success('Enregistrement en cours...');
      onClose();

      const responseUpdateCar = await updateCar(
        value,
        newName,
        immatriculation || value,
        partName || '',
        newId || ''
      );
      console.log('GARAGE before json', responseUpdateCar);

      if (responseUpdateCar?.status === 200) {
        toast.success('Enregistrement avec succès !');
        window.location.reload();
      } else {
        toast.error(responseUpdateCar.statusText);
      }
    };

    if (title === 'immatriculation') {
      commonUpdateCar(newValue, 'immatriculation', 'immatriculation');
    } else if (title === 'mine') {
      commonUpdateCar(newValue, 'type mine', 'min');
    } else if (title === 'modèle') {
      const selectedModelId = Array.from(newModelSelected)[0];
      const modelId = parseInt(selectedModelId, 10);
      const model = models.find((m) => m.id === modelId);
      model !== undefined &&
        commonUpdateCar(model.name, 'modèle', 'car_model_id', selectedModelId);
    } else if (title === 'finition') {
      const selectedFinitionId = Array.from(newFinitionSelected)[0];
      const finitionId = parseInt(selectedFinitionId, 10);
      const finition = finitions.find((m) => m.id === finitionId);
      finition !== undefined &&
        commonUpdateCar(
          finition.name,
          'finition',
          'car_finition_id',
          selectedFinitionId
        );
    } else if (title === 'couleur') {
      const selectedColorId = Array.from(newColorSelected)[0];
      const colorId = parseInt(selectedColorId, 10);
      const color = colors.find((m) => m.id === colorId);
      color !== undefined &&
        commonUpdateCar(color.name, 'couleur', 'car_color_id', selectedColorId);
    }
  };

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
                    {/* MODAL */}
                    <Modal
                      backdrop={'blur'}
                      isOpen={isOpen}
                      onOpenChange={onOpenChange}
                      placement="top-center"
                    >
                      <ModalContent>
                        {(onClose) => (
                          <>
                            <ModalHeader className="flex flex-col gap-1 capitalize">
                              {title}
                            </ModalHeader>
                            <ModalBody>
                              {(title === 'immatriculation' ||
                                title === 'mine') && (
                                <Input
                                  type="text"
                                  color="primary"
                                  defaultValue={value}
                                  variant="underlined"
                                  onValueChange={setNewValue}
                                />
                              )}
                              {title === 'modèle' && (
                                <Select
                                  items={models}
                                  label="Modèle"
                                  color="primary"
                                  placeholder="Choix du modèle"
                                  className="max-w-xs"
                                  selectedKeys={newModelSelected}
                                  onChange={handleSelectionModelChange}
                                >
                                  {(model) => (
                                    <SelectItem
                                      key={model.id}
                                      color="primary"
                                      value={model.name}
                                    >
                                      {model.name}
                                    </SelectItem>
                                  )}
                                </Select>
                              )}
                              {title === 'finition' && (
                                <Select
                                  items={finitions}
                                  label="Finition"
                                  color="primary"
                                  placeholder="Choix de la finition"
                                  className="max-w-xs"
                                  selectedKeys={newFinitionSelected}
                                  onChange={handleSelectionFinitionChange}
                                >
                                  {(finition) => (
                                    <SelectItem
                                      key={finition.id}
                                      color="primary"
                                      value={finition.name}
                                    >
                                      {finition.name}
                                    </SelectItem>
                                  )}
                                </Select>
                              )}
                              {title === 'couleur' && (
                                <Select
                                  items={sortedColors}
                                  label="Couleur"
                                  color="primary"
                                  placeholder="Choix de la couleur"
                                  className="max-w-xs"
                                  selectedKeys={newColorSelected}
                                  onChange={handleSelectionColorChange}
                                >
                                  {(color) => (
                                    <SelectItem
                                      key={color.id}
                                      color="primary"
                                      value={color.name}
                                      startContent={
                                        <div
                                          className="w-6 h-6 rounded-full"
                                          style={{
                                            backgroundColor: `#${color.hexa}`,
                                          }}
                                        />
                                      }
                                    >
                                      {color.name}
                                    </SelectItem>
                                  )}
                                </Select>
                              )}
                            </ModalBody>
                            <ModalFooter>
                              <Button
                                color="danger"
                                variant="ghost"
                                onPress={onClose}
                              >
                                Fermer
                              </Button>
                              <Button
                                color="primary"
                                onPress={handleSaveClick}
                                variant="shadow"
                              >
                                Enregistrer
                              </Button>
                            </ModalFooter>
                          </>
                        )}
                      </ModalContent>
                    </Modal>

                    {/* ARRAY DISPLAY CAR INFO */}
                    {cars !== undefined && (
                      <>
                        {/* TYPE MINE */}
                        <div
                          className="md:grid md:grid-cols-2 md:space-y-0 space-y-1 p-4 border-b hover:bg-gray-300 dark:hover:bg-slate-600 hover:cursor-pointer"
                          onClick={() => {
                            onOpen();
                            setValue(cars[currentCarIndex].mine);
                            setTitle('mine');
                            setImmatriculation(
                              cars[currentCarIndex].immatriculation
                            );
                          }}
                        >
                          <p className="text-black font-bold dark:font-normal">
                            Type Mine :
                          </p>
                          <p className="text-primary dark:text-gray-900 uppercase font-bold">
                            {cars !== undefined && cars[currentCarIndex].mine}
                          </p>
                        </div>

                        {/* IMMATRICULATION */}
                        <div
                          className="md:grid md:grid-cols-2 md:space-y-0 space-y-1 p-4 border-b hover:bg-gray-300 dark:hover:bg-slate-600 hover:cursor-pointer"
                          onClick={() => {
                            onOpen();
                            setValue(cars[currentCarIndex].immatriculation);
                            setTitle('immatriculation');
                          }}
                        >
                          <p className="text-black font-bold dark:font-normal">
                            Immatriculation :
                          </p>
                          <p className="text-primary dark:text-gray-900 uppercase font-bold">
                            {cars !== undefined &&
                              cars[currentCarIndex].immatriculation}
                          </p>
                        </div>

                        {/* MODEL */}
                        <div
                          className="md:grid md:grid-cols-2 md:space-y-0 space-y-1 p-4 border-b hover:bg-gray-300 dark:hover:bg-slate-600 hover:cursor-pointer"
                          onClick={() => {
                            onOpen();
                            setValue(cars[currentCarIndex].model);
                            setTitle('modèle');
                            setImmatriculation(
                              cars[currentCarIndex].immatriculation
                            );
                          }}
                        >
                          <p className="text-black font-bold dark:font-normal">
                            Modèle :
                          </p>
                          <p className="text-primary dark:text-gray-900 uppercase font-bold">
                            {cars !== undefined && cars[currentCarIndex].model}
                          </p>
                        </div>

                        {/* FINITION */}
                        <div
                          className="md:grid md:grid-cols-2 md:space-y-0 space-y-1 p-4 border-b hover:bg-gray-300 dark:hover:bg-slate-600 hover:cursor-pointer"
                          onClick={() => {
                            onOpen();
                            setValue(cars[currentCarIndex].finition);
                            setTitle('finition');
                            setImmatriculation(
                              cars[currentCarIndex].immatriculation
                            );
                          }}
                        >
                          <p className="text-black font-bold dark:font-normal">
                            Finition :
                          </p>
                          <p className="text-primary dark:text-gray-900 uppercase font-bold">
                            {cars !== undefined &&
                              cars[currentCarIndex].finition}
                          </p>
                        </div>

                        {/* COLOR */}
                        <div
                          className="md:grid md:grid-cols-2 md:space-y-0 space-y-1 p-4 border-b hover:bg-gray-300 dark:hover:bg-slate-600 hover:cursor-pointer"
                          onClick={() => {
                            onOpen();
                            setValue(cars[currentCarIndex].color.name || '');
                            setTitle('couleur');
                            setImmatriculation(
                              cars[currentCarIndex].immatriculation
                            );
                          }}
                        >
                          <p className="text-black font-bold dark:font-normal">
                            Couleur :
                          </p>
                          <p className="text-primary dark:text-gray-900 uppercase font-bold">
                            {cars !== undefined &&
                              cars[currentCarIndex].color.name}
                          </p>
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
