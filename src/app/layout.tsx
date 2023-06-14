'use client';
import './globals.css';
import { StyleProvider } from '@ant-design/cssinjs';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SessionProvider } from 'next-auth/react';
import { LayoutProps } from './types/Components';

// import SupabaseProvider from './supabase-provider.old';
// import { getSession } from './supabase-server';

export default function RootLayout({
  children,
  displayNavbar,
  session,
}: LayoutProps) {
  return (
    <html>
      <body>
        <SessionProvider session={session}>
          <StyleProvider hashPriority="high">
            <div className=" flex flex-col h-screen">
              {displayNavbar || displayNavbar === undefined ? <Navbar /> : null}

              <main className="flex-1 ">
                {/* <SupabaseProvider> */}
                {children}
                {/* </SupabaseProvider> */}
              </main>
              <Footer />
            </div>
          </StyleProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
