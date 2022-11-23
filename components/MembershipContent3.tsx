import { HiAtSymbol, HiFingerPrint } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
import { CiUser } from 'react-icons/ci';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useFormik } from 'formik';
import { register_validate } from '../lib/validate';

const MembershipContent3 = function (nextStep: any) {
  const [show,setShow]=useState({password:false, cpassword:false})
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      cpassword:''
    },
    onSubmit,
    validate: register_validate
  })
  async function onSubmit(values: any) {
    console.log('verif values on Step 3',values)
    console.log('with little present',nextStep.member.phone)
const xx = {
      ...values,
      ...nextStep.member
}
    console.log('with little present',xx)
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(xx)
    }

    fetch('http://localhost:3000/api/auth/signup', options)
      .then(res => res.json())
      .then(res => {
        if (res.status === 422) {
          alert('Un compte avec cette adresse mail existe déjà... !');
          throw new Error('User already exist...!')
        }
      })
      .then((data) => {
        console.log('finish with',data)
        //if (data !== null) router.push('/membership')
      })
  }

 /* function finish() {
    console.log('in finish')
    nextStep.onClick(3)
    nextStep.updateNumberStep(3)
  }*/

  return (
    <section className="min-h-screen flex items-stretch text-white ">
      <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
           style={{backgroundImage: `url(https://images.unsplash.com/photo-1568106575207-0fe3ec317559?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80)`}}>
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="w-full px-24 z-10">
          <h1 className="text-5xl font-bold text-left tracking-wide">Club 306</h1>
          <p className="text-3xl my-4">Rejoins nous dans l&apos;aventure Peugeot 306</p>
        </div>
      </div>
      <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
           style={{backgroundColor: '#161616'}}>
        <div className="w-full py-6 z-20">
          <div className='my-7 flex border rounded-xl relative hover:bg-indigo-600'>
            <button type='button'
                    onClick={_handleGoogleSignin}
                    className='w-full m-1 flex justify-center gap-2 '>
              Se connecter avec un compte Google
            </button>
            <span className='icon flex items-center px-4'>
                                    <FcGoogle size={25} />
                                </span>
          </div>
          <div className="py-6 space-x-2 text-gray-100">
           OU
          </div>
          <div className="space-x-2 text-gray-100">
            SVP créez votre compte &nbsp;{nextStep.member.first_name}&nbsp;{nextStep.member.last_name}
          </div>
          <form className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
                onSubmit={formik.handleSubmit}
          >
            {/*Username*/}
            <div className={`${"my-3 flex border rounded-xl relative"} ${formik.errors.username && formik.touched.username ? 'border-rose-600' : ''}`}>
              <input type="username"
                     placeholder="Nom Utilisateur"
                     className="w-full py-4 px-6 border rounded-xl bg-black focus:outline-none border-none"
                     {...formik.getFieldProps('username')}

              />
              <span className="icon flex items-center px-4">
                                    <CiUser size={25} />
                                </span>
            </div>
            {formik.errors.username && formik.touched.username ?<span className='text-rose-500'>{formik.errors.username}</span>:<></>}

            {/*Email*/}
            <div className="my-3 flex border rounded-xl relative">
              <input type="email"
                     placeholder={nextStep.member.mail}
                     className="w-full py-4 px-6 border rounded-xl bg-black focus:outline-none border-none"
                     readOnly
              />
              <span className="icon flex items-center px-4">
                <HiAtSymbol size={25} />
              </span>
            </div>

            {/*Password*/}
            <div className={`${"my-3 flex border rounded-xl relative"} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
              <input type={`${show.password ? "text": "password"}`}
                     placeholder="Mot de Passe"
                     className="w-full py-4 px-6 border rounded-xl bg-black focus:outline-none border-none"
                     {...formik.getFieldProps('password')}

              />
              <span className="icon flex items-center px-4" onClick={() => setShow({...show,password:!show.password})}>
                                    <HiFingerPrint size={25} />
                                </span>
            </div>
            {formik.errors.password && formik.touched.password ?<span className='text-rose-500'>{formik.errors.password}</span>:<></>}

            {/*Confirm Password*/}
            <div className={`${"my-3 flex border rounded-xl relative"} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
              <input type={`${show.cpassword ? "text": "password"}`}
                     placeholder="Confirmer le mot de passe"
                     className="w-full py-4 px-6 border rounded-xl bg-black focus:outline-none border-none"
                     {...formik.getFieldProps('cpassword')}

              />
              <span className="icon flex items-center px-4" onClick={() => setShow({...show,cpassword:!show.cpassword})}>
                <HiFingerPrint size={25} />
              </span>
            </div>
            {formik.errors.cpassword && formik.touched.cpassword ?<span className='text-rose-500'>{formik.errors.cpassword}</span>:<></>}

            <div className="px-4 pb-2 pt-4">
              <button
                type="submit"
                className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none"
              >
                Inscrivez-vous
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
export default MembershipContent3

async function _handleGoogleSignin() {
  /*await signIn('google', { callbackUrl: 'https://pascal306.vercel.app/user' });*/
  await signIn('google', { callbackUrl: 'https://pascal306.vercel.app/user', redirect: false })
    .then(({ profile, error }:any) => {
      if (profile) {
        console.log('email_account', profile);
      } else {
        console.log('an error Sir',error)
      }
    });
}