'use client'

import { useSession } from 'next-auth/react'
import { useMemo } from 'react'

import Garage from '@/src/components/cpanel/Garage'
import WaitSession from '@/src/components/cpanel/WaitSession'

export default function Page() {
  const { data: dataSession } = useSession()

  const session = useMemo(() => {
    return dataSession !== undefined
  }, [dataSession])

  return (
    <>
      {!session ? (
        <WaitSession />
      ) : (
        <Garage userMail={dataSession?.user?.email as string} />
      )}
    </>
  )
}
