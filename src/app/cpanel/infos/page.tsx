'use client'

import { useSession } from 'next-auth/react'
import { useMemo } from 'react'

import Infos from '@/src/components/cpanel/Infos'
import WaitSession from '@/src/components/cpanel/WaitSession'

export default function Page() {
  const { data: dataSession } = useSession()

  const session = useMemo(() => {
    return dataSession !== undefined
  }, [dataSession])

  if (!session) {
    return <WaitSession />
  }

  return <Infos userMail={dataSession?.user?.email || ''} />
}
