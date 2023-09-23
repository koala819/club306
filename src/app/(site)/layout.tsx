import { Montserrat } from 'next/font/google';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import '@/styles/globals.css';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import AuthProvider from '@/components/AuthProvider';

const montserrat = Montserrat({ subsets: ['latin'] });

export default async function RootLayout({
  children,
  hideNavbar = false,
  hideFooter = false,
}: LayoutProps) {
  // const supabase = createServerComponentClient({ cookies });

  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();

  // const accessToken = session?.access_token || '';

  return (
    <html lang="fr" className="light" suppressHydrationWarning>
      <body
        className={`${montserrat.className} flex flex-col h-screen min-h-screen min-w-screen`}
      >
        {/* {!hideNavbar && session ? (
          <Navbar withMember={true} />
        ) : (
          <Navbar withMember={false} />
        )} */}
        {!hideNavbar ? (
          <Navbar withMember={true} />
        ) : (
          <Navbar withMember={false} />
        )}
        {/* <AuthProvider accessToken={accessToken}> */}
        <main className="flex-1 ">{children}</main>
        {/* </AuthProvider> */}
        {/* {!hideFooter && session ? (
          <Footer withMember={true} />
        ) : (
          <Footer withMember={false} />
        )} */}
        {!hideFooter ? (
          <Footer withMember={true} />
        ) : (
          <Footer withMember={false} />
        )}
      </body>
    </html>
  );
}

interface LayoutProps {
  children: React.ReactNode;
  hideNavbar?: boolean;
  hideFooter?: boolean;
}
