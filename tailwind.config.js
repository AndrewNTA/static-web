/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        '3/10': '30%',
      },
      fontSize: {
        xxs: '0.65rem',
      },
    },
  },
  plugins: [],
};
