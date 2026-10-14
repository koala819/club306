'use client';
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="light"
        scriptProps={{ type: 'application/json' }}
      >
        <SessionProvider>{children}</SessionProvider>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
