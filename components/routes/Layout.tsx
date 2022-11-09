import Head from 'next/head'
import { LayoutProps } from '../../types/Components'
import Navbar from '../Navbar'

export function Layout({ children, title }: LayoutProps) {
    return (
        <>
            <Head>
                <title>NextShield | {title}</title>
                <meta name="description" content="NextShield Example with Firebase" />
                <link rel="icon" href="/public/favicon.ico" />
            </Head>

            <Navbar />
            <div className="center">
                <main>{children}</main>
            </div>
        </>
    )
}