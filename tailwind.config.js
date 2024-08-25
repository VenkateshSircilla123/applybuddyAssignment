/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgPrimary: "linear-gradient(310deg, #cb0c9f, #cb0c9f)",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("preline/plugin")],
};
