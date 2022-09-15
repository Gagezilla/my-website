/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'button+bg':'#2B2B2B',
        'button-hover+bg':'#313131',
        'body+bg': '#262626',
        'body+text': '#ffffff',
      }
    }
  },
  plugins: []
};