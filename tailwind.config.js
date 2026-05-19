const spacing = {
  section: 'clamp(4rem, 8vw, 8rem)',
  gutter: 'clamp(1rem, 4vw, 2rem)',
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      xs: '30rem',
      sm: '40rem',
      md: '48rem',
      lg: '64rem',
      xl: '80rem',
      '2xl': '96rem',
      '3xl': '120rem',
    },
    extend: {
      colors: {
        ink: {
          950: '#070b12',
          900: '#0b111b',
          850: '#101827',
          800: '#172033',
        },
        mist: {
          100: '#f6f9ff',
          200: '#dce6f5',
          300: '#afbed3',
          400: '#7f8ca2',
        },
        accent: {
          blue: '#93caff',
          indigo: '#9ca8ff',
          violet: '#c2abff',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      spacing,
      maxWidth: {
        content: '72rem',
        readable: '46rem',
        wide: '86rem',
      },
      borderRadius: {
        soft: '0.5rem',
      },
      boxShadow: {
        glow: '0 0 44px rgba(147, 202, 255, 0.14)',
        'glow-violet': '0 0 52px rgba(194, 171, 255, 0.12)',
      },
      transitionTimingFunction: {
        cinematic: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
}
