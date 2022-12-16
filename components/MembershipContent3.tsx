import { HiAtSymbol, HiFingerPrint } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
import { CiUser } from 'react-icons/ci';
import { signIn } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { register_validate } from '../lib/validate';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { AiOutlineEye } from 'react-icons/ai';

const MembershipContent3 = function(nextStep: any) {
  const height = _useLayoutHeight();
  const [dataSession, setDataSession] = useState<any>(null);
  const [show, setShow] = useState({ password: false, cpassword: false });
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      cpassword: ''
    },
    onSubmit,
    validate: register_validate
  });
  useEffect(() => {
    const storedData = localStorage.getItem('mySession');

    if (storedData) {
      setDataSession(JSON.parse(storedData));
    }
  }, []);

  async function onSubmit(values: any) {
    const memberInfos = {
      ...values,
      ...dataSession
    };
    console.log('check dataSession', memberInfos);
    localStorage.setItem('mySession', JSON.stringify(memberInfos));
    nextStep.onClick(4);
  }

  return (
    <div>
      {/*<section className='min-h-screen flex items-stretch text-white '>
        <div className='lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center'
             style={{ backgroundImage: `url(https://images.unsplash.com/photo-1568106575207-0fe3ec317559?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80)` }}>
          <div className='absolute bg-black opacity-60 inset-0 z-0'></div>
          <div className='w-full px-24 z-10'>
            <h1 className='text-5xl font-bold text-left tracking-wide'>Club 306</h1>
            <p className='text-3xl my-4'>Rejoins nous dans l&apos;aventure Peugeot 306</p>
          </div>
        </div>
        <div className='lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-gray-700'
        >
          <div className='w-full py-6 z-20'>
            <div className='my-7 flex border rounded-xl relative hover:bg-gray-900'>
              <button type='button'
                      onClick={() => _handleGoogleSignin()}
                      className='w-full m-1 flex justify-center gap-2 '>
                Se connecter avec un compte Google
              </button>
              <span className='icon flex items-center px-4'>
                                    <FcGoogle size={25} />
                                </span>
            </div>
            <div className='py-6 space-x-2 text-gray-100'>
              OU
            </div>
            <div className='space-x-2 text-gray-100'>
              SVP créez votre compte &nbsp;{dataSession?.first_name}&nbsp;{dataSession?.last_name}
            </div>
            <form className='sm:w-2/3 w-full px-4 lg:px-0 mx-auto'
                  onSubmit={formik.handleSubmit}
            >
              Username
              <div
                className={`${'my-3 flex border rounded-xl relative hover:bg-gray-900'} ${formik.errors.username && formik.touched.username ? 'border-rose-600' : ''}`}>
                <input type='username'
                       placeholder='Nom Utilisateur'
                       className='w-full py-4 px-6 border rounded-xl bg-transparent focus:outline-none border-none'
                       {...formik.getFieldProps('username')}

                />
                <span className='icon flex items-center px-4 text-amber-300'>
                <CiUser size={25} />
              </span>
              </div>

              Email
              <div className='my-3 flex relative '>
                <input type='email'
                       placeholder={dataSession?.email}
                       className='w-full py-4 px-6 bg-gray-700 rounded-xl  border-none '
                       readOnly
                />
                <span className='icon flex items-center px-4'>
                <HiAtSymbol size={25} />
              </span>
              </div>

              Password
              <div
                className={`${'my-3 flex border rounded-xl relative hover:bg-gray-900'} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
                <input type={`${show.password ? 'text' : 'password'}`}
                       placeholder='Mot de Passe'
                       className='w-full py-4 px-6 border rounded-xl bg-transparent focus:outline-none border-none'
                       {...formik.getFieldProps('password')}

                />
                <span className='icon flex items-center px-4 text-amber-300 hover:text-rose-500 active:text-green-600'
                      onClick={() => setShow({ ...show, password: !show.password })}>
                <HiFingerPrint size={25} />
              </span>
              </div>

              Confirm Password
              <div
                className={`${'my-3 flex border rounded-xl relative hover:bg-gray-900'} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
                <input type={`${show.cpassword ? 'text' : 'password'}`}
                       placeholder='Confirmer le mot de passe'
                       className='w-full py-4 px-6 border rounded-xl bg-transparent focus:outline-none border-none'
                       {...formik.getFieldProps('cpassword')}

                />
                <span className='icon flex items-center px-4 text-amber-300 hover:text-rose-500 active:text-green-600'
                      onClick={() => setShow({ ...show, cpassword: !show.cpassword })}>
                <HiFingerPrint size={25} />
              </span>
              </div>

              <div className='px-4 pb-2 pt-4'>
                <button
                  type='submit'
                  className='uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none'
                >
                  Inscrivez-vous
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>*/}
      <main className='flex-1'>
        {(height !== 0) && <div className='flex' style={{ height: `${height - 80}px` }}>

          {/*LEFT*/}
          <section className='lg:flex w-1/2 hidden bg-cover'
                   style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1568106575207-0fe3ec317559)' }}
          >
            <div className=' text-black flex items-center justify-center bg-white opacity-60 inset-0 z-0 h-full w-full'>
              <div>
                <h1 className='text-5xl tracking-wide'>Club 306</h1>
                <p className='text-3xl my-4'>Rejoins nous dans l&apos;aventure Peugeot 306</p>
              </div>
            </div>
          </section>

          {/*RIGHT*/}
          <section className='h-full lg:w-1/2 w-full grid place-items-center'>

            <div className='mx-auto sm:w-1/2 w-full pt-4'>
            <div
              className='border rounded-md border-black hover:border-blue-400 hover:bg-blue-50 flex justify-center items-center py-2 mb-4 mx-8'>
              <button type='button'
                      onClick={() => _handleGoogleSignin}
                      className=''>

              </button>
              <span className='flex'>
                <FcGoogle size={25} className='mr-2' />
                  Continuer avec Google
              </span>
            </div>
            <div className='relative flex py-5 items-center mb-8'>
              <div className='flex-grow border-t border-gray-400 '></div>
              <span className='flex-shrink mx-4 '>OU</span>
              <div className='flex-grow border-t border-gray-400'></div>
            </div>
            </div>
            <form className='sm:w-1/2 w-full mx-auto'
                    onSubmit={formik.handleSubmit}
              >
                {/*Username*/}
                <div
                  className={`${'my-3 flex border rounded-xl relative hover:bg-[#D7DEED]'} ${formik.errors.username && formik.touched.username ? 'border-rose-600' : ''}`}>
                  <input type='username'
                         placeholder='Nom Utilisateur'
                         className='w-full py-4 px-6 border rounded-xl bg-transparent focus:outline-none border-none'
                         {...formik.getFieldProps('username')}

                  />
                  <span className='icon flex items-center px-4 text-[#3B578E] hover:text-[#DB2323] active:text-[#D7DEED]'>
                <CiUser size={25} />
              </span>
                </div>

                {/*Email*/}
                <div className='my-3 flex relative bg-[#D7DEED] border rounded-xl'>
                  <input type='email'
                         placeholder={dataSession?.email}
                         className='w-full py-4 px-6 bg-[#D7DEED] border-none '
                         readOnly
                  />
                  <span className='icon flex items-center px-4 text-[#3B578E]'>
                <HiAtSymbol size={25} />
              </span>
                </div>

                {/*Password*/}
                <div
                  className={`${'my-3 flex border rounded-xl relative hover:bg-[#D7DEED]'} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
                  <input type={`${show.password ? 'text' : 'password'}`}
                         placeholder='Mot de Passe'
                         className='w-full py-4 px-6 border rounded-xl bg-transparent focus:outline-none border-none'
                         {...formik.getFieldProps('password')}

                  />
                  <span className='icon flex items-center px-4 text-[#3B578E] hover:text-[#DB2323] active:text-[#D7DEED]'
                        onClick={() => setShow({ ...show, password: !show.password })}>
                <AiOutlineEye size={25} />
              </span>
                </div>

                {/*Confirm Password*/}
                <div
                  className={`${'my-3 flex border rounded-xl relative  hover:bg-[#D7DEED]'} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
                  <input type={`${show.cpassword ? 'text' : 'password'}`}
                         placeholder='Confirmer le mot de passe'
                         className='w-full py-4 px-6 border rounded-xl bg-transparent focus:outline-none border-none'
                         {...formik.getFieldProps('cpassword')}

                  />
                  <span className='icon flex items-center px-4 text-[#3B578E] hover:text-[#DB2323] active:text-[#D7DEED]'
                        onClick={() => setShow({ ...show, cpassword: !show.cpassword })}>
                <HiFingerPrint size={25} />
              </span>
                </div>

                <div
                  className='mt-12 border rounded-md hover:bg-[#DB2323] bg-[#3B578E] flex justify-center items-center py-2 mb-4 mx-20'>
                  <button
                    type='submit'
                    className='text-[#F7F9FF] text-xl'>
                    Se Connecter
                  </button>
                </div>

              </form>
          </section>
        </div>
        }
      </main>
    </div>
  );
};

async function _handleGoogleSignin() {
  await signIn('google');
  /*const user = await signIn('google', { callbackUrl: 'https://pascal306.vercel.app/user' })*/
}

function _useLayoutHeight() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const divRef = document.getElementById('mainDiv');
    if (divRef) {
      setHeight(divRef.offsetHeight);
    }
  }, []);

  return height;
}

export default MembershipContent3;