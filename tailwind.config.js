/** @type {import{'tailwindcss'}.Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        poe: {
          bg: '#0a0a0a',
          secondary: '#1a1a1a',
          accent: '#d4af37',
          text: '#c8aa6e',
          border: '#3a3a3a',
        }
      },
    },
  },
  plugins: [],
}