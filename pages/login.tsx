import Layout from '../components/Layout';
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
      password: '',
    },
    validate: login_validate,
    onSubmit,
  });
  const [show, setShow] = useState({ password: false, cpassword: false });
  const height = _useLayoutHeight();

  async function onSubmit(values: any) {
    await signIn('login', {
      redirect: false,
      email: values.email,
      password: values.password,
    }).then((status) => {
      if (status?.url !== null && status?.url !== undefined) {
        Router.push({
          pathname: '/',
          query: { message: 'Signin with success' },
        });
      } else {
        alert(
          'les informations saisies sont incorrectes. Veuillez recommencer SVP.'
        );
      }
    });
  }

  return (
    <Layout title="Ecran Connexion">
      <div className="container mx-auto">
        <main className="flex-1">
          {height !== 0 && (
            <div className="flex" style={{ height: `${height}px` }}>
              {/*LEFT*/}
              <section className="relative hidden bg-cover lg:flex lg:w-2/3">
                <button
                  className="absolute left-0 top-0 z-10 ml-4 mt-4 rounded  bg-[#3B578E] px-4 py-2 text-white hover:bg-[#DB2323]"
                  onClick={() => {
                    Router.push({
                      pathname: '/',
                    });
                  }}
                >
                  Retour
                </button>
                <div
                  className="hidden bg-cover lg:flex lg:w-2/3"
                  style={{
                    backgroundImage:
                      'url(https://images.unsplash.com/photo-1568106575207-0fe3ec317559)',
                  }}
                >
                  {/*La hauteur de cette div est : {height} px*/}
                  <div className=" inset-0 z-0 flex h-full w-full items-center justify-center bg-white text-black opacity-60">
                    <div>
                      <h1 className="text-5xl tracking-wide">Club 306</h1>
                      <p className="my-4 text-3xl">
                        Rejoins nous dans l&apos;aventure Peugeot 306
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/*RIGHT*/}
              <section className="my-4 mb-16 flex w-full flex-col justify-between lg:w-1/3">
                {/*Section HAUT*/}
                <div className="">
                  <p className="ml-8 pt-6 text-xl font-[999]">
                    Connexion à votre compte
                  </p>
                  <div className="mb-6 ml-8 flex text-sm">
                    <p className="mr-2 text-gray-400 ">
                      Pas encore de compte ?
                    </p>
                    <p className="underline hover:text-red-600">
                      <Link href="membership">Créez en un</Link>
                    </p>
                  </div>
                </div>

                {/*Section MILIEU*/}
                <section>
                  <div className="flex items-center justify-center">
                    <button
                      className="flex flex-row rounded-md border-2 border-black px-4 py-2 hover:border-blue-400 hover:bg-blue-50"
                      onClick={() => _handleGoogleSignin()}
                    >
                      <FcGoogle size={25} />
                      <span className="hidden sm:ml-2 sm:block sm:text-base">
                        Continuer avec Google
                      </span>
                    </button>
                  </div>
                  <div className="relative mx-4 mb-8 flex items-center py-5">
                    <div className="flex-grow border-t border-gray-400 "></div>
                    <span className="mx-4 flex-shrink ">OU</span>
                    <div className="flex-grow border-t border-gray-400"></div>
                  </div>
                </section>

                {/*Section BAS*/}
                <div className="-mt-16 flex items-center justify-center">
                  <form action="" className="" onSubmit={formik.handleSubmit}>
                    <div
                      className={`${'flex rounded-xl border'} ${
                        formik.errors.email && formik.touched.email
                          ? 'border-rose-600'
                          : ''
                      }`}
                    >
                      <input
                        type="email"
                        placeholder="Email"
                        className="rounded-xl border border-none focus:outline-none"
                        {...formik.getFieldProps('email')}
                      />
                      <span className="flex items-center px-2 text-[#3B578E] ">
                        <HiAtSymbol size={25} />
                      </span>
                    </div>

                    <div
                      className={`${'my-3 flex rounded-xl border'} ${
                        formik.errors.password && formik.touched.password
                          ? 'border-rose-600'
                          : ''
                      }`}
                    >
                      <input
                        type={`${show.password ? 'text' : 'password'}`}
                        placeholder="Mot de Passe"
                        className="rounded-xl border border-none focus:outline-none"
                        {...formik.getFieldProps('password')}
                      />
                      <span
                        className="flex items-center px-2 text-[#3B578E] hover:text-[#DB2323] active:text-[#D7DEED]"
                        onClick={() =>
                          setShow({ ...show, password: !show.password })
                        }
                      >
                        <AiOutlineEye size={25} />
                      </span>
                    </div>

                    <div className="text-right text-gray-400 hover:font-[999] hover:underline">
                      <Link href="otpInput">Mot de passe oublié ?</Link>
                    </div>
                    <div className="mt-4 flex items-center justify-center rounded-md border bg-[#3B578E] px-2 py-2 hover:bg-[#DB2323]">
                      <button type="submit" className="text-xl text-[#F7F9FF]">
                        Se Connecter
                      </button>
                    </div>
                  </form>
                </div>
              </section>
            </div>
          )}
        </main>
      </div>
    </Layout>
  );
}

async function _handleGoogleSignin() {
  await signIn('google', {
    callbackUrl: `${process.env.CLIENT_URL}` || `${process.env.CLIENT_URL2}`,
  });
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
