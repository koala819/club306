'use client'

import { Button, Input, Select, SelectItem } from "@heroui/react"
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TiArrowBack } from 'react-icons/ti'

import { Color, Finition, Model, Vehicles } from '@/src/types/models'

import { getAllColors, getAllFinitions, getAllModels } from '@/src/lib/supabase'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const Garage = ({ setStep }: any) => {
  const [vehicles, setVehicles] = useState<Vehicles[]>([])
  const [editIndex, setEditIndex] = useState<number | null>(null)
  const [colors, setColors] = useState<Color[]>([])
  const [finitions, setFinitions] = useState<Finition[]>([])
  const [models, setModels] = useState<Model[]>([])
  const [memberIdFromSessionStorage, setMemberIdFromSessionStorage] =
    useState<string>('')

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
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm<Vehicles>({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    const fetchData = async () => {
      const carColor = await getAllColors()
      if (carColor !== null && carColor.data !== null) {
        const fetchedColors: Color[] = carColor.data.map((color: any) => {
          return {
            id: color.id,
            name: color.name,
            hexa: color.hexa,
          }
        })
        setColors(fetchedColors)
      }

      const carFinition = await getAllFinitions()
      if (carFinition !== null && carFinition.data !== null) {
        const fetchedFinitions: Finition[] = carFinition.data.map(
          (color: any) => {
            return {
              id: color.id,
              name: color.name,
            }
          },
        )
        setFinitions(fetchedFinitions)
      }

      const carModel = await getAllModels()
      if (carModel !== null && carModel.data !== null) {
        const fetchedModels: Model[] = carModel.data.map((model: any) => {
          return {
            id: model.id,
            name: model.name,
          }
        })
        setModels(fetchedModels)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const memberIdJSON = sessionStorage.getItem('memberId')
    if (memberIdJSON) {
      const storedMemberId = JSON.parse(memberIdJSON)
      setMemberIdFromSessionStorage(() => storedMemberId)
    }

    const storedVehiclesJSON = sessionStorage.getItem('vehicles')
    if (storedVehiclesJSON) {
      const storedVehicles = JSON.parse(storedVehiclesJSON)
      setVehicles(() => storedVehicles)
    }
  }, [])

  function addVehicle(data: Vehicles) {
    console.log('data', data)
    console.log('vehicles', vehicles)
    console.log('newVehicle', [...vehicles, data])
    setVehicles([...vehicles, data])
    reset({
      immatriculation: '',
      mine: '',
      model: '',
      color: '',
      finition: '',
    })
  }

  function cancelEdit() {
    setEditIndex(null)
    reset({
      immatriculation: '',
      mine: '',
      model: '',
      color: '',
      finition: '',
    })
  }

  function deleteVehicle(index: number) {
    const updatedVehicles = [...vehicles]
    updatedVehicles.splice(index, 1)
    setVehicles(updatedVehicles)
  }

  function editVehicle(index: number) {
    setEditIndex(index)

    reset({
      immatriculation: vehicles[index].immatriculation,
      mine: vehicles[index].mine,
      model: vehicles[index].model,
      color: vehicles[index].color,
      finition: vehicles[index].finition,
    })
  }

  function goBack() {
    setStep((s: number) => {
      return s - 1
    })
  }

  function next() {
    sessionStorage.setItem('vehicles', JSON.stringify(vehicles))
    localStorage.setItem(
      `vehicles_${memberIdFromSessionStorage}`,
      JSON.stringify(vehicles),
    )
    setStep((s: number) => s + 1)
  }

  function updateVehicle(data: Vehicles) {
    const updatedVehicles = [...vehicles]
    if (editIndex !== null) {
      updatedVehicles[editIndex] = data
      setVehicles(updatedVehicles)
      setEditIndex(null)
      reset({
        immatriculation: '',
        mine: '',
        model: '',
        color: '',
        finition: '',
      })
    }
  }

  return (
    <>
      <form
        onSubmit={
          editIndex !== null
            ? handleSubmit(updateVehicle)
            : handleSubmit(addVehicle)
        }
      >
        <div className="grid grid-cols-6 gap-6   space-y-8">
          {/* IMMATRICULATION */}
          <div className="col-span-6 sm:col-span-3 relative z-0 mt-8">
            <Input
              {...register('immatriculation')}
              value={watch('immatriculation')}
              radius="none"
              type="text"
              color="primary"
              variant="bordered"
              isClearable
              label="Immatriculation"
              labelPlacement="outside"
              isInvalid={errors.immatriculation && true}
              errorMessage={
                errors.immatriculation && errors.immatriculation.message
              }
            />
          </div>

          {/* MINE */}
          <div className="col-span-6 sm:col-span-3 relative z-0">
            <Input
              {...register('mine')}
              value={watch('mine')}
              radius="none"
              type="text"
              color="primary"
              variant="bordered"
              isClearable
              label="Type Mine"
              labelPlacement="outside"
              isInvalid={errors.mine && true}
              errorMessage={errors.mine && errors.mine.message}
            />
          </div>

          {/* MODEL */}
          <div className="col-span-6 sm:col-span-3 relative z-0">
            <Controller
              control={control}
              name="model"
              render={({ field: { onChange, value } }) => (
                <Select
                  radius="none"
                  selectedKeys={value ? [value] : []}
                  onChange={(value) => onChange(value)}
                  isInvalid={errors.model && true}
                  errorMessage={errors.model && errors.model.message}
                  placeholder="Choix du modèle"
                >
                  {models
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((model: Model) => (
                      <SelectItem key={model.id} value={model.id}>
                        {model.name}
                      </SelectItem>
                    ))}
                </Select>
              )}
            />
          </div>

          {/* COLOR */}
          <div className="col-span-6 sm:col-span-3 relative z-0">
            <Controller
              control={control}
              name="color"
              render={({ field: { onChange, value } }) => (
                <Select
                  radius="none"
                  selectedKeys={value ? [value] : []}
                  onChange={(value) => onChange(value)}
                  isInvalid={errors.color && true}
                  errorMessage={errors.color && errors.color.message}
                  placeholder="Choix de la couleur"
                >
                  {/* {console.log('value', value)} */}
                  {colors
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((color: Color) => (
                      <SelectItem
                        key={color.id}
                        value={color.name}
                        startContent={
                          <div style={{ backgroundColor: `#${color.hexa}` }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </div>
                        }
                      >
                        {color.name}
                      </SelectItem>
                    ))}
                </Select>
              )}
            />
          </div>

          {/* FINITION */}
          <div className="col-span-6 sm:col-span-3 relative z-0">
            <Controller
              control={control}
              name="finition"
              render={({ field: { onChange, value } }) => (
                <Select
                  radius="none"
                  selectedKeys={value ? [value] : []}
                  onChange={(value: any) => onChange(value)}
                  isInvalid={errors.finition && true}
                  errorMessage={errors.finition && errors.finition.message}
                  placeholder="Choix de la finition"
                >
                  {finitions
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((finition: Finition) => (
                      <SelectItem key={finition.id} value={finition.name}>
                        {finition.name}
                      </SelectItem>
                    ))}
                </Select>
              )}
            />
          </div>
        </div>
        <div className="mt-4">
          {editIndex !== null ? (
            <div className="flex justify-between">
              <Button radius="none" color="primary" type="submit">
                Mettre à jour
              </Button>
              <Button radius="none" color="danger" onClick={cancelEdit}>
                Annuler
              </Button>
            </div>
          ) : (
            <Button radius="none" color="success" type="submit">
              <span className="text-white">Ajouter une 306</span>
            </Button>
          )}
        </div>
      </form>
      <div className="mt-24">
        {vehicles.map((vehicle, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 mb-4 dark:bg-gray-800 px-8 space-y-4"
          >
            <div className="font-bold flex justify-between">
              Immatriculation
              <span className="font-normal">{vehicle.immatriculation}</span>
            </div>
            <div className="font-bold flex justify-between">
              Code Mine
              <span className="font-normal">{vehicle.mine}</span>
            </div>
            <div className="font-bold flex justify-between">
              Modèle
              <span className="font-normal">
                {
                  models.find((model) => model.id === Number(vehicle.model))
                    ?.name
                }
              </span>
            </div>
            <div className="font-bold flex justify-between">
              Finition
              <span className="font-normal">
                {
                  finitions.find(
                    (finition) => finition.id === Number(vehicle.finition),
                  )?.name
                }
              </span>
            </div>
            <div className="font-bold flex justify-between">
              Couleur
              <span className="font-normal">
                {
                  colors.find((color) => color.id === Number(vehicle.color))
                    ?.name
                }
              </span>
            </div>

            <div className="mt-2 flex space-x-8">
              <Button
                radius="none"
                color="primary"
                onClick={() => editVehicle(index)}
              >
                Modifier
              </Button>
              <Button
                radius="none"
                color="danger"
                onClick={() => deleteVehicle(index)}
              >
                Supprimer
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-between mt-4">
        <Button
          radius="none"
          color="danger"
          startContent={<TiArrowBack />}
          onClick={() => {
            goBack()
          }}
        >
          Précédent
        </Button>
        {vehicles.length > 0 && (
          <Button radius="none" color="primary" onClick={next}>
            Continuer
          </Button>
        )}
      </div>
    </>
  )
}
