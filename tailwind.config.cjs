module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
  ],
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: ["winter", "dark", "garden"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['sans-serif'],
        serif: ['serif'],
      },
    },
  },
};
