'use client';
import { useState } from 'react';
import { PersonalInfos } from './PersonalInfos';
import { Garage } from './Garage';
import { Summary } from './Summary';
import { PersonalInfo, Vehicles } from '@/app/models';

export const Form = ({ step, setStep }: { step: number; setStep: any }) => {
  const [vehicles, setVehicles] = useState<Vehicles[]>([]);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
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
