/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#121214',
          card: '#1a1a1e',
          cardBorder: '#27272a',
          lighter: '#222226'
        },
        brand: {
          yellow: '#facc15',
          gold: '#eab308'
        }
      }
    },
  },
  plugins: [],
}

