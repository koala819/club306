'use client';
import React, { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useSession } from 'next-auth/react';
import { PersonalInfos } from './PersonalInfos';
import { Garage } from './Garage';
import { Summary } from './Summary';
import { Paypal } from './Paypal';
import { SignIn } from './SignIn';
import { ThankYou } from './ThankYou';
import { MailPwd, PersonalInfo, Vehicles } from '@/app/models';

export const Form = ({ step, setStep }: { step: number; setStep: any }) => {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [vehicles, setVehicles] = useState<Vehicles[]>([]);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    first_name: '',
    last_name: '',
    address: '',
    zip_code: '',
    town: '',
    birth_date: new Date(),
    phone: '',
    checkCotisation: false,
    checkCertificateHonour: false,
    checkEngagementClub: false,
    checkPrivacyPolicy: false,
  });
  const [mailInfo, setMailInfo] = useState<MailPwd>({
    email: '',
    pwd: '',
  });
  useEffect(() => {
    if (session !== undefined && session !== null) {
      setIsLoading(false);
      setStep(6);
    } else if (session === null) {
      setIsLoading(false);
      setStep(1);
    }
  }, [session]);

  return (
    <main
      aria-label="Main"
      className="flex items-center justify-center lg:col-span-7 lg:px-8 xl:col-span-6"
    >
      {isLoading ? (
        <div className="flex flex-col justify-center items-center space-y-2 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <ClipLoader
            loading={true}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <p>Chargement</p>
        </div>
      ) : (
        <div>
          <div className="relative block lg:hidden">
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
          {step == 4 && (
            <Paypal setStep={setStep} personalInfo={personalInfo} />
          )}
          {step == 5 && (
            <SignIn
              setStep={setStep}
              setMailInfo={setMailInfo}
              personalInfo={personalInfo}
              vehicles={vehicles}
            />
          )}
          {step >= 6 && (
            <ThankYou
              personalInfo={personalInfo}
              vehicles={vehicles}
              mailInfo={mailInfo}
            />
          )}
        </div>
      )}
    </main>
  );
};
