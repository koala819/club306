import type { ReactNode } from 'react'

import '@/src/styles/globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className="light" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
