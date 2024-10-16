import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 15s linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '0 0' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
