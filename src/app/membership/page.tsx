'use client';
import { Stepper } from './Stepper';

export default function Membership() {
  // return (
  //   <div className='container mx-auto px-5  md:flex-row flex-col items-center'>
  //     <Stepper />
  //   </div>
  // );
  return (
    <div
      className='flex-1 h-full overflow-y-auto'
      // className='container mx-auto px-5  md:flex-row flex-col items-center'
    >
      <Stepper />
    </div>
  );
}
