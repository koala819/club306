'use client'

import { useSession } from 'next-auth/react'
import { useMemo } from 'react'
import { Toaster } from 'react-hot-toast'

import { Footer } from '@/components/Footer'
import { Navbar306 as Navbar } from '@/components/Navbar'

import { ThemeProvider } from '@/context/ThemeContext'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: dataSession } = useSession()

  const session = useMemo(() => {
    return dataSession !== undefined && dataSession !== null
  }, [dataSession])

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        {session ? <Navbar withMember={true} /> : <Navbar withMember={false} />}
        <main className="flex-1">{children}</main>
        {session ? <Footer withMember={true} /> : <Footer withMember={false} />}
        <Toaster position="top-right" />
      </div>
    </ThemeProvider>
  )
}
