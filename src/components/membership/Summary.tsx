'use client'

import { Button } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { TiArrowBack } from 'react-icons/ti'

import {
  Color,
  Finition,
  Model,
  PersonalInfo,
  Vehicles,
} from '@/src/types/models'

import { getAllColors, getAllFinitions, getAllModels } from '@/src/lib/supabase'

export const Summary = ({ setStep }: any) => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | undefined>(
    undefined,
  )
  const [vehicles, setVehicles] = useState<Vehicles[]>([])
  const [models, setModels] = useState<Model[]>([])
  const [finitions, setFinitions] = useState<Finition[]>([])
  const [colors, setColors] = useState<Color[]>([])

  useEffect(() => {
    const storedPersonalInfoJSON = sessionStorage.getItem('personalInfo')
    if (storedPersonalInfoJSON) {
      const storedPersonalInfo = JSON.parse(storedPersonalInfoJSON)
      setPersonalInfo(() => storedPersonalInfo)
    }

    const storedVehicleJSON = sessionStorage.getItem('vehicles')
    if (storedVehicleJSON) {
      const storedVehicle = JSON.parse(storedVehicleJSON)
      setVehicles(() => storedVehicle)
    }
  }, [])

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

  const handleGoBack = () => {
    setStep((s: number) => {
      return s - 1
    })
  }

  const handleNext = () => {
    setStep((s: number) => {
      return s + 1
    })
  }

  return (
    <>
      <div className="bg-gray-100 p-8 dark:bg-gray-800">
        <h2 className="text-2xl font-bold mb-4">Résumé </h2>

        {/* Personal Info */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-center bg-slate-300 p-4">
            Tes Informations Personnelles
          </h3>
          <section className="space-y-4 mt-8">
            <div className="font-bold flex justify-between">
              Nom
              <span className="font-normal">{personalInfo?.first_name}</span>
            </div>
            <div className="font-bold flex justify-between">
              Prénom
              <span className="font-normal">{personalInfo?.last_name}</span>
            </div>
            <div className="font-bold flex justify-between">
              Adresse
              <span className="font-normal">{personalInfo?.address}</span>
            </div>
            <div className="font-bold flex justify-between">
              Code Postal
              <span className="font-normal">{personalInfo?.zip_code}</span>
            </div>
            <div className="font-bold flex justify-between">
              Ville
              <span className="font-normal">{personalInfo?.town}</span>
            </div>
            <div className="font-bold flex justify-between">
              Date anniversaire
              <span className="font-normal">
                {new Date(personalInfo?.birth_date || '').toLocaleDateString(
                  'fr-FR',
                )}
              </span>
            </div>
            <div className="font-bold flex justify-between">
              Numéro de Téléphone
              <span className="font-normal">
                {`+${personalInfo?.country} ${personalInfo?.phone.slice(2)}`}
              </span>
            </div>
          </section>
        </div>

        {/* Vehicles */}
        <div>
          {vehicles.length === 0 ? (
            <h1 className="text-center mt-4 bg-red-600 p-8 text-black font-bold">
              Ton garage est vide. Tu dois renseigner OBLIGATOIREMENT une 306.
            </h1>
          ) : (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-center bg-slate-300 p-4 mt-16">
                Ton Garage
              </h3>
              {vehicles.map((vehicle, index) => (
                <div key={index} className="bg-gray-400 p-4 dark:bg-gray-900">
                  <span className="font-bold">Voiture {index + 1}:</span>
                  <section key={index} className="p-4 space-y-4">
                    <div className="font-bold flex justify-between">
                      Immatriculation
                      <span className="font-normal">
                        {vehicle.immatriculation}
                      </span>
                    </div>
                    <div className="font-bold flex justify-between">
                      Code Mine
                      <span className="font-normal">{vehicle.mine}</span>
                    </div>
                    <div className="font-bold flex justify-between">
                      Modèle
                      <span className="font-normal">
                        {
                          models.find(
                            (model) => model.id === Number(vehicle.model),
                          )?.name
                        }
                      </span>
                    </div>
                    <div className="font-bold flex justify-between">
                      Finition
                      <span className="font-normal">
                        {
                          finitions.find(
                            (finition) =>
                              finition.id === Number(vehicle.finition),
                          )?.name
                        }
                      </span>
                    </div>
                    <div className="font-bold flex justify-between">
                      Couleur
                      <span className="font-normal">
                        {
                          colors.find(
                            (color) => color.id === Number(vehicle.color),
                          )?.name
                        }
                      </span>
                    </div>
                  </section>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex  w-full justify-between mt-4">
        <Button
          color="danger"
          radius="none"
          startContent={<TiArrowBack />}
          onClick={() => {
            handleGoBack()
          }}
        >
          Précédent
        </Button>
        {vehicles.length >= 1 && (
          <Button color="primary" radius="none" onClick={handleNext}>
            Continuer
          </Button>
        )}
      </div>
    </>
  )
}
