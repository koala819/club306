'use client';
import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SessionProvider } from 'next-auth/react';
import { LayoutProps } from './types/Components';

// import SupabaseProvider from './supabase-provider.old';
// import { getSession } from './supabase-server';

export default function RootLayout({
  children,
  title,
  displayNavbar,
  session,
}: LayoutProps) {
  return (
    <html>
      <body>
        <SessionProvider session={session}>
          <div className=" flex flex-col h-screen">
            {displayNavbar || displayNavbar === undefined ? <Navbar /> : null}
            <title>{title}</title>
            <main className="flex-1 ">
              {/* <SupabaseProvider> */}
              {children}
              {/* </SupabaseProvider> */}
            </main>
            <Footer />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
