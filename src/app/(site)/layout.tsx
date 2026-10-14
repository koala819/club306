'use client'

import { SessionProvider } from 'next-auth/react'

import { Roboto } from 'next/font/google'

import SiteLayout from '@/src/components/SiteLayout'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function SiteRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={roboto.className}>
      <SessionProvider>
        <SiteLayout>{children}</SiteLayout>
      </SessionProvider>
    </div>
  )
}
