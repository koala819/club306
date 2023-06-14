'use client';
import React, { useState } from 'react';
import { PersonalInfos } from './PersonalInfos';
import { Garage } from './Garage';
import { Summary } from './Summary';
import { Paypal } from './Paypal';
import { SignIn } from './SignIn';
import { MailPwd, PersonalInfo, Vehicles } from '@/app/models';

export const Form = ({ step, setStep }: { step: number; setStep: any }) => {
  console.log('step', step);
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

  if (step <= 6)
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
          {step == 4 && (
            <Paypal setStep={setStep} personalInfo={personalInfo} />
          )}
          {step == 5 && <SignIn setStep={setStep} setMailInfo={setMailInfo} />}
        </div>
      </main>
    );
  else
    return (
      <div className="flex w-full lg:flex lg:items-center lg:justify-center lg:col-span-7 lg:px-8 xl:col-span-6 bg-green-200">
        {/* <ThankYou /> */}
        <p>Thank You</p>
        <p>You have these data to record in db</p>
        <br />
        <br />
        <p>{mailInfo.email}</p>
        <p>{mailInfo.pwd}</p>
      </div>
    );
};
