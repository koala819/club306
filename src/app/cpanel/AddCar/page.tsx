'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { getAllColors, getAllFinitions, getAllModels } from '@/lib/supabase';
import { Color, Finition, Model, Vehicles } from '@/app/models';
import { TiArrowBack } from 'react-icons/ti';
import RootLayout from '@/app/layout';
import CustomLayout from '../layout';

export default function AddCar() {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [colors, setColors] = useState<Color[]>([]);
  const [finitions, setFinitions] = useState<Finition[]>([]);
  const [models, setModels] = useState<Model[]>([]);

  const schema = yup.object().shape({
    immatriculation: yup
      .string()
      .min(4, "L'Immatriculation doit avoir 4 caractères minimum")
      .max(10, "L'Immatriculation doit avoir 10 caractères maximum")
      .required("L'Immatriculation est obligatoire"),
    mine: yup.string().required('Le Type Mine est obligatoire'),
    model: yup.string().required('Le choix du Modèle est obligatoire'),
    color: yup.string().required('Le choix de la Couleur est obligatoire'),
    finition: yup.string().required('La Finition est obligatoire'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Vehicles>({
    resolver: yupResolver(schema),
  });

  // const handleGoBack = () => {
  //   setStep((s: number) => {
  //     return s - 1;
  //   });
  // };

  // const handleAddVehicle = (data: Vehicles) => {
  //   setVehicles([...vehicles, data]);
  //   reset();
  // };

  // const handleNext = () => {
  //   setStep((s: number) => s + 1);
  // };

  // const handleEditVehicle = (index: number) => {
  //   setEditIndex(index);
  //   reset(vehicles[index]);
  // };

  const handleUpdateVehicle = (data: Vehicles) => {
    const updatedVehicles = [...vehicles];
    if (editIndex !== null) {
      updatedVehicles[editIndex] = data;
      setVehicles(updatedVehicles);
      setEditIndex(null);
      reset({
        immatriculation: '',
        mine: '',
        model: '',
        color: '',
        finition: '',
      });
    }
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    reset({
      immatriculation: '',
      mine: '',
      model: '',
      color: '',
      finition: '',
    });
  };

  const handleDeleteVehicle = (index: number) => {
    const updatedVehicles = [...vehicles];
    updatedVehicles.splice(index, 1);
    setVehicles(updatedVehicles);
  };

  useEffect(() => {
    const fetchData = async () => {
      const carColor = await getAllColors();
      if (carColor !== null && carColor.data !== null) {
        const fetchedColors: Color[] = carColor.data.map((color: any) => {
          return {
            id: color.id,
            name: color.name,
            hexa: color.hexa,
          };
        });
        setColors(fetchedColors);
      }

      const carFinition = await getAllFinitions();
      if (carFinition !== null && carFinition.data !== null) {
        const fetchedFinitions: Finition[] = carFinition.data.map(
          (color: any) => {
            return {
              id: color.id,
              name: color.name,
            };
          }
        );
        setFinitions(fetchedFinitions);
      }

      const carModel = await getAllModels();
      if (carModel !== null && carModel.data !== null) {
        const fetchedModels: Model[] = carModel.data.map((color: any) => {
          return {
            id: color.id,
            name: color.name,
          };
        });
        setModels(fetchedModels);
      }
    };
    fetchData();
  }, []);

  return (
    <RootLayout hideNavbar hideFooter>
      <CustomLayout>
        <form
          // onSubmit={
          //   editIndex !== null
          //     ? handleSubmit(handleUpdateVehicle)
          //     : handleSubmit(handleAddVehicle)
          // }
          className="mx-8 my-12 border-2 border-gray-400 rounded-lg p-8"
        >
          <div className="grid grid-cols-6 gap-6   space-y-8">
            {/* IMMATRICULATION */}
            <div className="col-span-6 sm:col-span-3 relative z-0 mt-8">
              <input
                type="text"
                id="immatriculation"
                {...register('immatriculation')}
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 ${
                  errors.immatriculation && editIndex === null
                    ? 'border-red-500'
                    : ''
                }`}
                placeholder=" "
              />
              <label
                htmlFor="immatriculation"
                className={`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                  errors.immatriculation && editIndex === null
                    ? 'text-red-500 font-mono text-sm'
                    : ''
                }`}
              >
                Immatriculation
              </label>

              {editIndex === null && errors.immatriculation && (
                <div className="text-red-500 font-mono text-xs">
                  {errors.immatriculation.message}
                </div>
              )}
            </div>

            {/* MINE */}
            <div className="col-span-6 sm:col-span-3 relative z-0">
              <input
                type="text"
                id="mine"
                {...register('mine')}
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 ${
                  errors.mine && editIndex === null ? 'border-red-500' : ''
                }`}
                placeholder=" "
              />
              <label
                htmlFor="mine"
                className={`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                  errors.mine && editIndex === null
                    ? 'text-red-500 font-mono text-sm'
                    : ''
                }`}
              >
                Type Mine
              </label>

              {editIndex === null && errors.mine && (
                <div className="text-red-500 font-mono text-xs">
                  {errors.mine.message}
                </div>
              )}
            </div>

            {/* MODEL */}
            <div className="col-span-6 sm:col-span-3 relative z-0">
              <select
                id="model"
                {...register('model')}
                className={`block py-2.5 px-0 w-full text-sm text-gray-500 dark:text-white bg-transparent dark:bg-gray-900 border-0 border-b-2 border-gray-200 appearance-none dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 dark:focus:bg-gray-900 peer ${
                  errors.model && editIndex === null
                    ? 'border-red-500 text-red-500 text-sm font-mono'
                    : ''
                }`}
              >
                <option value="">Choix du modèle</option>
                {models
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((model: Model) => (
                    <option key={model.id} value={model.name}>
                      {model.name}
                    </option>
                  ))}
              </select>
              <label
                htmlFor="model"
                className={`dark:-mt-4 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                  errors.model && editIndex === null
                    ? 'text-red-500 font-mono text-sm'
                    : ''
                }`}
              >
                Modèle
              </label>

              {editIndex === null && errors.model && (
                <div className="text-red-500 font-mono text-xs">
                  {errors.model.message}
                </div>
              )}
            </div>

            {/* COLOR */}
            <div className="col-span-6 sm:col-span-3 relative z-0">
              <select
                id="color"
                {...register('color')}
                className={`block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer ${
                  errors.model && editIndex === null
                    ? 'border-red-500 text-red-500 text-sm font-mono'
                    : ''
                }`}
              >
                <option value="">Choix de la couleur</option>
                {colors
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((color: Color) => (
                    <option
                      key={color.id}
                      value={color.name}
                      style={{ backgroundColor: `#${color.hexa}` }}
                    >
                      {color.name}
                    </option>
                  ))}
              </select>
              <label
                htmlFor="color"
                className={`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                  errors.color && editIndex === null
                    ? 'text-red-500 font-mono text-sm'
                    : ''
                }`}
              >
                Couleur
              </label>

              {editIndex === null && errors.color && (
                <div className="text-red-500 font-mono text-xs">
                  {errors.color.message}
                </div>
              )}
            </div>

            {/* FINITION */}
            <div className="col-span-6 sm:col-span-3 relative z-0">
              <select
                id="finition"
                {...register('finition')}
                className={`block py-2.5 px-0 w-full text-sm text-gray-500 dark:text-white bg-transparent dark:bg-gray-900 border-0 border-b-2 border-gray-200 appearance-none dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 dark:focus:bg-gray-900 peer ${
                  errors.model && editIndex === null
                    ? 'border-red-500 text-red-500 text-sm font-mono'
                    : ''
                }`}
              >
                <option value="">Choix de la finition</option>
                {finitions
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((finition: Finition) => (
                    <option key={finition.id} value={finition.name}>
                      {finition.name}
                    </option>
                  ))}
              </select>
              <label
                htmlFor="finition"
                className={`dark:-mt-4 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                  errors.finition && editIndex === null
                    ? 'text-red-500 font-mono text-sm'
                    : ''
                }`}
              >
                Finition
              </label>

              {editIndex === null && errors.finition && (
                <div className="text-red-500 font-mono text-xs">
                  {errors.finition.message}
                </div>
              )}
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-600"
            >
              Ajouter une 306
            </button>
          </div>
        </form>
        {/* <div className="mt-24">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="bg-gray-100 p-4 mb-4 dark:bg-gray-800">
              <div>
                <span className="font-bold">Immatriculation:</span>{' '}
                {vehicle.immatriculation}
              </div>
              <div>
                <span className="font-bold">Code Mine:</span> {vehicle.mine}
              </div>
              <div>
                <span className="font-bold">Model:</span> {vehicle.model}
              </div>
              <div>
                <span className="font-bold">Finition:</span> {vehicle.finition}
              </div>
              <div>
                <span className="font-bold">Color:</span> {vehicle.color}
              </div>
              <div className="mt-2">
                <button
                  type="button"
                  onClick={() => handleEditVehicle(index)}
                  className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Modifier
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteVehicle(index)}
                  className="ml-2 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div> */}
        {/* <div className="flex w-full justify-between mt-4">
          <button
            className="flex items-center px-4 py-2 text-white bg-red-600 rounded-lg duration-150 hover:bg-red-500 active:shadow-lg"
            onClick={() => {
              handleGoBack();
            }}
          >
            <TiArrowBack size={22} className="mr-2" />
            Précédent
          </button>
          <button
            className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg duration-150 hover:bg-blue-500 active:shadow-lg"
            onClick={handleNext}
          >
            Continuer
          </button>
        </div> */}
      </CustomLayout>
    </RootLayout>
  );
}
