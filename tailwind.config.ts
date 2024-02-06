import type { Config } from 'tailwindcss'

const { nextui } = require('@nextui-org/react')

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './pages/article/**/*.{js,ts,jsx,tsx,mdx}',
    // './node_modules/flowbite/**/*.js',
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
        green: '#16a34a',
        gray: '#d1d5db',
      },
    },
  },
  // theme: {
  //   container: {
  //     center: true,
  //     padding: '2rem',
  //     screens: {
  //       '2xl': '1400px',
  //     },
  //   },
  //   extend: {
  //     colors: {
  //       border: 'hsl(var(--border))',
  //       input: 'hsl(var(--input))',
  //       ring: 'hsl(var(--ring))',
  //       background: 'hsl(var(--background))',
  //       foreground: 'hsl(var(--foreground))',
  //       primary: {
  //         DEFAULT: 'hsl(var(--primary))',
  //         foreground: 'hsl(var(--primary-foreground))',
  //       },
  //       secondary: {
  //         DEFAULT: 'hsl(var(--secondary))',
  //         foreground: 'hsl(var(--secondary-foreground))',
  //       },
  //       destructive: {
  //         DEFAULT: 'hsl(var(--destructive))',
  //         foreground: 'hsl(var(--destructive-foreground))',
  //       },
  //       muted: {
  //         DEFAULT: 'hsl(var(--muted))',
  //         foreground: 'hsl(var(--muted-foreground))',
  //       },
  //       accent: {
  //         DEFAULT: 'hsl(var(--accent))',
  //         foreground: 'hsl(var(--accent-foreground))',
  //       },
  //       popover: {
  //         DEFAULT: 'hsl(var(--popover))',
  //         foreground: 'hsl(var(--popover-foreground))',
  //       },
  //       card: {
  //         DEFAULT: 'hsl(var(--card))',
  //         foreground: 'hsl(var(--card-foreground))',
  //       },
  //     },
  //     borderRadius: {
  //       lg: `var(--radius)`,
  //       md: `calc(var(--radius) - 2px)`,
  //       sm: 'calc(var(--radius) - 4px)',
  //     },
  //     fontFamily: {
  //       sans: ['var(--font-sans)'],
  //     },
  //     keyframes: {
  //       'accordion-down': {
  //         from: { height: '0' },
  //         to: { height: 'var(--radix-accordion-content-height)' },
  //       },
  //       'accordion-up': {
  //         from: { height: 'var(--radix-accordion-content-height)' },
  //         to: { height: '0' },
  //       },
  //     },
  //     animation: {
  //       'accordion-down': 'accordion-down 0.2s ease-out',
  //       'accordion-up': 'accordion-up 0.2s ease-out',
  //     },
  //   },
  // },
  plugins: [nextui()],
  // plugins: [require('tailwindcss-animate')],
}

module.exports = config
