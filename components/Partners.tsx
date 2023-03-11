import Slider from '../components/Slider';

export default function Home() {
  return (
    <>
      <main className='flex flex-col content-center justify-center'>
        <h1 className="font-bold text-[32px] text-center mt-[50px] mb-[50px]">
          Nos Partenaires
        </h1>
        <div className='w-full flex justify-center'>
        <div className='w-3/4'>
          <Slider />
        </div>
        </div>
      </main>
    </>
  );
}
