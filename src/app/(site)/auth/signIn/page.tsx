'use client';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { checkEmptyToken, memberInfo } from '@/lib/token/utils';
import { sendConfirmationMail } from '@/lib/mail/utils';

export default function Page() {
  const [showPwd, setShowPwd] = useState<boolean>(false);
  // const [magikLink, setMagikLink] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [mailWithToken, setMailWithToken] = useState<boolean>(false);

  const schema: yup.ObjectSchema<MailPwd> = yup.object().shape({
    email: yup
      .string()
      .required("L'email est obligatoire")
      .email("Le format de l'email est invalide"),
    pwd: yup
      .string()
      .required('Le mot de passe est obligatoire')
      .min(8, 'Le mot de passe doit avoir 8 caractères minimum'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MailPwd>({
    resolver: yupResolver(schema),
  });

  async function onSubmit(values: MailPwd) {
    try {
      const response = await checkEmptyToken(values.email);
      console.log('response', response);
      if (response) {
        toast.error('Vous devez valider votre email !');
        setMailWithToken(true);
        return;
      } else {
        await signIn('credentials', {
          email: values.email,
          password: values.pwd,
          redirect: true,
          callbackUrl: '/cpanel',
        });
      }
    } catch (error: any) {
      toast.error(error);
    }
  }

  async function sendToken() {
    try {
      const response = await memberInfo(email);
      const mailData = await response.json();
      console.log('token', mailData.data.user_token);
      const mailResponse = await sendConfirmationMail(
        mailData.data.first_name,
        mailData.data.last_name,
        email,
        mailData.data.user_token
      );
      const finished = await mailResponse.json();

      if (finished.status === 200) {
        toast.success('Veuillez consulter votre boite mail');
      } else {
        console.error('Send mail with ERROR ', finished.data);
      }
    } catch (error: any) {
      toast.error(error);
    }
  }

  return (
    <div className="h-full flex justify-center items-center">
      <div className="w-full">
        <div className="flex bg-white dark:bg-gray-800 text-gray-700 dark:text-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div
            className="hidden lg:block lg:w-1/2 bg-cover"
            style={{
              backgroundImage:
                'url(https://raw.githubusercontent.com/koala819/Unlimitd_front/develop/login_background.jpg)',
            }}
          ></div>
          {/* {magikLink ? (
            <div className="h-96 ml-4 w-full">
              <CheckMail setMagikLink={setMagikLink} />
            </div>
          ) : ( */}
          <div className="w-full p-8 lg:w-1/2 space-y-12">
            <h2 className="text-2xl font-semibold text-center">
              Connexion avec votre e-mail
            </h2>

            <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
              {/* EMAIL */}
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className={`${'block text-sm font-bold mb-2'} ${
                    errors.email && 'text-red-500 font-mono text-sm'
                  }`}
                >
                  Adresse E-mail
                </label>
                <input
                  id="email"
                  className={`${'bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none'}
                  ${errors.email && 'border-red-600'}`}
                  {...register('email')}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <span className="text-red-500 font-mono text-xs">
                    {errors.email.message}
                  </span>
                )}
              </div>
              {/* PASSWORD */}
              <div className="mt-4">
                <div className="flex justify-between">
                  <label
                    htmlFor="pwd"
                    className={`${'block  text-sm font-bold mb-2'} ${
                      errors.pwd && 'text-red-500 font-mono text-sm'
                    }`}
                  >
                    Mot de passe
                  </label>

                  {mailWithToken ? (
                    <text
                      onClick={sendToken}
                      className="text-xs text-gray-500 dark:text-gray-200 underline hover:text-red-600 cursor-pointer"
                    >
                      Valider votre adresse mail
                    </text>
                  ) : (
                    <Link
                      // href="/otpInput"
                      href={'#'}
                      className="text-xs text-gray-500 dark:text-gray-200 underline hover:text-red-600 cursor-pointer"
                    >
                      Mot de passe oublié ?
                    </Link>
                  )}
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
              </div>
              <div className="flex  w-full justify-end mt-4">
                <button
                  className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg duration-150 hover:bg-blue-500 active:shadow-lg"
                  type="submit"
                >
                  Connexion
                </button>
              </div>
            </form>
          </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
}

type MailPwd = {
  email: string;
  pwd: string;
};
