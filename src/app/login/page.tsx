'use client';
import React from 'react';
import { signInGoogle } from '@/lib/signInGoogle';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { Button, ConfigProvider } from 'antd';
import { GoogleCircleFilled, MailFilled } from '@ant-design/icons';

const Page = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden lg:w-1/2">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage:
              'url(https://raw.githubusercontent.com/koala819/Unlimitd_front/develop/login_background.jpg)',
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2 space-y-12">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">
            Connexion à votre compte
          </h2>

          <div>
            <ConfigProvider
              theme={{
                token: {
                  fontSize: 18,
                },
              }}
            >
              <Button
                onClick={() => {
                  signInGoogle();
                }}
                type="primary"
                size="large"
                block
                icon={<GoogleCircleFilled />}
              >
                Se connecter avec Google
              </Button>
            </ConfigProvider>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <span className="text-xs text-center text-gray-500 uppercase">
              ou
            </span>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>
          <ConfigProvider
            theme={{
              token: {
                fontSize: 18,
              },
            }}
          >
            <Button
              onClick={() => signIn()}
              type="primary"
              size="large"
              block
              icon={<MailFilled />}
            >
              Se connecter avec son mail
            </Button>
          </ConfigProvider>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <Link
              href="/membership"
              className="text-xs text-gray-500 uppercase underline hover:text-red-600 cursor-pointer"
            >
              ou inscrivez-vous
            </Link>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
