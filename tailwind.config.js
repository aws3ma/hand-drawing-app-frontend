/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      height: {
        '87': '87vh',
        '96vh':'96vh',
        '10vh':'9vh',
        '3vh':'3vh',
        '95%':'95%'
      },
      margin: {
        '10vh': '10vh',
      }
    },
  },
  plugins: [],
}
