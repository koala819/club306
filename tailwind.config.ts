import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // require('flowbite/plugin')
  ],
} as Config;
