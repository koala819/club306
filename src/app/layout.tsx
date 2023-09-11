'use client';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import '@/app/globals.css';
import Provider from '@/components/Provider';
import { ReactNode } from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({
  children,
  hideNavbar = false,
  hideFooter = false,
}: LayoutProps) {
  // const session = getServerSession(authOptions);

  return (
    <html lang="fr" className="light" suppressHydrationWarning>
      <body className={`${montserrat.className}  min-h-screen min-w-screen`}>
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

interface LayoutProps {
  children: ReactNode;
  hideNavbar?: boolean;
  hideFooter?: boolean;
}
