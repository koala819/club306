'use client';
// import React from 'react';
// import { Button } from 'antd';
import { AiFillStar } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import styles from './reactIntersectionObserver.module.css';

export const Adhesion = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });
  const renderContent = () => {
    return (
      <section className="container w-screen bg-[#D7DEED] border-0 h-32 sm:flex justify-center items-center mx-auto dark:bg-gray-800">
        <div className="flex justify-center lg:w-2/3 sm:w-2/3 items-center">
          <span className="lg:text-3xl text-xl font-extrabold ">
            Rejoignez nous en 30 secondes
          </span>
        </div>
        <div className="w-full sm:w-1/3 lg:w-1/3 md:w-1/2 flex justify-center items-center">
          {/* <Button
            type="primary"
            className="success"
            size="large"
            href="/membership"
            icon={<AiFillStar size={22} />}
          >
            Adhérer
          </Button> */}
        </div>
      </section>
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
