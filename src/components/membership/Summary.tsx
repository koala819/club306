'use client';
import { useEffect, useState } from 'react';
import { TiArrowBack } from 'react-icons/ti';
import { PersonalInfo, Vehicles } from '@/types/models';

export const Summary = ({ setStep }: any) => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | undefined>(
    undefined
  );
  const [vehicles, setVehicles] = useState<Vehicles[]>([]);

  useEffect(() => {
    const storedPersonalInfoJSON = sessionStorage.getItem('personalInfo');
    if (storedPersonalInfoJSON) {
      const storedPersonalInfo = JSON.parse(storedPersonalInfoJSON);
      setPersonalInfo(() => storedPersonalInfo);
    }

    const storedVehicleJSON = sessionStorage.getItem('vehicles');
    if (storedVehicleJSON) {
      const storedVehicle = JSON.parse(storedVehicleJSON);
      setVehicles(() => storedVehicle);
    }
  }, []);

  const handleGoBack = () => {
    setStep((s: number) => {
      return s - 1;
    });
  };

  const handleNext = () => {
    setStep((s: number) => {
      return s + 1;
    });
  };

  return (
    <>
      <div className="bg-gray-100 p-8 dark:bg-gray-800">
        <h2 className="text-2xl font-bold mb-4">Résumé </h2>

        {/* Personal Info */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-center bg-slate-300 p-4">
            Tes Informations Personnelles
          </h3>
          <ul className="space-y-4">
            <li>
              <span className="font-bold">Nom:</span> {personalInfo?.first_name}
            </li>
            <li>
              <span className="font-bold">Prénom:</span>{' '}
              {personalInfo?.last_name}
            </li>
            <li>
              <span className="font-bold">Adresse:</span>{' '}
              {personalInfo?.address}
            </li>
            <li>
              <span className="font-bold">Code Postal:</span>{' '}
              {personalInfo?.zip_code}
            </li>
            <li>
              <span className="font-bold">Ville:</span> {personalInfo?.town}
            </li>
            <li>
              <span className="font-bold">Date anniversaire:</span>{' '}
              {new Date(personalInfo?.birth_date || '').toLocaleDateString(
                'fr-FR'
              )}
            </li>
            <li>
              <span className="font-bold">Numéro de Téléphone:</span>{' '}
              {`+${personalInfo?.phone.slice(0, 2)} ${personalInfo?.phone.slice(
                2
              )}`}
            </li>
          </ul>
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
                <div
                  key={index}
                  className="bg-gray-400 p-4 space-y-2 dark:bg-gray-900"
                >
                  <span className="font-bold">Voiture {index + 1}:</span>{' '}
                  <div key={index} className=" p-4">
                    <div>
                      <span className="font-bold">Type Mine:</span>{' '}
                      {vehicle.mine}
                    </div>
                    <div>
                      <span className="font-bold">Immatriculation:</span>{' '}
                      {vehicle.immatriculation}
                    </div>
                    <div>
                      <span className="font-bold">Model:</span> {vehicle.model}
                    </div>
                    <div>
                      <span className="font-bold">Color:</span> {vehicle.color}
                    </div>
                    <div>
                      <span className="font-bold">Finition:</span>{' '}
                      {vehicle.finition}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex  w-full justify-between mt-4">
        <button
          className="flex items-center px-4 py-2 text-white bg-red-600 rounded-lg duration-150 hover:bg-red-500 active:shadow-lg"
          onClick={() => {
            handleGoBack();
          }}
        >
          <TiArrowBack size={22} className="mr-2" />
          Précédent
        </button>
        {vehicles.length >= 1 && (
          <button
            className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg duration-150 hover:bg-blue-500 active:shadow-lg"
            onClick={handleNext}
          >
            Continuer
          </button>
        )}
      </div>
    </>
  );
};
