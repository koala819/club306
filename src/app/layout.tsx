'use client';
import { StyleProvider } from '@ant-design/cssinjs';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import Providers from '@/components/Providers';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="fr" className="light">
      <body>
        <StyleProvider hashPriority="high">
          <div className=" flex flex-col h-screen">
            <Providers>
              {/* <NewNavbar /> */}
              <Navbar />
              <main className="flex-1 ">{children}</main>
              <Footer />
            </Providers>
          </div>
        </StyleProvider>
      </body>
    </html>
  );
}
