'use client'

import { Button, Input, Select, SelectItem } from "@heroui/react"
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { useTheme } from 'next-themes'

import { Color, Finition, Member, Model, Vehicles } from '@/src/types/models'

import WaitSession from '@/src/components/cpanel/WaitSession'

import { listPartsCar } from '@/src/lib/cpanel/listPartsCar'
import { addCar } from '@/src/lib/cpanel/updateCar'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export default function AddCar({ userMail }: { userMail: string }) {
  const [displayLoader, setDisplayLoader] = useState(true)
  // const [changeTextDL, setChangeTextDL] = useState('');
  const [member, setMember] = useState<Member | undefined>(undefined)
  const [colors, setColors] = useState<Color[]>([])
  const [finitions, setFinitions] = useState<Finition[]>([])
  const [models, setModels] = useState<Model[]>([])
  const { resolvedTheme } = useTheme()

  const sortedColors = [...colors].sort((a, b) => {
    const nameA = a.name.toLowerCase()
    const nameB = b.name.toLowerCase()
    return nameA.localeCompare(nameB)
  })

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
  })

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<Vehicles>({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    const fetchData = async () => {
      const response = await listPartsCar({
        setColors,
        setFinitions,
        setModels,
      })
      response ? setDisplayLoader(false) : setDisplayLoader(true)
    }
    fetchData()
  }, [])

  const handleAddVehicle = async (data: Vehicles) => {
    setDisplayLoader(true)

    try {
      const response = await addCar(data, userMail)
      const dataResponse = await response.json()

      if (dataResponse.status === 200) {
        reset()
        setDisplayLoader(false)
        toast.success('Enregistrement avec succès !')
      } else {
        setDisplayLoader(false)
        toast.error("Une erreur s'est produite pour enregistrer le véhicule")
      }
    } catch (error) {
      toast.error("Une erreur s'est produite pour enregistrer le véhicule")
      console.log('Error', error)
    }
  }

  return (
    <>
      {displayLoader ? (
        <WaitSession />
      ) : (
        <div className="w-full lg:w-8/12 px-4 mx-auto mt-6 flex items-center justify-center">
          <div className="flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white dark:bg-slate-500 border-0 sm:w-3/4">
            <form
              onSubmit={handleSubmit(handleAddVehicle)}
              className="mx-8 my-12 border-2 border-gray-400 rounded-lg p-8"
            >
              <section className="xl:flex w-full space-y-4 xl:space-y-0 xl:space-x-16 mb-8">
                {/* IMMATRICULATION */}
                <div className="w-full xl:w-1/2">
                  <Controller
                    name="immatriculation"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <Input
                        type="text"
                        color="primary"
                        // color={`${
                        //   resolvedTheme === 'dark'
                        //     ? 'default'
                        //     : errors.immatriculation
                        //     ? 'danger'
                        //     : 'primary'
                        // }`}
                        variant={'faded'}
                        label="Immatriculation"
                        id="immatriculation"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                  {errors.immatriculation && (
                    <p className="text-danger text-xs font-bold">
                      {errors.immatriculation.message}
                    </p>
                  )}
                </div>

                {/* MINE */}
                <div className="w-full xl:w-1/2">
                  <Controller
                    name="mine"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <Input
                        type="text"
                        color="primary"
                        // color={`${
                        //   resolvedTheme === 'dark'
                        //     ? 'default'
                        //     : errors.immatriculation
                        //     ? 'danger'
                        //     : 'primary'
                        // }`}
                        variant={'faded'}
                        label="Type Mine"
                        id="mine"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                  {errors.mine && (
                    <p className="text-danger text-xs font-bold">
                      {errors.mine.message}
                    </p>
                  )}
                </div>
              </section>

              <section className="xl:flex w-full space-y-4 xl:space-y-0 xl:space-x-16 mb-8">
                {/* MODEL */}
                <div className="w-full xl:w-1/2">
                  <Controller
                    name="model"
                    control={control}
                    render={({ field: { onChange } }) => (
                      <Select
                        items={models}
                        label="Modèle"
                        onChange={onChange}
                        color={`${errors.model ? 'danger' : 'primary'}`}
                        placeholder="Choix du modèle"
                        className="max-w-xs"
                      >
                        {(model) => (
                          <SelectItem key={model.id} color="primary">
                            {model.name}
                          </SelectItem>
                        )}
                      </Select>
                    )}
                  />
                  {errors.model && (
                    <p className="text-danger text-xs font-bold">
                      {errors.model.message}
                    </p>
                  )}
                </div>

                {/* FINITION */}
                <div className="w-full xl:w-1/2">
                  <Controller
                    name="finition"
                    control={control}
                    render={({ field: { onChange } }) => (
                      <Select
                        items={finitions}
                        label="Finition"
                        onChange={onChange}
                        color={`${errors.finition ? 'danger' : 'primary'}`}
                        placeholder="Choix de la finition"
                        className="max-w-xs"
                      >
                        {(finition) => (
                          <SelectItem key={finition.id} color="primary">
                            {finition.name}
                          </SelectItem>
                        )}
                      </Select>
                    )}
                  />
                  {errors.finition && (
                    <p className="text-danger text-xs font-bold">
                      {errors.finition.message}
                    </p>
                  )}
                </div>
              </section>

              <section className="xl:flex w-full space-y-4 xl:space-y-0 xl:space-x-16 xl:pr-16">
                {/* COLOR */}
                <div className="w-full xl:w-1/2">
                  <Controller
                    name="color"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <Select
                        items={sortedColors}
                        label="Couleur"
                        onChange={onChange}
                        value={value}
                        color={`${errors.color ? 'danger' : 'primary'}`}
                        placeholder="Choix de la couleur"
                        className="max-w-xs"
                      >
                        {(color) => (
                          <SelectItem
                            key={color.id}
                            color="primary"
                            startContent={
                              <div
                                className="w-6 h-6 rounded-full"
                                style={{ backgroundColor: `#${color.hexa}` }}
                              />
                            }
                          >
                            {color.name}
                          </SelectItem>
                        )}
                      </Select>
                    )}
                  />
                  {errors.color && (
                    <p className="text-danger text-xs font-bold">
                      {errors.color.message}
                    </p>
                  )}
                </div>
                <div className="w-full xl:w-1/2 flex items-center justify-center">
                  <Button
                    color="primary"
                    variant={resolvedTheme === 'dark' ? 'shadow' : 'ghost'}
                    type="submit"
                  >
                    Ajouter une 306
                  </Button>
                </div>
              </section>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
