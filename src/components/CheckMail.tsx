'use client';
import { TiArrowBack } from 'react-icons/ti';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRef, useState } from 'react';
import { checkRegisteredMember } from '@/lib/supabase';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import HCaptcha from '@hcaptcha/react-hcaptcha';

export function CheckMail({ setMagikLink }: any) {
  const [email, setEmail] = useState('');
  const [newPwd, setNewPwd] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const [showCPwd, setShowCPwd] = useState(false);
  const [captchaValid, setCaptchaValid] = useState(false);

  const supabase = createClientComponentClient();
  const captcha = useRef<HCaptcha | null>(null);

  const schema = yup.object().shape({
    pwd: yup
      .string()
      .required('Le mot de passe est obligatoire')
      .min(8, 'Le mot de passe doit avoir 8 caractères minimum'),
    cpwd: yup
      .string()
      .required('Le mot de passe est obligatoire')
      .min(8, 'Le mot de passe doit avoir 8 caractères minimum')
      .oneOf([yup.ref('pwd')], 'Les mots de passe doivent correspondre'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function sendMagikLink(email: string) {
    console.log('sendMagikLink', email);
    const data = await checkRegisteredMember(email);
    if (data.status !== 200) {
      toast.error("erreur d'adresse mail");
      if (captcha.current !== null && captcha.current !== undefined) {
        captcha.current.resetCaptcha();
      }
      setCaptchaValid(false);
    } else {
      setCaptchaValid(true);
      setNewPwd(true);
    }
  }

  async function onSubmit(values: any) {
    console.log('values pwd', values.pwd, 'and email ', email);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: values.pwd,
      options: {
        emailRedirectTo: `/cpanel`,
      },
    });

    if (error === null) {
      toast.success('Un email de confirmation vous a été envoyé');
    } else {
      toast.error(error.message);
    }
  }

  return (
    <div className="h-full">
      <h2 className="text-2xl font-semibold text-center">
        Renouvellement mot de passe
      </h2>
      {newPwd ? (
        <div className="flex flex-col justify-center items-center h-72 mt-8">
          <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
            <div>
              {/* Password */}
              <div className="flex justify-between">
                <label
                  htmlFor="pwd"
                  className={`${'block  text-sm font-bold'} ${
                    errors.pwd && 'text-red-500 font-mono text-sm'
                  }`}
                >
                  Mot de passe
                </label>
              </div>
              <div className="my-3 flex border rounded-xl">
                <input
                  type={`${showPwd ? 'text' : 'password'}`}
                  id="pwd"
                  className={`${'bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none'}
                      ${errors.pwd && 'border-red-600'}`}
                  {...register('pwd')}
                />
                <span
                  className="flex items-center px-2 text-[#3B578E] hover:text-[#DB2323] active:text-[#D7DEED] dark:text-white"
                  onClick={() => setShowPwd((prevState) => !prevState)}
                >
                  {showPwd ? (
                    <AiOutlineEye size={25} />
                  ) : (
                    <AiOutlineEyeInvisible size={25} />
                  )}
                </span>
              </div>
              {errors.pwd && (
                <span className="text-red-500 font-mono text-xs">
                  {errors.pwd.message}
                </span>
              )}
              {/* Confirm Password */}
              <div className="flex justify-between mt-8">
                <label
                  htmlFor="cpwd"
                  className={`${'block  text-sm font-bold '} ${
                    errors.cpwd && 'text-red-500 font-mono text-sm'
                  }`}
                >
                  Confirmation du Mot de passe
                </label>
              </div>
              <div className="my-3 flex border rounded-xl">
                <input
                  type={`${showCPwd ? 'text' : 'password'}`}
                  id="cpwd"
                  className={`${'bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none'}
                      ${errors.cpwd && 'border-red-600'}`}
                  {...register('cpwd')}
                />
                <span
                  className="flex items-center px-2 text-[#3B578E] hover:text-[#DB2323] active:text-[#D7DEED] dark:text-white"
                  onClick={() => setShowCPwd((prevState) => !prevState)}
                >
                  {showCPwd ? (
                    <AiOutlineEye size={25} />
                  ) : (
                    <AiOutlineEyeInvisible size={25} />
                  )}
                </span>
              </div>
              {errors.cpwd && (
                <span className="text-red-500 font-mono text-xs">
                  {errors.cpwd.message}
                </span>
              )}
            </div>
            <div className="flex justify-center space-x-4">
              <button
                className="flex items-center px-4 py-2 text-white bg-red-600 rounded-lg duration-150 hover:bg-red-500 active:shadow-lg"
                onClick={() => {
                  setNewPwd(false);
                }}
              >
                <TiArrowBack size={22} className="mr-2" />
                Précédent
              </button>
              <button
                className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg duration-150 hover:bg-blue-500 active:shadow-lg"
                type="submit"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      ) : (
        <>
          <div className="p-8">
            <label htmlFor="email" className="block text-sm font-bold mb-2">
              Adresse E-mail
            </label>
            <input
              id="email"
              placeholder="jack.scelere@club306.fr"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            />
          </div>
          {/* CAPTCHA */}
          <div className="flex items-center justify-center mb-8">
            <HCaptcha
              ref={captcha}
              sitekey="282edc57-2f8c-4059-b262-ba16af46468a"
              onVerify={() => setCaptchaValid(true)}
            />
          </div>
          <div className="flex justify-center space-x-4">
            <button
              className="flex items-center px-4 py-2 text-white bg-red-600 rounded-lg duration-150 hover:bg-red-500 active:shadow-lg"
              onClick={() => {
                setMagikLink(false);
              }}
            >
              <TiArrowBack size={22} className="mr-2" />
              Précédent
            </button>
            {captchaValid && (
              <button
                className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg duration-150 hover:bg-blue-500 active:shadow-lg"
                onClick={() => sendMagikLink(email)}
              >
                Envoyer
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
