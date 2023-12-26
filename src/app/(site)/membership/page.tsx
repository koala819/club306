'use client';
import { useState } from 'react';
import { Step } from '@/components/membership/Step';
import { Form } from '@/components/membership/Form';

export default function Page() {
  const [currentStep, setStep] = useState<number>(1);
  return (
    <>
      <title>Inscription</title>
      <main className="h-full mb-4 pr-4 pl-4">
        <div className="h-full lg:grid lg:grid-cols-12">
          <Step step={currentStep} />
          <Form step={currentStep} setStep={setStep} />
        </div>
      </main>
    </>
  );
}
