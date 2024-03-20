import type { Config } from 'tailwindcss'

const { nextui } = require('@nextui-org/react')

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'cpanel-main-bg': '#2f4a70',
        'cpanel-main-bg-admin': '#b61f24',
        'cpanel-main-bg-darker': '#1f2937',
        'green-light': '#59EDAE',
        'green-darker': ' #4eb68b',
        'red-light': '#ff5252',
        'border-light': '#4A4A8C',
        border: 'hsl(var(--border))',
        'box-shadow-login': ' 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        'principal-light': '#174191',
        'principal-dark': '#E2A300',
        'bg-dark': '#000025',
        'bg-light': '#ffffff',
        'text-light': '#174191',
        'text-dark': '#ffffff',
        'light-connect': '#ADA075',
        'dark-connect': '#6a6145',
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
      },
    },
  },
 
  plugins: [nextui(), require('@tailwindcss/typography'),require('tailwindcss-animate')],
}

module.exports = config
