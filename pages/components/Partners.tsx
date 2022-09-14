import React from 'react'
import Image from 'next/image'
import picturePartenaire1 from '../../public/images/partenairesAutoDistribution.jpg'
import picturePartenaire2 from '../../public/images/partenairesArtMotoren.jpg'
import picturePartenaire3 from '../../public/images/partenairesOscaro.jpg'
import picturePartenaire4 from '../../public/images/partenairesAventurePeugeot.jpg'

export default function Partners() {
  return (
    <div>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-center pt-6">
        Nos Partenaires
      </h1>
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-20"></div>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <Image
                src={picturePartenaire1}
                alt="partenaire Auto Distribution"
                className="w-12 h-12 mb-3 inline-block"
              />
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <Image
                src={picturePartenaire2}
                alt="partenaire ART Motoren"
                className="w-12 h-12 mb-3 inline-block"
              />
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <Image
                src={picturePartenaire3}
                alt="partenaire Oscaro"
                className="w-12 h-12 mb-3 inline-block"
              />
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <Image
                src={picturePartenaire4}
                alt="partenaire Aventure Peugeot"
                className="w-12 h-12 mb-3 inline-block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
