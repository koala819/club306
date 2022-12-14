import '../styles/globals.css';
import Link from 'next/link';
import {PrismicProvider} from '@prismicio/react';
import {PrismicPreview} from '@prismicio/next';
import {linkResolver, repositoryName} from '../prismicio';
import { SessionProvider } from "next-auth/react";

export default function App({Component, pageProps}: any) {
    return (
        <SessionProvider session={pageProps.session}>
            <PrismicProvider
                linkResolver={linkResolver}
                internalLinkComponent={({href, ...props}) => (
                    <Link href={href}>
                        <a {...props} />
                    </Link>
                )}
            >
                <PrismicPreview repositoryName={repositoryName}>
                    <Component {...pageProps} />
                </PrismicPreview>
            </PrismicProvider>
        </SessionProvider>
    );
}
