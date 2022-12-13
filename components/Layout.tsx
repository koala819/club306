import Navbar from "./Navbar";

import {LayoutProps} from '../types/Components'
import Footer from './Footer'

export function Layout({children, title}: LayoutProps) {
    return (
      <div className="min-h-screen flex flex-col">
          <header className="bg-blue-200"><Navbar /></header>
          <title>{title}</title>
          <main className="flex-1 bg-green-300">
            {/*<div className="h-full">{children}</div>*/}
            <div className="flex">
              <div className=" h-full w-1/2 bg-yellow-200">left</div>
              <div className=" h-full w-1/2 bg-red-400">right</div>
            </div>

          </main>
          <footer className="bg-red-400"
                  style={{ zIndex: 10 }}><Footer/></footer>
      </div>
        /*<>
            <Navbar />
            <title>{title}</title>
            <link rel="icon" href="/public/favicon.ico"/>
            <div className="min-h-screen">
                <main>{children}</main>
            </div>
            <Footer/>
        </>*/
    )
}