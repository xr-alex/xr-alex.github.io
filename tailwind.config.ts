import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['SF Mono', 'Fira Code', 'Fira Mono', 'monospace'],
      },
      fontSize: {
        '2xs': '0.6875rem',
      },
    },
  },
  plugins: [],
} satisfies Config
