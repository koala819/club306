'use client';
import { SessionProvider } from 'next-auth/react';
import { StyleProvider } from '@ant-design/cssinjs';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { LayoutProps } from './types/Components';
import './globals.css';

export default function RootLayout({ children, session }: LayoutProps) {
  return (
    <html>
      <body>
        <SessionProvider session={session}>
          <StyleProvider hashPriority="high">
            <div className=" flex flex-col h-screen">
              <Navbar />
              <main className="flex-1 ">{children}</main>
              <Footer />
            </div>
          </StyleProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
