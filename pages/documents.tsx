import {Layout} from '../components/Layout';
import articles_presse from '../public/images/documents_articles_presse.jpg';
import catalogue from '../public/images/documents_catalogue.PNG';
import magazine from '../public/images/documents_magazine.PNG';
import publicite from '../public/images/pub.jpg';
import Image from 'next/image';
import Link from 'next/link';

export default function PageName() {
    return (
      <Layout title="Documents">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="lg:w-2/3 mx-auto">

              <div className="flex flex-wrap -mx-2">

                <div className="px-2 w-1/2">
                  <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative ">
                    <Image alt="articles de presse"
                         className="w-full h-full absolute inset-0 opacity-20 hover:bg-green-800"
                         src={articles_presse}
                    />
                      <div className="text-center relative w-full">
                        <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Articles de presse</h2>
                        <Link className="mt-3 text-indigo-500 inline-flex items-center" href='articlesPress'>
                          Découvrir
                          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                               strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                      </div>
                  </div>
                </div>

                <div className="px-2 w-1/2">
                  <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                    <Image alt="magazine"
                           className="w-full h-full opacity-25 absolute inset-0"
                           src={magazine}
                    />
                    <div className="text-center relative z-10 w-full">
                      <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Magazines</h2>
                      <Link className="mt-3 text-indigo-500 inline-flex items-center" href='magazines'>
                        Découvrir
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                             strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>

              <div className="flex flex-wrap -mx-2 mt-4">

                <div className="px-2 w-1/2">
                  <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                    <Image alt="publicite"
                           className="w-full h-full opacity-25 absolute inset-0"
                           src={publicite}
                    />
                    <div className="text-center relative z-10 w-full">
                      <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Publicités</h2>
                      <Link className="mt-3 text-indigo-500 inline-flex items-center" href='advertisings'>
                        Découvrir
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                             strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="px-2 w-1/2">
                  <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                    <Image alt="catalogue"
                           className="w-full h-full opacity-25 absolute inset-0"
                           src={catalogue}
                    />
                    <div className="text-center relative z-10 w-full">
                      <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Catalogues</h2>
                      <Link className="mt-3 text-indigo-500 inline-flex items-center" href='contactatalogues'>
                        Découvrir
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                             strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </Layout>)
}