'use client';
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  addCar,
  getAllColors,
  getAllFinitions,
  getAllModels,
  returnMemberInfo,
  sendMailNewCarCPanel,
} from '@/lib/supabase';
import { Color, Finition, Model, Vehicles } from '@/app/models';
import RootLayout from '@/app/layout';
import CustomLayout from '../layout';
import ClipLoader from 'react-spinners/ClipLoader';

export default function AddCar() {
  // const [editIndex, setEditIndex] = useState<number | null>(null);
  const [displayLoader, setDisplayLoader] = useState(false);
  const { data: session } = useSession();
  const [member, setMember] = useState<Member | undefined>(undefined);
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

  const handleAddVehicle = async (data: Vehicles) => {
    setDisplayLoader(true);
    try {
      const response = await addCar([data], member?.id);
      if (response !== undefined && response.status === 200) {
        const response = await sendMailNewCarCPanel(data, member?.id);
        if (response !== undefined && response.status === 200) {
          alert('Enregistrement avec succès !');
          setDisplayLoader(false);
          reset();
        }
      }
    } catch (error) {
      console.log('Error', error);
    }
    // reset();
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
      {displayLoader && (
        <section className="grid h-screen place-items-center">
          <ClipLoader
            loading={true}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </section>
      )}
      {!displayLoader && (
        <CustomLayout>
          <form
            // onSubmit={
            //   editIndex !== null
            //     ? handleSubmit(handleUpdateVehicle)
            //     : handleSubmit(handleAddVehicle)
            // }
            onSubmit={handleSubmit(handleAddVehicle)}
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
                    // errors.immatriculation && editIndex === null
                    errors.immatriculation ? 'border-red-500' : ''
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="immatriculation"
                  className={`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                    // errors.immatriculation && editIndex === null
                    errors.immatriculation
                      ? 'text-red-500 font-mono text-sm'
                      : ''
                  }`}
                >
                  Immatriculation
                </label>

                {/* {editIndex === null && errors.immatriculation && ( */}
                {errors.immatriculation && (
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
                    // errors.mine && editIndex === null ? 'border-red-500' : ''
                    errors.mine ? 'border-red-500' : ''
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="mine"
                  className={`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                    // errors.mine && editIndex === null
                    errors.mine ? 'text-red-500 font-mono text-sm' : ''
                  }`}
                >
                  Type Mine
                </label>

                {/* {editIndex === null && errors.mine && ( */}
                {errors.mine && (
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
                    // errors.model && editIndex === null
                    errors.model
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
                    // errors.model && editIndex === null
                    errors.model ? 'text-red-500 font-mono text-sm' : ''
                  }`}
                >
                  Modèle
                </label>

                {/* {editIndex === null && errors.model && ( */}
                {errors.model && (
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
                    // errors.model && editIndex === null
                    errors.model
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
                    // errors.color && editIndex === null
                    errors.color ? 'text-red-500 font-mono text-sm' : ''
                  }`}
                >
                  Couleur
                </label>

                {/* {editIndex === null && errors.color && ( */}
                {errors.color && (
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
                    // errors.model && editIndex === null
                    errors.model
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
                    // errors.finition && editIndex === null
                    errors.finition ? 'text-red-500 font-mono text-sm' : ''
                  }`}
                >
                  Finition
                </label>

                {/* {editIndex === null && errors.finition && ( */}
                {errors.finition && (
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
        </CustomLayout>
      )}
    </RootLayout>
  );
}

interface Member {
  id: number;
}
