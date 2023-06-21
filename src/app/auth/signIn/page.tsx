'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineEye } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { MailPwd } from '@/app/models';
import { signIn } from 'next-auth/react';
import { Button, ConfigProvider } from 'antd';
import { LeftCircleFilled } from '@ant-design/icons';

const LoginPage = () => {
  const [show, setShow] = useState({ password: false });

  const schema: yup.ObjectSchema<MailPwd> = yup.object().shape({
    email: yup
      .string()
      .required("L'email est obligatoire")
      .email("Le format de l'email est invalide"),
    pwd: yup
      .string()
      .required('Le mot de passe est obligatoire')
      .min(8, 'Le mot de passe doit avoir 8 caractères minimum'),
    cpwd: yup.string().optional(), // Make cpwd optional in the schema
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MailPwd>({
    resolver: yupResolver(schema),
  });

  async function onSubmit(values: { email: string; pwd: string }) {
    await signIn('credentials', {
      email: values.email,
      password: values.pwd,
      redirect: true,
      callbackUrl: '/idg',
    });
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
          <div className="w-full p-8 lg:w-1/2 space-y-12">
            <h2 className="text-2xl font-semibold text-center">
              Connexion avec votre e-mail
            </h2>

            <form className="space-y-8">
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
                  <Link
                    href="/otpInput"
                    className="text-xs text-gray-500 dark:text-gray-200 underline hover:text-red-600 cursor-pointer"
                  >
                    Mot de passe oublié ?
                  </Link>
                </div>
                <div className="my-3 flex border rounded-xl">
                  <input
                    type={`${show.password ? 'text' : 'password'}`}
                    id="pwd"
                    className={`${'bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none'}
                      ${errors.pwd && 'border-red-600'}`}
                    {...register('pwd')}
                  />
                  <span
                    className="flex items-center px-2 text-[#3B578E] hover:text-[#DB2323] active:text-[#D7DEED] dark:text-white"
                    onClick={() =>
                      setShow({ ...show, password: !show.password })
                    }
                  >
                    <AiOutlineEye size={25} />
                  </span>
                </div>
                {errors.pwd && (
                  <span className="text-red-500 font-mono text-xs">
                    {errors.pwd.message}
                  </span>
                )}
              </div>

              <div className="flex  w-full justify-between mt-4">
                <ConfigProvider
                  theme={{
                    token: {
                      fontSize: 18,
                    },
                  }}
                >
                  <Link href="/login">
                    <Button
                      type="primary"
                      size="large"
                      danger
                      icon={<LeftCircleFilled />}
                    >
                      Précédent
                    </Button>
                  </Link>

                  <Button
                    onClick={handleSubmit(onSubmit)}
                    type="primary"
                    size="large"
                  >
                    Connexion
                  </Button>
                </ConfigProvider>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
