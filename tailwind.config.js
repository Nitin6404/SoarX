/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "641px",
      md: "769px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        'jmi-green': '#347B5E',
        'mid-jmi-green': '#18181b',
        'dark-jmi-green': '#295643',
        'new-light': '#64b493',
        'text-color': '#808080',
        '1st-bg': '#1B1B1D',
      },
    },
  },
  plugins: [],
}

