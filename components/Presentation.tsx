import Image from 'next/image';
import presentationPicture from "../public/images/presentationPicture.jpg";
import Link from "next/link";
/*import { useInView } from "react-intersection-observer";*/

/*const Slider = ({ imageSrc, title, subtitle, flipped }) => {
    const { ref, inView } = useInView({
        /!* Optional options *!/
        threshold: 0.4,
    });*/

const Presentation = ({title, txt, txtButton}: PresentationProps) => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div
                        className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{title}</h1>
                        <p className="mb-8 leading-relaxed">{txt}</p>
                        <div className="flex justify-center">
                            <button
                                className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
                            >
                                <Link href="/presentation">
                                    {txtButton}
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
    )
}

export interface PresentationProps {
    title: string,
    txt: string,
    txtButton: string
}

export default Presentation;