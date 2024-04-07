'use client'

import { useState } from 'react'

import { Form } from '@/components/membership/Form'
import { Step } from '@/components/membership/Step'

export default function Membership() {
  const [currentStep, setStep] = useState<number>(1)
  return (
    <main className="h-full mb-4 pr-4 pl-4">
      <div className="h-full lg:grid lg:grid-cols-12">
        <Step step={currentStep} />
        <Form step={currentStep} setStep={setStep} />
      </div>
    </main>
  )
}
