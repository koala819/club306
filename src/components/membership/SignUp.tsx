'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useRef, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoMdMail } from 'react-icons/io';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { TiArrowBack } from 'react-icons/ti';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { MailPwd } from '@/types/models';
import { redirect } from 'next/navigation';
import ClipLoader from 'react-spinners/ClipLoader';
import HCaptcha from '@hcaptcha/react-hcaptcha';

export const SignUp = ({ session }: any) => {
  // const [watch, setWatch] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [cPasswordVisible, setCPasswordVisible] = useState(false);
  const [storedPersonalInfo, setStoredPersonalInfo] = useState({
    first_name: '',
    last_name: '',
  });
  const [waitingVerifEmail, setWaitingVerifEmail] = useState(false);
  const [captchaToken, setCaptchaToken] = useState('');

  const supabase = createClientComponentClient();

  const schema: yup.ObjectSchema<MailPwd> = yup.object().shape({
    email: yup
      .string()
      .required("L'email est obligatoire")
      .email("Le format de l'email est invalide"),
    pwd: yup
      .string()
      .required('Le mot de passe est obligatoire')
      .min(8, 'Le mot de passe doit avoir 8 caractères minimum'),
    cpwd: yup
      .string()
      .required('Le mot de passe est obligatoire')
      .oneOf([yup.ref('pwd')], 'Les mots de passe doivent être identiques'),
  });

  const captcha = useRef<HCaptcha | null>(null);

  useEffect(() => {
    const storedPersonalInfoJSON = sessionStorage.getItem('personalInfo');
    if (storedPersonalInfoJSON) {
      setStoredPersonalInfo(() => JSON.parse(storedPersonalInfoJSON));
    }
  }, []);

  useEffect(() => {
    if (session) {
      redirect('/memberfinish');
    }
  }, [session]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MailPwd>({
    resolver: yupResolver(schema),
  });

  // const handleSignIn = async () => {
  //   await supabase.auth.signInWithOAuth({
  //     provider: 'google',
  //     options: {
  //       skipBrowserRedirect: false,
  //       redirectTo: `${window.location.origin}/memberfinish`,
  //     },
  //   });
  // };

  const handleAddMailInfos = async (values: MailPwd) => {
    const { email, pwd } = values;
    if (typeof pwd === 'string') {
      await supabase.auth.signUp({
        email: email,
        password: pwd,
        options: {
          captchaToken,
          data: {
            first_name:
              storedPersonalInfo?.first_name +
              ' ' +
              storedPersonalInfo?.last_name,
          },
          emailRedirectTo: `${process.env.CLIENT_URL}/mailConfirm`,
        },
      });

      if (captcha.current !== null && captcha.current !== undefined) {
        captcha.current.resetCaptcha();
      }

      setWaitingVerifEmail(true);
    } else {
      alert('Invalid password :\n\n\n' + pwd);
    }
  };

  // const handleLoginClick = () => {
  //   console.log('clicked');
  //   setWatch(true);
  // };
  // const handleCancelLoginClick = () => {
  //   setWatch(false);
  // };

  return (
    <>
      {waitingVerifEmail ? (
        <div className="text-center space-y-2 bg-white dark:bg-gray-800 dark:text-white p-8 rounded-lg shadow-lg border-2 border-red-500 font-bold">
          <ClipLoader
            loading={true}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <p>Veuillez patienter à garder cette fenêtre ouverte !</p>
          <p>
            La procédure d'inscription se poursuivra après que vous ayez validé
            le mail pour confirmer votre compte.
          </p>
        </div>
      ) : (
        <section className="grid sm:grid-cols-12 sm:gap-12 py-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden mx-auto">
          <div className="flex items-center justify-center col-span-12">
            <div className="flex rounded-lg overflow-hidden  w-full">
              <div className="w-full p-8 space-y-12 flex justify-center items-center flex-col">
                {/* {!watch ? (
                  <>
                    <button
                      className="flex items-center px-4 py-2 border-blue-600 border text-blue-600 bg-white rounded-lg duration-150 hover:bg-blue-100 active:shadow-lg"
                      onClick={() => {
                        handleSignIn();
                      }}
                    >
                      <FcGoogle size={22} className="mr-2" />
                      S'enregistrer avec Google
                    </button>

                    <button
                      className="flex items-center px-4 py-2 border-blue-600 border text-blue-600 bg-white rounded-lg duration-150 hover:bg-blue-100 active:shadow-lg"
                      onClick={() => {
                        handleLoginClick();
                      }}
                    >
                      <IoMdMail size={22} className="mr-2" />
                      S'enregistrer avec E-mail
                    </button>
                  </>
                ) : ( */}
                <form className="space-y-8">
                  {/* EMAIL */}
                  <div className="col-span-6 sm:col-span-3 relative z-0 mt-8">
                    <input
                      type="text"
                      id="email"
                      className={`${'block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'} ${
                        errors.email && 'border-red-600'
                      }`}
                      {...register('email')}
                      placeholder=" "
                    />
                    <label
                      htmlFor="email"
                      className={`${'peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'} ${
                        errors.email && 'text-red-500 font-mono text-sm'
                      }`}
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    {errors.email && (
                      <span className="text-red-500 font-mono text-xs">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  {/* PASSWORD */}
                  <div className="col-span-6 sm:col-span-3 relative z-0 mt-8 flex items-center space-x-4">
                    <input
                      type={`${passwordVisible ? 'text' : 'password'}`}
                      id="pwd"
                      className={`${'block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'} ${
                        errors.pwd && 'border-red-600'
                      }`}
                      {...register('pwd')}
                      placeholder=" "
                    />
                    <span
                      className="flex items-center px-2 text-[#3B578E] hover:text-[#DB2323] active:text-[#D7DEED] dark:text-white"
                      onClick={() =>
                        setPasswordVisible((prevState) => !prevState)
                      }
                    >
                      {passwordVisible ? (
                        <AiOutlineEyeInvisible size={25} />
                      ) : (
                        <AiOutlineEye size={25} />
                      )}
                    </span>
                    <label
                      htmlFor="pwd"
                      className={`${'peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'} ${
                        errors.pwd && 'text-red-500 font-mono text-sm'
                      }`}
                    >
                      Mot de passe <span className="text-red-500">*</span>
                    </label>
                  </div>
                  {errors.pwd && (
                    <span className="text-red-500 font-mono text-xs">
                      {errors.pwd.message}
                    </span>
                  )}

                  {/* CONFIRM PASSWORD */}
                  <div className="col-span-6 sm:col-span-3 relative z-0 mt-8  flex items-center space-x-4">
                    <input
                      type={`${cPasswordVisible ? 'text' : 'password'}`}
                      id="cpwd"
                      className={`${'block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'} ${
                        errors.cpwd && 'border-red-600'
                      }`}
                      {...register('cpwd')}
                      placeholder=" "
                    />
                    <span
                      className="flex items-center px-2 text-[#3B578E] hover:text-[#DB2323] active:text-[#D7DEED] dark:text-white"
                      onClick={() =>
                        setCPasswordVisible((prevState) => !prevState)
                      }
                    >
                      {!cPasswordVisible ? (
                        <AiOutlineEye size={25} />
                      ) : (
                        <AiOutlineEyeInvisible size={25} />
                      )}
                    </span>
                    <label
                      htmlFor="cpwd"
                      className={`${'peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'} ${
                        errors.cpwd && 'text-red-500 font-mono text-sm'
                      }`}
                    >
                      Confirmer le Mot de passe{' '}
                      <span className="text-red-500">*</span>
                    </label>
                  </div>
                  {errors.cpwd && (
                    <span className="text-red-500 font-mono text-xs">
                      {errors.cpwd.message}
                    </span>
                  )}
                  {/* CAPTCHA */}
                  <div className="mt-6">
                    <HCaptcha
                      ref={captcha}
                      sitekey="282edc57-2f8c-4059-b262-ba16af46468a"
                      onVerify={setCaptchaToken}
                    />
                  </div>
                  {/* BUTTONS RECORD & CANCEL */}
                  <div className="flex  w-full justify-end mt-4 space-x-4">
                    {/* <button
                      className="flex items-center px-4 py-2 text-white bg-red-600 rounded-lg duration-150 hover:bg-red-500 active:shadow-lg"
                      onClick={() => {
                        handleCancelLoginClick();
                      }}
                    >
                      <TiArrowBack size={22} className="mr-2" />
                      Précédent
                    </button> */}
                    <button
                      className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg duration-150 hover:bg-blue-500 active:shadow-lg"
                      onClick={handleSubmit(handleAddMailInfos)}
                    >
                      Continuer
                    </button>
                  </div>
                </form>
                {/* )} */}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
