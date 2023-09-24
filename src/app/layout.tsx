import { ReactNode } from 'react';
import { Montserrat } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import '@/styles/globals.css';
import AuthProvider from '@/components/AuthProvider';

const montserrat = Montserrat({ subsets: ['latin'] });

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const accessToken = session?.access_token || '';
  return (
    <html lang="fr" className="light" suppressHydrationWarning>
      <body className={`${montserrat.className}`}>
        <div className="min-h-screen min-w-screen">
          <div className=" flex flex-col h-screen">
            {session ? (
              <Navbar withMember={true} />
            ) : (
              <Navbar withMember={false} />
            )}
            <AuthProvider accessToken={accessToken}>
              <main className="flex-1 ">{children}</main>
            </AuthProvider>

            {session ? (
              <Footer withMember={true} />
            ) : (
              <Footer withMember={false} />
            )}
          </div>
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
