'use client'

import { SessionProvider } from 'next-auth/react'

import SiteLayout from '@/src/components/SiteLayout'

export default function SiteRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionProvider>
      <SiteLayout>{children}</SiteLayout>
    </SessionProvider>
  )
}
