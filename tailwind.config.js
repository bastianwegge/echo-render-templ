/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./web/components/**/*.{html,templ}"],
  theme: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require('daisyui')
  ],
}

