import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: '#fdf7ed',
        paperHighlight: '#fff2d6',
        foreground: '#2d2b27',
        muted: '#6f6b62',
        border: '#2c2923',
        accent: '#d44f3d',
        accent2: '#c2914a',
        gold: '#c2914a',
        mint: '#80b39f',
        mist: '#e7f2ee',
        brand: {
          950: '#061025',
          900: '#0D1A3B',
          800: '#172A55',
          700: '#243A6B',
          600: '#345185'
        }
      },
      boxShadow: {
        paper: '6px 6px 0 rgba(45, 40, 34, 0.16)',
        paperStrong: '10px 10px 0 rgba(45, 40, 34, 0.2)',
        soft: '0 24px 48px rgba(45, 40, 34, 0.12)'
      },
      borderRadius: {
        wobbly: '255px 15px 225px 15px / 15px 225px 15px 255px',
        wobblyMd: '24px 66px 22px 70px / 70px 22px 66px 24px'
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(212, 79, 61, 0.18), transparent 34%), radial-gradient(circle at 80% 18%, rgba(194, 145, 74, 0.16), transparent 28%)'
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Patrick Hand', 'cursive'],
        body: ['var(--font-body)', 'Kalam', 'cursive'],
        serif: ['var(--font-heading)', 'Georgia', 'serif'],
        sans: ['var(--font-body)', 'Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
