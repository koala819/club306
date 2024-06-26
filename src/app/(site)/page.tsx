'use client'

import { useSession } from 'next-auth/react'
import { useMemo } from 'react'

import { Homepage } from '@/src/components/Homepage'

export default function Page() {
  const { data: dataSession } = useSession()

  const session = useMemo(() => {
    return dataSession !== undefined && dataSession !== null
  }, [dataSession])

  return (
    <div>
      <title>Home</title>
      <meta name="description" content="My homepage" />
      <Homepage />
    </div>
  )
}
