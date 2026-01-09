import { draftMode } from 'next/headers'

import { Roboto } from 'next/font/google'

import SiteLayout from '@/src/components/SiteLayout'
import { VisualEditingWrapper } from '@/src/components/VisualEditingWrapper'
import { SessionProviderWrapper } from '@/src/components/SessionProviderWrapper'
import { ThemeScript } from '@/src/components/ThemeScript'

import '@/src/styles/globals.css'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isEnabled: isDraftMode } = await draftMode()

  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${roboto.className}`}>
        <ThemeScript />
        <SessionProviderWrapper>
          <SiteLayout>
            {children}
            {isDraftMode && <VisualEditingWrapper />}
          </SiteLayout>
        </SessionProviderWrapper>
      </body>
    </html>
  )
}
