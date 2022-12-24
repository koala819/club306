import {Layout} from '../components/Layout'
import Image from 'next/image';

export default function PageName() {
    return (
      <Layout title="Evenements à venir">
          <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto flex flex-wrap">
                  <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                          <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div
                        className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#3B578E] text-white relative z-10 title-font font-medium text-sm">04
                      </div>
                      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                          <div
                            className="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
                              <Image
                                alt='picture user'
                                height={100}
                                width={100}
                                className='rounded-full'
                                src='https://scontent-cdt1-1.xx.fbcdn.net/v/t39.30808-1/243742892_1911227272391511_2574982284899304928_n.png?stp=dst-png_p148x148&_nc_cat=103&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=6zsKEm3QHD4AX-7961p&_nc_ht=scontent-cdt1-1.xx&oh=00_AfABYzTtQxlX3XWl0Xy8IrQdjCdzxz2-sZUCWj2kXcAcrQ&oe=63ACC4BA'
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto'
                                }} />
                          </div>
                          <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Youngtimers festival</h2>
                              <p className="leading-relaxed"> Le circuit de Linas-Montlhéry compte donner un peu plus de
                                  place encore à ces voitures et aux incroyables passionnés qui les bichonnes.
                                  Deux jours de fêtes le 15 et 16 avril 2023 avec du son des expos ! Les voitures d’après
                                  1990 vont donner de la voix sur le circuit 3,405 km tandis que les plus anciennes
                                  rivaliseront sur les expos et participeront aux parades.</p>
                          </div>
                      </div>
                  </div>
                  <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                          <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div
                        className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#3B578E] text-white relative z-10 title-font font-medium text-sm">08
                      </div>
                      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                          <div
                            className="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
                              <Image
                                alt='picture user'
                                height={100}
                                width={100}
                                className='rounded-full'
                                src='https://www.thebigcarshow.com/wp-content/themes/bigcarshow/images/logo-thebigcarshow.png'
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto'
                                }} />
                          </div>
                          <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Big Car Show</h2>
                              <p className="leading-relaxed">Le 19 et 20 août 2023 venez participer à cet évènement sur le circuit Bugatti au Mans.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </Layout>
    )
}