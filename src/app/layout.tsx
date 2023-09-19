import { ReactNode } from 'react';
import { Montserrat } from 'next/font/google';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import '@/styles/globals.css';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
// import Provider from '@/components/Provider';
import AuthProvider from '@/components/AuthProvider';

const montserrat = Montserrat({ subsets: ['latin'] });

export const revalidate = 0;

export default async function RootLayout({
  children,
  hideNavbar = false,
  hideFooter = false,
}: LayoutProps) {
  // const session = getServerSession(authOptions);
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const accessToken = session?.access_token || '';

  return (
    <html lang="fr" className="light" suppressHydrationWarning>
      <body className={`${montserrat.className}  min-h-screen min-w-screen`}>
        <div className=" flex flex-col h-screen">
          {/* <Provider> */}
          {!hideNavbar && session ? (
            <Navbar withMember={true} />
          ) : (
            <Navbar withMember={false} />
          )}
          <AuthProvider accessToken={accessToken}>
            <main className="flex-1 ">{children}</main>
          </AuthProvider>
          {/* <main className="flex-1 ">{children}</main> */}
          {!hideFooter && session ? (
            <Footer withMember={true} />
          ) : (
            <Footer withMember={false} />
          )}
          {/* </Provider> */}
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
