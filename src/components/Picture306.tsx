'use client';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import styles from '@/styles/keen.module.css';
import carroussel_306_Yellow from '../../public/images/carroussel_306_Yellow.jpg';
import carroussel_rassemblement_306 from '../../public/images/carroussel_rassemblement_306.jpg';
import carroussel_rasso_yt from '../../public/images/carroussel_rassemblement_Young_Timer_2023.jpg';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import loader from '../../public/images/loader.svg';
import stylesInter from '@/styles/reactIntersectionObserver.module.css';
import { useInView } from 'react-intersection-observer';

export function Picture306() {
  const [loaded, setLoaded] = useState<boolean[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: carroussel_rasso_yt,
      alt: 'logo Club 306',
    },
    {
      src: carroussel_306_Yellow,
      alt: "photo d'une 306 jaune au premier plan et derrière il y a une 306 BV6 blanche",
    },
    { src: carroussel_rassemblement_306, alt: "photo d'un rasso avec 18 306" },
  ];

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

  const [refKeen] = useKeenSlider<HTMLDivElement>(
    {
      animationEnded(s) {
        setCurrentSlide(s.track.details.rel);
      },
      loop: true,
      initial: 0,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 7000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  useEffect(() => {
    const new_loaded = [...loaded];
    new_loaded[currentSlide] = true;
    setLoaded(new_loaded);
  }, [currentSlide]);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });
  const renderContent = () => {
    return (
      <div ref={refKeen} className="keen-slider h-full">
        {images.map((picture, idx) => (
          <div
            key={idx}
            className={`keen-slider__slide lazy__slide`}
            style={{ height: '85vh' }}
          >
            <div className="flex justify-center items-center w-full h-full bg-blue-300">
              <div
                className={` ${
                  !loaded[idx] ? 'w-1/12 h-1/12' : 'w-full h-full'
                }`}
              >
                <Image
                  alt={picture.alt}
                  height={2000}
                  width={2000}
                  src={loaded[idx] ? picture.src : loader}
                  property="priority"
                  className="object-cover object-center w-full h-full"
                />
                <div className="absolute inset-x-0 bottom-0">
                  <IconScrollDown />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div
      className={
        inView
          ? `${stylesInter.slider} ${stylesInter.slider__zoom}`
          : `${stylesInter.slider}`
      }
      ref={ref}
    >
      {renderContent()}
    </div>
  );
}
