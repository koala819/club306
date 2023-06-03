'use client';
import { Slider } from './Slider';

export const Partners = () => {
  return (
    <div className='flex items-center justify-center h-full'>
      <main className='flex flex-col content-center justify-center'>
        <h1 className='font-bold text-[32px] text-center'>Nos Partenaires</h1>
        <div className='w-full flex justify-center'>
          <div className='w-3/4'>
            <Slider />
          </div>
        </div>
      </main>
    </div>
  );
};
