'use client';
import { Roboto  } from 'next/font/google';
import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import SiteLayout from '@/components/SiteLayout';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const revalidate = 0;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="light" suppressHydrationWarning>
      <body className={`${roboto.className}`}>
        <SessionProvider>
          <SiteLayout>{children}</SiteLayout>
        </SessionProvider>
      </body>
    </html>
  );
}
