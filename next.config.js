const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer({
  env: {
    CLIENT_URL: process.env.CLIENT_URL,
    DRIVE_FOLDER_ID: process.env.DRIVE_FOLDER_ID,
    GCP_CLIENT_ID: process.env.GCP_CLIENT_ID,
    GCP_CLIENT_SECRET: process.env.GCP_CLIENT_SECRET,
    GCP_REFRESH_TOKEN: process.env.GCP_REFRESH_TOKEN,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    HELLO_ASSO_API_URL: process.env.HELLO_ASSO_API_URL,
    // HELLO_ASSO_API_URL_SANDBOX: process.env.HELLO_ASSO_API_URL_SANDBOX,
    HELLO_ASSO_CLIENT_ID: process.env.HELLO_ASSO_CLIENT_ID,
    HELLO_ASSO_CLIENT_SECRET: process.env.HELLO_ASSO_CLIENT_SECRET,
    // HELLO_ASSO_CLIENT_ID_SANDBOX: process.env.HELLO_ASSO_CLIENT_ID_SANDBOX,
    // HELLO_ASSO_CLIENT_SECRET_SANDBOX:
    //   process.env.HELLO_ASSO_CLIENT_SECRET_SANDBOX,
    HPCAPTCHA_SITEKEY: process.env.HPCAPTCHA_SITEKEY,
    MAIL_FROM: process.env.MAIL_FROM,
    MAIL_HOST: process.env.MAIL_HOST,
    MAIL_PORT: process.env.MAIL_PORT,
    MAIL_PWD: process.env.MAIL_PWD,
    MAIL_USER: process.env.MAIL_USER,
    // MAIL_SERVER: process.env.MAIL_SERVER,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    // PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
    // PAYPAL_APP_SECRET: process.env.PAYPAL_APP_SECRET,
    SUPABASE_JWT_SECRET: process.env.SUPABASE_JWT_SECRET,
    USR_CHECK_DB: process.env.USR_CHECK_DB,
    USR_CHECK_DB2: process.env.USR_CHECK_DB2,
  },
  experimental: {
    // appDir: true,
    serverActions: true,
  },
  images: {
    domains: [
      'images.prismic.io',
      'www.thebigcarshow.com',
      'scontent-cdt1-1.xx.fbcdn.net',
      'images.unsplash.com',
      'raw.githubusercontent.com',
      'scontent-cdg4-2.xx.fbcdn.net',
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
    ],
  },
  // babel: {
  //   plugins: [
  //     '@babel/plugin-transform-class-properties',
  //     '@babel/plugin-proposal-object-rest-spread',
  //   ],
  // },
  reactStrictMode: true,
  // transpilePackages: ['antd'],
  swcMinify: true,
});
