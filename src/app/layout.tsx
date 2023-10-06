import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import AuthProvider from '@/components/AuthProvider';

export const revalidate = 0;

export default async function DashboardLayout({
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
    <html>
      <body>
        <AuthProvider accessToken={accessToken}>{children}</AuthProvider>
      </body>
    </html>
  );
}
