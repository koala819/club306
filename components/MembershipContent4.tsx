import { useSession } from 'next-auth/react';
import { BsCaretRightFill } from 'react-icons/bs';
import { RxAvatar } from 'react-icons/rx';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import ClipLoader from "react-spinners/ClipLoader";

const MembershipContent4 = function () {
  const { data: session } = useSession()
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    const storedData = localStorage.getItem('mySession');

    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('mySession', JSON.stringify(data));
  }, [data]);


console.log('session',data)

  return (
    <div>
    <section className="min-h-screen flex items-stretch text-white pt-8">
      <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
           style={{backgroundImage: `url(https://images.unsplash.com/photo-1568106575207-0fe3ec317559?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80)`}}>
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="w-full px-24 z-10">
          <h1 className="text-5xl font-bold text-left tracking-wide">Club 306</h1>
          <p className="text-3xl my-4">Rejoins nous dans l&apos;aventure Peugeot 306</p>
        </div>
      </div>
      <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-gray-700"
      >
        <div className="w-full ">
          <div className='flex border rounded-xl relative'>
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">

                <div className="flex flex-col text-center w-full mb-20">
                  <div><ClipLoader
                    color={'#FFF'}
                    loading={true}
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                    <p className="text-white">Enregistrement des informations dans notre base de données</p>
                    <p className="text-white">Veuillez patienter</p>

                  </div>
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Merci</h1>
                  <div className="">
                    {session?.user?.image !== undefined
                      ? <Image alt="picture user"
                               height={100}
                               width={100}
                               className="rounded-full"
                               src={`${session?.user?.image}`}
                      />
                      : <span className='icon flex items-center px-4'><RxAvatar size={50} /></span>
                    }
                    <div className="flex-grow">
                      <h2 className="text-white title-font font-medium">{session?.user?.name ||  data?.last_name + ' '+ data?.first_name }</h2>
                      <p className="text-white ml-4">{session?.user?.email || data?.mail}</p>
                    </div>
                  </div>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-50 mt-8">pour ta participation à cette
                    grande et belle aventure mécanique autour de la merveilleuse 306.</p>

                  <div>
                    <button
                      className="bg-green-600 hover:bg-green-400 active:bg-green-800 text-black font-bold py-2 px-4 rounded inline-flex items-center mt-8">
                      <BsCaretRightFill size={23} />
                      <span>Terminer</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}


/*function _Guest(nextStep: any) {

}

function _User({nextStep}: any) {
  console.log('in finish',nextStep)
  nextStep.onClick(3)
  nextStep.updateNumberStep(3)
return(<></>)
}*/

export default MembershipContent4