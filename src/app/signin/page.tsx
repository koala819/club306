'use client';
import { useState } from 'react';
import { Step } from './Step';
import { Form } from './Form';
// import { FormData } from '../types/Components';

export default function SigninPage() {
  // const [formData, setFormData] = useState<FormData>({
  //   personalInfo: {
  //     first_name: '',
  //     last_name: '',
  //     address: '',
  //     zip_code: '',
  //     town: '',
  //     birth_date: '',
  //     phone: '',
  //     checkCotisation: false,
  //     checkCertificateHonour: false,
  //     checkEngagementClub: false,
  //     checkPrivacyPolicy: false,
  //   },
  //   garage: [
  //     {
  //       immatriculation: '',
  //       model: '',
  //       color: '',
  //       finition: '',
  //       mine: '',
  //     },
  //   ],
  // });
  const [step, setStep] = useState(1);
  console.log('step in page', step);

  // function updateFormData(info: any) {
  //   console.log('info in updateFormData', info);
  //   if (step == 1) {
  //     setFormData({
  //       ...formData,
  //       // Probably better to add each individual key:value of personalInfo but oh well
  //       personalInfo: info,
  //     });
  //   } else if (step == 2) {
  //     setFormData({
  //       ...formData,
  //       planInfo: info,
  //     });
  //   } else if (step == 3) {
  //     setFormData({
  //       ...formData,
  //       addOnsInfo: info,
  //     });
  //   }
  // }

  // function toggleYearly() {
  //   setFormData({
  //     personalInfo: { ...formData.personalInfo },
  //     planInfo: {
  //       ...formData.planInfo,
  //       timeframe: !formData.planInfo.timeframe,
  //     },
  //     addOnsInfo: { ...formData.addOnsInfo },
  //   });
  // }

  return (
    <>
      <title>Inscription</title>
      <main className="h-full mb-4 pr-4 pl-4">
        <div className="h-full lg:grid lg:grid-cols-12">
          <Step step={step} />

          <Form
            step={step}
            setStep={setStep}
            // formData={formData}
            // updateFormData={updateFormData}
          />
        </div>
      </main>
    </>
  );
}
