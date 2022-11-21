import styles from '../styles/stepper.module.css';
import { useState } from 'react';
import { TiTick } from 'react-icons/ti';
import MembershipContent1 from './MembershipContent1';
import MembershipContent2 from './MembershipContent2';

export default function Stepper() {
  const steps = ['Vos Informations', 'Creation du Compte', 'Paiement', 'Récapitulatif'];
  const [currentStep, setCurrentStep] = useState(1);
  const [numberStep, setNumberStep] = useState(1)

  function nextStep () {
    setCurrentStep((prev) => prev + 1)
  }
console.log('Stepper numberStep',numberStep)
console.log('Stepper setNumberStep',setNumberStep)
  return (
    <>
      <div className='flex justify-between'>
        {
          steps.map((step, i) => (
            <div key={i}
                 className={`${styles.stepItem} 
            ${currentStep === i + 1 && styles.active}
            ${i + 1 < currentStep && styles.complete}`}
            >
              <div className={styles.step}>
                {i + 1 < currentStep  ? <TiTick size={24} /> : i + 1}
              </div>
              <p className='text-gray-500'>{step}</p>
            </div>
          ))
        }
      </div>

      {numberStep === 1 && <MembershipContent1 onClick={nextStep} updateNumberStep={setNumberStep} />}
      {numberStep === 2 && <MembershipContent2 onClick={nextStep} updateNumberStep={setNumberStep} />}
      {numberStep === 3 && console.log("Faux")}
    </>
  );
}