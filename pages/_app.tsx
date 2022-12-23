import '../styles/globals.css';
import Link from 'next/link';
import {PrismicProvider} from '@prismicio/react';
import {PrismicPreview} from '@prismicio/next';
import {linkResolver, repositoryName} from '../prismicio';
import { SessionProvider } from "next-auth/react";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'

export default function App({Component, pageProps}) {
  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())

    return (
        <SessionProvider session={pageProps.session}>
            <PrismicProvider
                linkResolver={linkResolver}
                internalLinkComponent={({href, ...props}) => (
                  <LocalizationProvider dateAdapter={AdapterMoment}>
                    <Link href={href}>
                        <a {...props} />
                    </Link>
                  </LocalizationProvider>
                )}
            >
                <PrismicPreview repositoryName={repositoryName}>
                  <SessionContextProvider
                    supabaseClient={supabaseClient}
                    initialSession={pageProps.initialSession}
                  >
                    <Component {...pageProps} />
                  </SessionContextProvider>
                </PrismicPreview>
            </PrismicProvider>
        </SessionProvider>
    );
}
