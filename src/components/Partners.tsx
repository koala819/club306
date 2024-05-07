'use client'

import styles from '@/styles/reactIntersectionObserver.module.css'
import { useSession } from 'next-auth/react'
import { useMemo } from 'react'
import { useInView } from 'react-intersection-observer'

import { Slider } from './Slider'

export const Partners = () => {
  const { data: dataSession } = useSession()
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  })

  const session = useMemo(() => {
    return dataSession !== undefined
  }, [dataSession])

  const renderContent = () => {
    return (
      <div className="flex items-center justify-center h-full dark:bg-bg-dark">
        <main className="flex flex-col content-center justify-center">
          <h2 className="font-bold text-[32px] text-center">Nos Partenaires</h2>
          <div className="w-full flex justify-center">
            <div className="w-full lg:w-3/4">
              <Slider session={session} />
            </div>
          </div>
        </main>
      </div>
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
