import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';

export default function App({ Component, pageProps }: any) {
  return (
    <SessionProvider session={pageProps.session}>
      <PrismicProvider
        internalLinkComponent={({ href, ...props }) => (
          <Link href={href}>
            <a {...props} />
          </Link>
        )}
      >
        <Component {...pageProps} />
      </PrismicProvider>
    </SessionProvider>
  );
}
