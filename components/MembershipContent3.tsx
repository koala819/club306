import { HiAtSymbol, HiFingerPrint } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
import { CiUser } from 'react-icons/ci';
import { signIn } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { register_validate } from '../lib/validate';

const MembershipContent3 = function(nextStep: any) {
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
    <section className='min-h-screen flex items-stretch text-white '>
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
            {/*Username*/}
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

            {/*Email*/}
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

            {/*Password*/}
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

            {/*Confirm Password*/}
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
    </section>
  );
};

async function _handleGoogleSignin() {
  /*const user =  await signIn('google')*/
    const user = await signIn('google', { callbackUrl: 'https://pascal306.vercel.app/user' })

  console.log('user',user)
}


export default MembershipContent3;