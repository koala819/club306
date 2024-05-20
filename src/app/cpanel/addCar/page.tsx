'use client'

import { useSession } from 'next-auth/react'
import { useMemo } from 'react'

import AddCar from '@/src/components/cpanel/AddCar'
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
        <AddCar userMail={dataSession?.user?.email || ''} />
      )}
    </>
  )
}
