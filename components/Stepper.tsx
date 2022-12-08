import styles from '../styles/stepper.module.css';
import { useState } from 'react';
import { TiTick } from 'react-icons/ti';
import MembershipContent1 from './MembershipContent1';
import MembershipContent2 from './MembershipContent2';
import MembershipContent3 from './MembershipContent3';
import MembershipContent4 from './MembershipContent4';

export default function Stepper() {
  const steps = ['Vos Informations', 'Paiement', 'Creation du Compte', 'Récapitulatif'];
  const [numberStep, setNumberStep] = useState(1);
  const [member, setMember] = useState({});

  function nextStep(nb:number) {
    setNumberStep(nb);
  }

  console.log('Stepper numberStep', numberStep);
  return (
    <>
      <div className=''>
        <div className='flex justify-between'>
        {
          steps.map((step, i) => (
            <div key={i}
                 className={`${styles.stepItem} 
            ${numberStep === i + 1 && styles.active}
            ${i + 1 < numberStep && styles.complete}`}
            >
              <div className={styles.step}>
                {i + 1 < numberStep ? <TiTick size={24} /> : i + 1}
              </div>
              <p className='text-white'>{step}</p>
            </div>
          ))
        }
      </div>

      {numberStep === 1 && <MembershipContent1 onClick={nextStep} member={setMember} />}
      {numberStep === 2 && <MembershipContent2 onClick={nextStep} member={member} />}
      {numberStep === 3 && <MembershipContent3 onClick={nextStep} member={member} />}
      {numberStep >= 4 && <MembershipContent4 onClick={nextStep} member={member} />}
      </div>

    </>
  );
}