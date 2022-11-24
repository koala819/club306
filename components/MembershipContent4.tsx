import { useSession } from 'next-auth/react';
import { BsCaretRightFill } from 'react-icons/bs';


const MembershipContent4 = function (lastStep: any) {
  const { data: session } = useSession()
console.log('session last step ',session)
console.log('data last step ',lastStep)

  return (
    <div>
    <section className="min-h-screen flex items-stretch text-white ">
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
        <div className="w-full py-6 z-20">
          <div className='my-7 flex border rounded-xl relative'>
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
                    <div className="h-full flex items-center  p-4 rounded-lg">
                      <img alt="team"
                           className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                           src={(session?.user?.image !== undefined) ? `${session?.user?.image}` : 'w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80'} />
                      <div className="flex-grow">
                        <h2 className="text-white title-font font-medium">{session?.user?.name || lastStep.member.username}</h2>
                        <p className="text-white">{session?.user?.email || lastStep.member.mail}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col text-center w-full mb-20">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Merci</h1>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-50">De ta participation à cette
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