'use client';
import SupabaseProvider from '@/app/supabase-context';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

export default function Provider({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  return (
    <SupabaseProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        // disableTransitionOnChange
      >
        <SessionProvider>{children}</SessionProvider>
      </ThemeProvider>
    </SupabaseProvider>
  );
}
