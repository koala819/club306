import '../styles/globals.css';
import Link from 'next/link';
import {PrismicProvider} from '@prismicio/react';
import {PrismicPreview} from '@prismicio/next';
import {linkResolver, repositoryName} from '../prismicio';
import type {AppProps} from 'next/app'
import {Shield} from '../components/routes/Shield'

export default function App({Component, pageProps}: AppProps) {
    return (
        <Shield>
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
        </Shield>
    );
}
