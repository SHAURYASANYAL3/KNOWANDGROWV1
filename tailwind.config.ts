import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#061025',
          900: '#0D1A3B',
          800: '#172A55',
          700: '#243A6B',
          600: '#345185'
        },
        gold: '#B9935B',
        mint: '#A1D0B6',
        mist: '#E9F4F0'
      },
      boxShadow: {
        soft: '0 30px 80px rgba(8, 17, 41, 0.18)',
        glow: '0 18px 60px rgba(177, 146, 85, 0.16)'
      },
      backgroundImage: {},
        'hero-glow': 'radial-gradient(circle at top, rgba(161, 208, 182, 0.24), transparent 32%), radial-gradient(circle at right, rgba(185, 147, 92, 0.16), transparent 28%)'
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
