import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'productCardBG' : 'rgba(0, 61, 153, 0.2)',
        'productModalBG': '#3399ff',
        'primary': "#0ea5e9",
        'secondary': "#6366f1",
        'textDarkPrimary': '#000099',
        'textLightPrimary' : '#e6e6ff',
        'textLightSecondary' : '#c2c2f0',
        'textWarning': '#ff0066'
      }
    },
  },
  plugins: [],
}
export default config
