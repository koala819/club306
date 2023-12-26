'use client';
import { Montserrat } from 'next/font/google';
import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import SiteLayout from '@/components/SiteLayout';

const montserrat = Montserrat({ subsets: ['latin'] });

export const revalidate = 0;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="light" suppressHydrationWarning>
      <body className={`${montserrat.className}`}>
        <SessionProvider>
          <SiteLayout>{children}</SiteLayout>
        </SessionProvider>
      </body>
    </html>
  );
}
