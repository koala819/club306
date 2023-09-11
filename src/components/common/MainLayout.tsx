'use client';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import '@/app/globals.css';
import Provider from '@/components/Provider';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  hideNavbar?: boolean;
  hideFooter?: boolean;
}

export default function MainLayout({
  children,
  hideNavbar = false,
  hideFooter = false,
}: LayoutProps) {
  return (
    <html lang="fr" className="light" suppressHydrationWarning>
      <body>
        <div className=" flex flex-col h-screen">
          <Provider>
            {!hideNavbar && <Navbar />}
            <main className="flex-1 ">{children}</main>
            {!hideFooter && <Footer />}
          </Provider>
        </div>
      </body>
    </html>
  );
}
