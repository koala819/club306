import styles from '../styles/stepper.module.css';
import { useState } from 'react';
import { TiTick} from 'react-icons/ti';

export default function Stepper() {
  const steps = ['Vos Informations', 'Creation du Compte', 'Paiement', 'Récapitulatif'];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false)

  return (
    <>
      <div className='flex justify-between'>
        {
          steps.map((step, i) => (
            <div key={i}
                 className={`${styles.stepItem } 
            ${currentStep === i + 1 && styles.active}
            ${(i + 1 < currentStep || complete) && styles.complete}`}
            >
              <div className={styles.step}>
                {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1 }
              </div>
              <p className='text-gray-500'>{step}</p>
            </div>
          ))
        }
      </div>
      {
        !complete && <button
          className="btn"
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1)
          }}
        >
          {currentStep === steps.length ? 'Terminer' : 'Suivant'}
        </button>
      }
    </>
  );
}