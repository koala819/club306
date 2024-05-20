'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useMemo, useState } from 'react'

import { Homepage } from '@/src/components/cpanel/Homepage'
import Paiement from '@/src/components/cpanel/Paiement'
import WaitSession from '@/src/components/cpanel/WaitSession'

import { confirmMemberShip } from '@/src/lib/supabase'

export default function Page() {
  const { data: dataSession } = useSession()
  const [isMemberConfirmed, setIsMemberConfirmed] = useState(true)

  const session = useMemo(() => {
    return dataSession !== undefined
  }, [dataSession])

  useEffect(() => {
    async function checkMembership() {
      if (dataSession) {
        const confirmed = await confirmMemberShip(dataSession?.user?.email)
        setIsMemberConfirmed(confirmed)
      }
    }

    checkMembership()
  }, [dataSession])

  if (!isMemberConfirmed) {
    return <Paiement />
  }

  return (
    <>
      {!session ? (
        <WaitSession />
      ) : (
        <Homepage userMail={dataSession?.user?.email as string} />
      )}
    </>
  )
}
