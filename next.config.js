const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({
  env: {
    CLIENT_URL: process.env.NEXT_PUBLIC_CLIENT_URL,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    DRIVE_FOLDER_ID: process.env.DRIVE_FOLDER_ID,
    GCP_CLIENT_ID: process.env.GCP_CLIENT_ID,
    GCP_CLIENT_SECRET: process.env.GCP_CLIENT_SECRET,
    GCP_REFRESH_TOKEN: process.env.GCP_REFRESH_TOKEN,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
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
    OPEN_CAGE: process.env.OPEN_CAGE,
    SUPABASE_JWT_SECRET: process.env.SUPABASE_JWT_SECRET,
    USR_CHECK_DB: process.env.USR_CHECK_DB,
    USR_CHECK_DB2: process.env.USR_CHECK_DB2,
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    loader: 'default',
    path: '/_next/image',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'newsdanciennes.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.francebleu.fr',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'scontent-cdg4-3.xx.fbcdn.net',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'mobicheckin-assets.s3.eu-west-1.amazonaws.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.thebigcarshow.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'scontent-cdt1-1.xx.fbcdn.net',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'scontent-cdg4-2.xx.fbcdn.net',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
})
