import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ertqa-dark': '#071412',
        'ertqa-green': '#022b23',
        'ertqa-gold': '#fbddaf',
        'ertqa-muted': '#707c7a',
        'ertqa-card': '#0d1f1d',
        'ertqa-border': 'rgba(255,255,255,0.1)',
      },
      fontFamily: {
        fustat: ['Fustat', 'sans-serif'],
        satoshi: ['Satoshi Variable Variable Bold', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        kufi: ['Noto Kufi Arabic', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
