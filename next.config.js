module.exports = async () => {
  return {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['lh3.googleusercontent.com',
        'www.thebigcarshow.com',
        'scontent-cdt1-1.xx.fbcdn.net',
        'images.unsplash.com']
    },
    env: {
		PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
		PAYPAL_APP_SECRET: process.env.PAYPAL_APP_SECRET,
		CLIENT_URL: process.env.CLIENT_URL,
		CLIENT_URL2: process.env.CLIENT_URL2
    }
  };
};

