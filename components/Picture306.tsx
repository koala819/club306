import Image from "next/image";
import carroussel_306_Yellow from '../public/images/carroussel_306_Yellow.jpg';
import carroussel_rassemblement_306 from '../public/images/carroussel_rassemblement_306.jpg';
import carroussel_two_306_white from '../public/images/carroussel_two_306_white.jpg';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/reactIntersectionObserver.module.css';
import { useState, useEffect } from 'react';

export default function Picture306() {
  const images = [carroussel_306_Yellow, carroussel_rassemblement_306, carroussel_two_306_white];
  const [currentIndex, setCurrentIndex] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changeImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(changeImage, 7000);
    return () => clearInterval(intervalId);
  }, [changeImage]);

  const IconScrollDown = () => {
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
              alt='306 car'
              src={images[currentIndex]}
              fill
              sizes='100vw'
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }} />
          <div className='absolute inset-x-0 bottom-0'>
            <IconScrollDown />
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



