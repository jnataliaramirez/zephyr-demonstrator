/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'green-zephyr': 'rgb(38, 154, 156)',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '1rem',
        lg: '4rem',
        xl: '0rem',
        '2xl': '0rem',
      },
    },
  },
  plugins: [],
};
