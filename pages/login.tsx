import { Layout } from '../components/Layout';
import Link from 'next/link';
import { HiAtSymbol } from 'react-icons/hi';
import { AiOutlineEye } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { signIn } from 'next-auth/react';
import { useFormik } from 'formik';
import { NextPage } from 'next';
import login_validate from '../lib/validate';
import { useState, useEffect } from 'react';


function useLayoutHeight() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const divRef = document.getElementById('mainDiv');
    if (divRef) {
      setHeight(divRef.offsetHeight);
    }
  }, []);

  return height;
}

const Login: NextPage = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate: login_validate,
    onSubmit
  });
  const [show, setShow] = useState({ password: false, cpassword: false });
  const height = useLayoutHeight();

  console.log('height login', height);

  async function onSubmit(values: any) {
    const status = await signIn('login', {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: '/user'
    });

    console.log('mail ::', values.email);
    if (status !== undefined) {
      console.log('status', status);
      if (status.status === 401) {
        alert('Email ou Mot de passe incorrect...!');
      }
      /*if (status.ok) { // @ts-ignore
        await router.push(status.url);
      }*/
    }
  }

  return (

    <Layout title='Ecran Connexion'>
      <main className='flex-1'>
        {(height !== 0) && <div className='flex' style={{ height: `${height}px` }}>
          <section className='w-1/2 bg-cyan-500 flex-col bg-cover'
                   style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1568106575207-0fe3ec317559)' }}
          >
            {/*La hauteur de cette div est : {height} px*/}
          </section>

          <section className='h-full w-1/2'>
            <p className='text-xl font-[999] pt-6 ml-8'>
              Connexion à votre compte
            </p>
            <div className='flex mb-6 ml-8 text-sm'>
            <p className='text-gray-400 mr-2 '>
              Pas encore de compte ?
            </p>
              <p className='hover:underline hover:font-[999]'>
                <Link href='membership'>Créez en un</Link>
              </p>
            </div>
            <div className='border rounded-md border-black hover:border-blue-400 hover:bg-blue-50 flex justify-center items-center py-2 mb-4 mx-20'>
              <button type='button'
                      onClick={() =>_handleGoogleSignin}
                      className=''>

              </button>
              <span className='flex'>
                <FcGoogle size={25} className='mr-2' />
                  Continuer avec Google
              </span>
            </div>
            <div className="relative flex py-5 items-center mx-4 mb-8">
              <div className="flex-grow border-t border-gray-400 "></div>
              <span className="flex-shrink mx-4 ">OU</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <form action=''
                  className='sm:w-2/3 w-full px-4 lg:px-0 mx-auto'
                  onSubmit={formik.handleSubmit}
            >
              <div
                className={`${'flex border rounded-xl relative'} ${formik.errors.email && formik.touched.email ? 'border-rose-600' : ''}`}>
                <input type='email'
                       placeholder='Email'
                       className='w-full py-4 px-6 border rounded-xl focus:outline-none border-none'
                       {...formik.getFieldProps('email')}
                />
                <span className='icon flex items-center px-4 text-[#3B578E] '>
                  <HiAtSymbol size={25} />
                </span>
              </div>


              <div
                className={`${'my-3 flex border rounded-xl relative '} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
                <input type={`${show.password ? 'text' : 'password'}`}
                       placeholder='Mot de Passe'
                       className='w-full py-4 px-6 border rounded-xl focus:outline-none border-none'
                       {...formik.getFieldProps('password')}
                />
                <span className='icon flex items-center px-4 text-[#3B578E] hover:text-[#DB2323] active:text-[#D7DEED]'
                      onClick={() => setShow({ ...show, password: !show.password })}>
                  <AiOutlineEye size={25} />
                </span>
              </div>


              {/*<div className='text-right text-gray-400 hover:underline hover:text-gray-100'>
                <Link href='findPwd'>Mot de passe oublié ?</Link>
              </div>*/}
              <div className='mt-12 border rounded-md hover:bg-[#DB2323] bg-[#3B578E] flex justify-center items-center py-2 mb-4 mx-20'>
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
      {/*<section className='flex items-stretch text-white'>
        <div className='lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center'
             style={{ backgroundImage: `url(https://images.unsplash.com/photo-1568106575207-0fe3ec317559)` }}>
          <div className='absolute bg-black opacity-60 inset-0 z-0'></div>
          <div className='w-full px-24 z-10'>
            <h1 className='text-5xl font-bold text-left tracking-wide'>Club 306</h1>
            <p className='text-3xl my-4'>Rejoins nous dans l&apos;aventure Peugeot 306</p>
          </div>
        </div>
        <div className='lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0'
             style={{ backgroundColor: '#161616' }}>

          <div className='w-full py-6 z-20'>

            <span className='py-6 space-x-2 text-gray-100'>
              Connecte toi
            </span>
            <div className='mt-12 mb-12 flex border rounded-xl relative hover:bg-indigo-600'>
              <button type='button'
                      onClick={_handleGoogleSignin}
                      className='w-full m-1 flex justify-center gap-2 '>
                Se connecter avec un compte Google
              </button>
              <span className='icon flex items-center px-4'>
                <FcGoogle size={25} />
              </span>
            </div>
            <form action=''
                  className='sm:w-2/3 w-full px-4 lg:px-0 mx-auto'
                  onSubmit={formik.handleSubmit}
            >
              <div
                className={`${'flex border rounded-xl relative'} ${formik.errors.email && formik.touched.email ? 'border-rose-600' : ''}`}>
                <input type='email'
                       placeholder='Email'
                       className='w-full py-4 px-6 border rounded-xl bg-black focus:outline-none border-none'
                       {...formik.getFieldProps('email')}
                />
                <span className='icon flex items-center px-4 text-amber-300 '>
                  <HiAtSymbol size={25} />
                </span>
              </div>
              {formik.errors.email && formik.touched.email ?
                <span className='text-rose-500'>{formik.errors.email}</span> : <></>}

              <div
                className={`${'my-3 flex border rounded-xl relative hover:bg-gray-900'} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
                <input type={`${show.password ? 'text' : 'password'}`}
                       placeholder='Mot de Passe'
                       className='w-full py-4 px-6 border rounded-xl bg-black focus:outline-none border-none'
                       {...formik.getFieldProps('password')}
                />
                <span className='icon flex items-center px-4 text-amber-300 hover:text-rose-500 active:text-green-600'
                      onClick={() => setShow({ ...show, password: !show.password })}>
                  <HiFingerPrint size={25} />
                </span>
              </div>
              {formik.errors.password && formik.touched.password ?
                <span className='text-rose-500'>{formik.errors.password}</span> : <></>}

              <div className='text-right text-gray-400 hover:underline hover:text-gray-100'>
                <Link href='findPwd'>Mot de passe oublié ?</Link>
              </div>
              <div className='px-4 pb-2 pt-12'>
                <button
                  type='submit'
                  className='uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none'>
                  Se Connecter
                </button>
              </div>
              <div className='text-right text-gray-400 mt-4'>
                Pas encore de compte ?
                <div className='hover:underline hover:text-gray-100'>
                  <Link href='membership'>Créez en un</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>*/}

    </Layout>

  );
};


export default Login;

async function _handleGoogleSignin() {
  await signIn('google', { callbackUrl: `${process.env.CLIENT_URL}` });
}