import Image from 'next/image';
import React from 'react';
import headerBackground from '../public/images/fondHeader.jpg';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/Presentation.module.css';

export default function Picture306() {
  const MouseScrollDown = () => {
    return (
      <div className={styles.mouse_scroll}>
        <div>
          <span className={`${styles.m_scroll_arrows} ${styles.unu} `}></span>
          <span className={`${styles.m_scroll_arrows} ${styles.doi} `}></span>
          <span className={`${styles.m_scroll_arrows} ${styles.trei} `}></span>
        </div>
      </div>
    );
  };
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
    initialInView: true
  });
  const renderContent = () => {
    return (
      <div className='relative h-full w-full'>
        <div className='lg:h-screen overflow-hidden sm:h-1/2'>
          <Image
            alt='306 cars'
            src={headerBackground}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
          <div className='absolute inset-x-0 bottom-0'>
            <MouseScrollDown />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={inView ? `${styles.slider} ${styles.slider__zoom}` : `${styles.slider}`} ref={ref}>
      {renderContent()}
    </div>
  );
}



