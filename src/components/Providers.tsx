'use client';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Providers = (props: Props) => {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class">{props.children}</ThemeProvider>
    </SessionProvider>
  );
};

export default Providers;
