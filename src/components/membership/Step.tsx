import Image from 'next/image'

export const Step = ({ step }: { step: number }) => {
  const stepTitles = [
    'Informations',
    'Identifiants',
    'Garage',
    'Résumé',
    'Adhésion',
  ]

  return (
    <section className="relative h-32 bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
      {/* Image pour desktop */}
      <div className="hidden lg:block">
        <Image
          alt="Voiture 306"
          src="/images/306-Noir_306-Iceland_306-Rouge.jpg"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
          width={1000}
          height={1000}
        />
      </div>

      {/* Image pour mobile */}
      <div className="block lg:hidden w-full h-full">
        <Image
          alt="Voiture 306 Mobile"
          src="/images/306-bandeau-mobile.jpg" // Remplacez par votre image bandeau mobile
          className="absolute inset-0 h-full w-full object-cover opacity-80"
          width={640}
          height={240}
          priority
        />
      </div>

      {/*Bloc Promotion*/}
      <div className="flex h-full w-full">
        <div className="flex items-end w-screen">
          <div className="hidden lg:relative lg:block lg:p-12 ">
            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Club 306
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Rejoins nous dans l&apos;aventure Peugeot 306.
            </p>
          </div>
        </div>

        {/*Bloc Etapes*/}
        <div className="w-full ">
          <div
            className="hidden lg:relative lg:block lg:pr-2 lg:pl-2 lg:pt-2 space-y-8 bg-white
          bg-opacity-50 h-full 2xl:pr-1 2xl:pl-1 float-right"
          >
            {stepTitles.map((title, index) => {
              const isCompleted = step > 6
              const isCurrentStep =
                step === index + 1 || (step === 5 && index === 4)
              const isPastStep = index < step - 1
              const stepClass = isCurrentStep
                ? 'bg-red-600'
                : isCompleted
                  ? 'bg-green-500'
                  : ''

              return (
                <article key={index} className="flex">
                  <button
                    className={`h-8 w-8 rounded-full bg-gray-700 pb-[0.1rem] text-base font-bold
        text-white transition-all duration-300 xl:h-11 xl:w-11 xl:text-xl ${stepClass}`}
                  >
                    {index + 1}
                  </button>
                  <div className="ml-2">
                    <p
                      className={`text-xs font-bold uppercase text-gray-600 xl:text-sm
          2xl:text-base ${isPastStep ? 'line-through' : ''}`}
                    >
                      Etape {index + 1}
                    </p>
                    <h2
                      className={`text-xs font-bold 2xl:uppercase text-black xl:text-sm
          2xl:text-lg ${isPastStep ? 'line-through' : ''}`}
                    >
                      {title}
                    </h2>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
