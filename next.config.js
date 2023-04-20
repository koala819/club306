module.exports = async () => {
  return {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: [
        // 'lh3.googleusercontent.com',
        'www.thebigcarshow.com',
        'scontent-cdt1-1.xx.fbcdn.net',
        'images.unsplash.com',
        'raw.githubusercontent.com',
      ],
    },
    env: {
      PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
      PAYPAL_APP_SECRET: process.env.PAYPAL_APP_SECRET,
      CLIENT_URL: process.env.CLIENT_URL,
      MAIL_USER: process.env.MAIL_USER,
      MAIL_PWD: process.env.MAIL_PWD,
      USR_CHECK_DB: process.env.USR_CHECK_DB,
      USR_CHECK_DB2: process.env.USR_CHECK_DB2,
    },
  };
};
