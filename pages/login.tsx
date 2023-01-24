import { Layout } from '../components/Layout';
import Link from 'next/link';
import { HiAtSymbol } from 'react-icons/hi';
import { AiOutlineEye } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { signIn } from 'next-auth/react';
import { useFormik } from 'formik';
import login_validate from '../lib/validate';
import { useState, useEffect } from 'react';
import Router from 'next/router';

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate: login_validate,
    onSubmit
  });
  const [show, setShow] = useState({ password: false, cpassword: false });
  const height = _useLayoutHeight();

  async function onSubmit(values: any) {
   await signIn('login', {
      redirect: false,
      email: values.email,
      password: values.password,
    })
      .then ((status) =>{
        if (status?.url !== null && status?.url !== undefined) {
          Router.push({
            pathname: '/',
            query: { message: "Signin with success" }
          });
        } else {
          alert('les informations saisies sont incorrectes. Veuillez recommencer SVP.');
        }
      });
  }

  return (
    <Layout title='Ecran Connexion' displayNavbar={false}>
      <div className='container mx-auto'>
        <main className='flex-1'>
          {(height !== 0) && <div className='flex' style={{ height: `${height}px` }}>

            {/*LEFT*/}
            <section className='lg:flex lg:w-2/3 hidden bg-cover'
                     style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1568106575207-0fe3ec317559)' }}
            >
              {/*La hauteur de cette div est : {height} px*/}
              <div
                className=' text-black flex items-center justify-center bg-white opacity-60 inset-0 z-0 h-full w-full'>
                <div>
                  <h1 className='text-5xl tracking-wide'>Club 306</h1>
                  <p className='text-3xl my-4'>Rejoins nous dans l&apos;aventure Peugeot 306</p>
                </div>
              </div>
            </section>

            {/*RIGHT*/}
            <section className='w-full flex flex-col justify-between my-4 mb-16 lg:w-1/3'>

              {/*Section HAUT*/}
              <div className=''>
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
              </div>

              {/*Section MILIEU*/}
              <div className=''>
                <div
                  className='border rounded-md border-black hover:border-blue-400 hover:bg-blue-50 flex justify-center items-center py-2 mb-4 mx-56 lg:mx-28'
                >
                  <button type='button'
                          onClick={() => _handleGoogleSignin()}
                  >
                    <span className='flex'>
                    <FcGoogle size={25} className='mr-2' />
                    Continuer avec Google
                  </span>
                  </button>
                </div>
                <div className='relative flex py-5 items-center mx-4 mb-8'>
                  <div className='flex-grow border-t border-gray-400 '></div>
                  <span className='flex-shrink mx-4 '>OU</span>
                  <div className='flex-grow border-t border-gray-400'></div>
                </div>
              </div>

              {/*Section BAS*/}
              <div className='flex justify-center items-center -mt-16'>
                <form action=''
                      className=''
                      onSubmit={formik.handleSubmit}
                >
                  <div
                    className={`${'flex border rounded-xl'} ${formik.errors.email && formik.touched.email ? 'border-rose-600' : ''}`}>
                    <input type='email'
                           placeholder='Email'
                           className='border rounded-xl focus:outline-none border-none'
                           {...formik.getFieldProps('email')}
                    />
                    <span className='flex items-center px-2 flex text-[#3B578E] '>
                      <HiAtSymbol size={25} />
                    </span>
                  </div>

                  <div
                    className={`${'my-3 flex border rounded-xl'} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
                    <input type={`${show.password ? 'text' : 'password'}`}
                           placeholder='Mot de Passe'
                           className='border rounded-xl focus:outline-none border-none'
                           {...formik.getFieldProps('password')}
                    />
                    <span className='flex items-center px-2 text-[#3B578E] hover:text-[#DB2323] active:text-[#D7DEED]'
                          onClick={() => setShow({ ...show, password: !show.password })}>
                      <AiOutlineEye size={25} />
                    </span>
                  </div>

                  <div className='text-right text-gray-400 hover:underline hover:font-[999]'>
                    <Link href='findPwd'>Mot de passe oublié ?</Link>
                  </div>
                  <div
                    className='mt-4 border rounded-md hover:bg-[#DB2323] bg-[#3B578E] flex justify-center items-center py-2 px-2'>
                    <button
                      type='submit'
                      className='text-[#F7F9FF] text-xl'>
                      Se Connecter
                    </button>
                  </div>
                </form>
              </div>

            </section>


          </div>
          }
        </main>
      </div>

    </Layout>

  );
}

async function _handleGoogleSignin() {
  await signIn('google', { callbackUrl: `${process.env.CLIENT_URL}` || `${process.env.CLIENT_URL2}` });
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
