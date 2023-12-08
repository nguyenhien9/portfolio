/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./src/assets/images/herobg.png')",
      },
      colors: {
        primary: "#050816",
        tertiary: "#151030",
        orange: "#ff5400",
        lightBlue: "#30cfd0",
        dark: "#2a2a2a",
      },
      boxShadow: {
        "box-shadow": "1px 1px 50px rgba(255,255,255,.2)",
      },
    },
  },

  plugins: [],
};
