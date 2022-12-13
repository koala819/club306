import Image from 'next/image';
import Link from "next/link";
import styles from '../styles/Presentation.module.css'
import { useInView } from "react-intersection-observer";




const Presentation = ({ imageSrc, title, subtitle, flipped }: any) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });
  const renderContent = () => {
    if (!flipped) {
        return (
          <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
              {/*<img src={imageSrc} alt="Travel" className="slider__image" />*/}
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
                src={imageSrc}
                alt="logo club 306"
                width={720}
                height={600}
                className={`${styles.slider__image} ${'mr-3 h-6 sm:h-10'}`}
                layout='responsive'
              />
            </div>
              <div className="slider__content">
                  <h1 className="slider__title">{title}</h1>
                  <p>{subtitle}</p>
              </div>
          </div>
        );
    } else {
        return (
          <>
              <div className="slider__content">
                  <h1 className="slider__title">{title}</h1>
                  <p>{subtitle}</p>
              </div>
              {/*<img src={imageSrc} alt="Travel" className="slider__image" />*/}
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image
                src={imageSrc}
                alt="logo club 306"
                width={720}
                height={600}
                className={`${styles.slider__image} ${'mr-3 h-6 sm:h-10'}`}
                layout='responsive'
              />
            </div>
          </>
        );
    }
};

return (
  /*<div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>*/
  <div className={inView ? `${styles.slider} ${styles.sliderZoom}` : `${styles.slider}`} ref={ref}>
      {renderContent()}
  </div>
);
    /*return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div
                        className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            Le Premier et Unique Club en France dédié à la Peugeot 306
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Le club a été crée suite à un besoin exprimé par de nombreuses personnes qui sont membres de forums ou de groupes.
                        </p>
                        <div className="flex justify-center">
                            <button
                                className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
                            >
                                <Link href="/presentation">
                                    En savoir plus ...
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Image
                            src={presentationPicture}
                            alt="logo club 306"
                            width={720}
                            height={600}
                            className='mr-3 h-6 sm:h-10'
                            layout='responsive'
                        />
                    </div>
                </div>
            </section>
        </div>
    )*/
}

/*export interface PresentationProps {
    title: string,
    txt: string,
    txtButton: string
}*/

export default Presentation;