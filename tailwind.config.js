/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx, ts, tsx}'],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '1057px',
      // => @media (min-width: 768px) { ... }
      lg: '1339px',
    },

    fontFamily: {
      marker: ['Permanent Marker', 'cursive'],
      indie: ['Indie Flower', ' cursive'],
    },
  },
  plugins: [],
};
