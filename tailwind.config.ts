import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paper background colors
        paper: {
          DEFAULT: "var(--paper)",       // Warm off-white
          lined: "var(--paper-lined)",   // For ruled lines
          graph: "var(--paper-graph)",   // For graph dots
        },
        // Ink & Text colors
        ink: {
          DEFAULT: "var(--ink-charcoal)", // Soft black/dark gray pencil
          navy: "var(--ink-navy)",        // Blue ballpoint pen
          red: "var(--ink-red)",          // Red grading pen
          faded: "var(--ink-faded)",      // Faded pencil
        },
        // Highlighter & Accents
        marker: {
          yellow: "var(--marker-yellow)",
          pink: "var(--marker-pink)",
          green: "var(--marker-green)",
          blue: "var(--marker-blue)",
        },
        // Sticky Notes
        sticky: {
          yellow: "var(--sticky-yellow)",
          pink: "var(--sticky-pink)",
          blue: "var(--sticky-blue)",
          green: "var(--sticky-green)",
        }
      },
      fontFamily: {
        heading: ["var(--font-heading)", "cursive"],
        body: ["var(--font-body)", "cursive"],
        accent: ["var(--font-accent)", "cursive"],
      },
      borderRadius: {
        'wobbly-1': '255px 15px 225px 15px/15px 225px 15px 255px',
        'wobbly-2': '15px 225px 15px 255px/255px 15px 225px 15px',
        'wobbly-3': '225px 15px 255px 15px/15px 255px 15px 225px',
        'wobbly-4': '15px 255px 15px 225px/225px 15px 255px 15px',
      },
      boxShadow: {
        'sketch': '4px 4px 0px 0px var(--ink-faded)',
        'sketch-hover': '6px 6px 0px 0px var(--ink-charcoal)',
        'sticky': '2px 4px 10px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.05)',
      },
      animation: {
        'draw-line': 'drawLine 1s ease-out forwards',
        'wobble-slow': 'wobble 4s ease-in-out infinite',
        'float-paper': 'floatPaper 6s ease-in-out infinite',
      },
      keyframes: {
        drawLine: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        wobble: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        floatPaper: {
          '0%, 100%': { transform: 'translateY(0) rotate(-1deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        }
      },
      backgroundImage: {
        'lined-paper': 'repeating-linear-gradient(transparent, transparent 31px, var(--paper-lined) 31px, var(--paper-lined) 32px)',
        'graph-paper': 'radial-gradient(var(--paper-graph) 1px, transparent 1px)',
      },
      backgroundSize: {
        'graph-paper': '20px 20px',
      }
    },
  },
  plugins: [],
};
export default config;
