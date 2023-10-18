/** @type {import('tailwindcss').Config} */
import flowbitePlugin from "flowbite/plugin";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexen: ["Lexend Mega", "sans-serif"],
      },
      boxShadow: {
        aCus: "4px 4px 4px rgba(0, 0, 0, 0)",
      },
    },
  },
  plugins: [flowbitePlugin],
};
