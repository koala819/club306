import Side from '@/components/cpanel/Side';
import Top from '@/components/cpanel/Top';
import { Montserrat } from 'next/font/google';
import '@/styles/globals.css';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Providers } from './providers';

const montserrat = Montserrat({ subsets: ['latin'] });

export default async function CustomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html>
      <body className={`${montserrat.className}`}>
        <div className="flex h-screen">
          <Side session={session} />
          <div className="flex flex-col flex-1 overflow-hidden">
            <div className="md:hidden">
              <Top session={session} />
            </div>
            <main className="overflow-y-auto flex-1 mb-4 ">
              <Providers>{children}</Providers>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
