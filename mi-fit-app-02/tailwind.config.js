/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/assets/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/hooks/**/*.{ts,tsx}",
    "./src/routes/**/*.{ts,tsx}",

  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {}
  },
  plugins: [],
}

