import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import Side from './components/Side';
import Top from './components/Top';
// import RootLayout from '@/app/layout';

// import NoSession from '@/components/cpanel/NoSession';
import AuthProvider from '@/components/AuthProvider';

const montserrat = Montserrat({ subsets: ['latin'] });

export default async function CustomLayout({ children }: LayoutProps) {
  // const supabase = createServerComponentClient({ cookies });

  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();

  // const accessToken = session?.access_token || '';

  // if (!session) {
  //   return (
  //     <RootLayout hideNavbar hideFooter>
  //       <></>
  //     </RootLayout>
  //   );
  // }
  return (
    <html>
      <body
        className={`${montserrat.className} flex h-screen min-h-screen min-w-screen`}
      >
        <Side />
        <div className="flex flex-col flex-1">
          <Top />
          {/* <AuthProvider accessToken={accessToken}> */}
          <main className="flex-1 ">{children}</main>
          {/* </AuthProvider> */}
        </div>
      </body>
    </html>
  );
}

interface LayoutProps {
  children: React.ReactNode;
  hideNavbar?: boolean;
  hideFooter?: boolean;
}
