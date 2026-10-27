/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FBF8F1',
          100: '#F5F0E6',
          200: '#EDE6D6',
          300: '#E2D8C2',
          400: '#D4C7A8',
        },
        terracotta: {
          50: '#FBEEE7',
          100: '#F4D9CC',
          200: '#E8B49C',
          300: '#D98D6A',
          400: '#C76A43',
          500: '#A64B20',
          600: '#8F3F1A',
          700: '#74331A',
          800: '#5C2A17',
          900: '#4A2415',
        },
        ink: {
          50: '#6B6660',
          100: '#4A4641',
          200: '#332F2B',
          300: '#2A2724',
          400: '#211F1D',
          500: '#191715',
        },
        sage: {
          100: '#E4E8DD',
          300: '#A8B89A',
          500: '#6F8262',
          700: '#4D5C43',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'fade-in': 'fade-in 0.5s ease-out both',
        'scale-in': 'scale-in 0.25s ease-out both',
        'slide-in-right': 'slide-in-right 0.4s ease-out both',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
};
