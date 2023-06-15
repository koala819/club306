import { signIn } from 'next-auth/react';

const signInGoogle = async () => {
  await signIn('google', {
    callbackUrl: `${process.env.CLIENT_URL}` || `${process.env.CLIENT_URL2}`,
  });
};

export { signInGoogle };
