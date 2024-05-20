'use client'

import styles from '@/src/styles/reactIntersectionObserver.module.css'
import { AiFillStar } from 'react-icons/ai'
import { useInView } from 'react-intersection-observer'

import Link from 'next/link'

export const Adhesion = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  })
  const renderContent = () => {
    return (
      <section className="container w-full  bg-[#D7DEED] dark:bg-bg-dark dark:border-2 dark:border-principal-dark border-0 h-32 sm:flex justify-center items-center mx-auto dark:rounded-lg ">
        <div className="flex justify-center lg:w-2/3 sm:w-2/3 items-center">
          <span className="lg:text-3xl text-xl font-extrabold dark:text-principal-dark text-center md:text-left my-2 md:my-0 ">
            Rejoignez nous en 30 secondes
          </span>
        </div>
        <div className="w-full sm:w-1/3 lg:w-1/3 md:w-1/2 flex justify-center items-center">
          <Link href="/membership">
            <button className="flex items-center px-4 py-2 text-white dark:text-bg-dark bg-principal-light dark:bg-principal-dark rounded-lg duration-150 active:shadow-lg">
              <AiFillStar size={22} className="mr-2" />
              Adhérer
            </button>
          </Link>
        </div>
      </section>
    )
  }

  return (
    <div
      className={
        inView ? `${styles.slider} ${styles.slider__zoom}` : `${styles.slider}`
      }
      ref={ref}
    >
      {renderContent()}
    </div>
  )
}
