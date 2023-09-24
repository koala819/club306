'use client';
import { Slider } from './Slider';
import styles from '@/styles/reactIntersectionObserver.module.css';
import { useInView } from 'react-intersection-observer';

export const Partners = ({ session }: any) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });
  const renderContent = () => {
    return (
      <div className="flex items-center justify-center h-full">
        <main className="flex flex-col content-center justify-center">
          <h1 className="font-bold text-[32px] text-center">Nos Partenaires</h1>
          <div className="w-full flex justify-center">
            <div className="w-3/4">
              <Slider session={session} />
            </div>
          </div>
        </main>
      </div>
    );
  };

  return (
    <div
      className={
        inView ? `${styles.slider} ${styles.slider__zoom}` : `${styles.slider}`
      }
      ref={ref}
    >
      {renderContent()}
    </div>
  );
};
