'use client';
import { useState } from 'react';
import { Step } from './Step';
import { Form } from './Form';

export default function Page() {
  const [step, setStep] = useState(5);

  return (
    <>
      <title>Inscription</title>
      <main className="h-full mb-4 pr-4 pl-4">
        <div className="h-full lg:grid lg:grid-cols-12">
          <Step step={step} />

          <Form step={step} setStep={setStep} />
        </div>
      </main>
    </>
  );
}
