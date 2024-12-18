/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.vue'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },

        success: 'var(--success)',
        'on-bg-success': 'var(--on-bg-success)',

        /* ---  Custom --- */
        'grey-100': 'hsl(var(--grey-100))',
        'grey-800': 'hsl(var(--grey-800))',
      },
      borderRadius: {
        30: '30px',
      },
    },
  },
  plugins: [],
};
