import Navbar from './Navbar';
import { LayoutProps } from '../types/Components';
import Footer from './Footer';
import { useElementSize } from 'usehooks-ts';

export function Layout({ children, title, displayNavbar }: LayoutProps) {
  const [divRef, { height }] = useElementSize()
  console.log('height Layout',height)

  return (
    <div className='min-h-screen flex flex-col'>
      {(displayNavbar || displayNavbar === undefined) ? <Navbar /> : null}
      <title>{title}</title>
      <main ref={divRef} id="mainDiv" className="flex-1"
            style={{height:`${height}px`}}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
}