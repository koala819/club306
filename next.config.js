const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer({
  env: {
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
    PAYPAL_APP_SECRET: process.env.PAYPAL_APP_SECRET,
    CLIENT_URL: process.env.CLIENT_URL,
    MAIL_USER: process.env.MAIL_USER,
    MAIL_PWD: process.env.MAIL_PWD,
    USR_CHECK_DB: process.env.USR_CHECK_DB,
    USR_CHECK_DB2: process.env.USR_CHECK_DB2,
    GCP_CLIENT_ID: process.env.GCP_CLIENT_ID,
    GCP_CLIENT_SECRET: process.env.GCP_CLIENT_SECRET,
    GCP_REFRESH_TOKEN: process.env.GCP_REFRESH_TOKEN,
    DRIVE_FOLDER_ID: process.env.DRIVE_FOLDER_ID,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
  experimental: {
    appDir: true,
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
  reactStrictMode: true,
  transpilePackages: ['antd'],
  swcMinify: true,
});
