import type { ReactNode } from 'react'

import { Roboto } from 'next/font/google'

import '@/src/styles/globals.css'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className="light" suppressHydrationWarning>
      <body className={roboto.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
