import Image from 'next/image';
import headerBackground from '../public/images/fondHeader.jpg';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/reactIntersectionObserver.module.css';

export default function Picture306() {
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
          <Image src={headerBackground}
                 alt='306 car'
                 loading='lazy'
                 layout='fill'
                 objectFit='cover'
                 objectPosition='center' />
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



