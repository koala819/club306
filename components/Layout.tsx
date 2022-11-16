import Header from "./Header";

import {LayoutProps} from '../types/Components'
import Footer from './Footer'

export function Layout({children, title}: LayoutProps) {
    return (
        <>
            <Header/>
            <title>{title}</title>
            <link rel="icon" href="/public/favicon.ico"/>
            <div className="min-h-screen">
                <main>{children}</main>
            </div>
            <Footer/>
        </>
    )
}