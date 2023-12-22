'use client';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { MailPwd } from '@/types/models';
import { TiArrowBack } from 'react-icons/ti';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import bcrypt from 'bcryptjs';

export const SignUp = ({ setStep }: any) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [cPasswordVisible, setCPasswordVisible] = useState(false);
  const [sessionMemberId, setSessionMemberId] = useState<string>();
  const [captchaToken, setCaptchaToken] = useState('');

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
    const memberIDSessionJSON = sessionStorage.getItem('memberId');
    if (memberIDSessionJSON) {
      setSessionMemberId(() => JSON.parse(memberIDSessionJSON));
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MailPwd>({
    resolver: yupResolver(schema),
  });

  function handleGoBack() {
    setStep((s: number) => {
      return s - 1;
    });
  }

  async function handleNext(data: any) {
    const localStockageJSON = localStorage.getItem(
      `personalInfo_${sessionMemberId}`
    );
    const oldData = localStockageJSON ? JSON.parse(localStockageJSON) : {};
    const pwdCrypt = await bcrypt.hash(data.pwd, 10);
    const newData = { ...oldData, pwd: pwdCrypt, email: data.email };
    localStorage.setItem(
      `personalInfo_${sessionMemberId}`,
      JSON.stringify(newData)
    );

    setStep((s: number) => {
      return s + 1;
    });
  }

  return (
    <section className="grid sm:grid-cols-12 sm:gap-12 py-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden mx-auto">
      <div className="flex items-center justify-center col-span-12">
        <div className="flex rounded-lg overflow-hidden  w-full">
          <div className="w-full p-8 space-y-12 flex justify-center items-center flex-col">
            <form className="space-y-8" onSubmit={handleSubmit(handleNext)}>
              <h1>Créer vos Identifiants de connexion</h1>
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
                  onClick={() => setPasswordVisible((prevState) => !prevState)}
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
                  onClick={() => setCPasswordVisible((prevState) => !prevState)}
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
                  sitekey={process.env.HPCAPTCHA_SITEKEY || ''}
                  onVerify={setCaptchaToken}
                />
              </div>
              {/* BUTTONS NEXT & CANCEL */}
              <div className="flex  w-full justify-between mt-4">
                <button
                  className="flex items-center px-4 py-2 text-white bg-red-600 rounded-lg duration-150 hover:bg-red-500 active:shadow-lg"
                  onClick={() => {
                    handleGoBack();
                  }}
                >
                  <TiArrowBack size={22} className="mr-2" />
                  Précédent
                </button>

                <button
                  className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg duration-150 hover:bg-blue-500 active:shadow-lg"
                  type="submit"
                >
                  Continuer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
