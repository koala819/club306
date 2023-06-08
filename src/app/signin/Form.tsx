'use client';
// import utilStyles from '../../styles/utils.module.css';
// import formStyles from './Form.module.css';
import { useState } from 'react';
import { PersonalInfos } from './PersonalInfos';
import { Garage } from './Garage';
import { Summary } from './Summary';
// import PickAddOns from './pickAddOns/pickAddOns';
// import Summary from './summary';
// import ThankYou from './thankYou';
// import {
//   nameRegex,
//   emailRegex,
//   phoneNumberRegex,
// } from '../../constants/regex/regexConstants';
// import { garage_validate, personalInfos_validate } from '../../lib/validate';
import { personalInfo } from '../types/Components';
// import { add_car_validate } from '../../lib/validate';

interface Vehicles {
  immatriculation: string;
  mine: string;
  model: string;
  color: string;
  finition: string;
}

export const Form = ({
  step,
  setStep,
}: // formData,
// updateFormData,
{
  step: number;
  setStep: any;
  // formData: FormData;
  // updateFormData: any;
}) => {
  const [vehicles, setVehicles] = useState<Vehicles[]>([]);
  const [personalInfo, setPersonalInfo] = useState<personalInfo>({
    first_name: '',
    last_name: '',
    address: '',
    zip_code: '',
    town: '',
    birth_date: '',
    phone: '',
    checkCotisation: false,
    checkCertificateHonour: false,
    checkEngagementClub: false,
    checkPrivacyPolicy: false,
  });

  // const [index, setIndex] = useState(0);

  // const checkDataFromGarage = (childData: number) => {
  //   console.log(
  //     'données provenant de Garage, nous avons un index ==',
  //     childData
  //   );
  //   setIndex(() => childData);
  // };

  // useEffect(() => {
  //   console.log('La valeur de "index" a été mise à jour :', index);
  // }, [index]);

  if (step != 5)
    return (
      <main
        aria-label="Main"
        className="flex w-full lg:flex lg:items-center lg:justify-center lg:col-span-7 lg:px-8 xl:col-span-6"
      >
        <div>
          <div className="relative  block lg:hidden">
            <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Club 306
            </h1>
            <p className="mt-4 leading-relaxed text-gray-500">
              Rejoins nous dans l&apos;aventure Peugeot 306.
            </p>
          </div>

          {step == 1 && (
            <PersonalInfos
              setStep={setStep}
              personalInfo={personalInfo}
              setPersonalInfo={setPersonalInfo}
            />
          )}
          {step == 2 && (
            <Garage
              setStep={setStep}
              vehicles={vehicles}
              setVehicles={setVehicles}
            />
          )}
          {step == 3 && (
            <Summary
              setStep={setStep}
              personalInfo={personalInfo}
              vehicles={vehicles}
            />
          )}
          {/* {step == 3 && (
          <PickAddOns
            addOns={addOnsInfo}
            setAddOns={setAddOnsInfo}
            yearly={selectPlanInfo.timeframe}
          />
        )}
        {step == 4 && (
          <Summary
            formData={formData}
            toggleYearly={() => {
              setSelectPlanInfo({
                ...selectPlanInfo,
                timeframe: !selectPlanInfo.timeframe,
              });
              toggleYearly();
            }}
          />
        )} */}
          {/* <div className="flex  w-full justify-between mt-4">
            <button
              type="button"
              className={
                step >= 2
                  ? 'hover:bg-red-600 bg-red-800  active:bg-red-200 text-gray-100 text-xl px-7 py-1.5 rounded '
                  : 'hidden'
              }
              onClick={handleGoBack}
            >
              Retour
            </button>
            <button
              type="submit"
              className={
                step < 3
                  ? 'hover:bg-green-600 bg-green-800  active:bg-green-200 text-gray-100 text-xl px-7 py-1.5 rounded ml-auto'
                  : 'hidden'
              }
            >
              {step == 4 ? 'Confirm' : 'Suivant'}
            </button>
          </div> */}
        </div>
      </main>
    );
  else
    return (
      <div>
        {/* <ThankYou /> */}
        Thank You
      </div>
    );
};
