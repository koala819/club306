'use client'

import { SessionProvider } from 'next-auth/react'

import { Roboto } from 'next/font/google'

import SiteLayout from '@/src/components/SiteLayout'

import '@/src/styles/globals.css'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="light" suppressHydrationWarning>
      <body className={`${roboto.className}`}>
        <SessionProvider>
          <SiteLayout>{children}</SiteLayout>
        </SessionProvider>
      </body>
    </html>
  )
}
