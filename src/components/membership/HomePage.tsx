'use client';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import { Step } from '@/components/membership/Step';
import { Form } from '@/components/membership/Form';

export default function HomePage({
  step,
  session,
}: {
  step: number;
  session: any;
}) {
  const [currentStep, setStep] = useState(step);

  useEffect(() => {
    if (session) {
      redirect('/memberfinish');
    }
  }, [session]);

  return (
    <>
      <title>Inscription</title>
      <main className="h-full mb-4 pr-4 pl-4">
        <div className="h-full lg:grid lg:grid-cols-12">
          <Step step={currentStep} />
          <Form step={currentStep} setStep={setStep} session={session} />
          {/* <Form step={currentStep} setStep={setStep} /> */}
        </div>
      </main>
    </>
  );
}
