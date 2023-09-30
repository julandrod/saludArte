/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/background-hero.png')",
        "hero-pattern-purple": "url('/src/assets/liquid-cheese.png')",
        "navbar-pattern": "url('/src/assets/navbar-bg.png')",
        "about-pattern": "url('/src/assets/background-about.png')",
        "about-pattern-purple": "url('/src/assets/background-about-purple.png')",
        "footer-pattern": "url('/src/assets/chevron.png')"
      },
      gridTemplateRows: {
        "card-rows": "120px 80px 100px",
      },
      colors: {
        "primary": "#9F5DB1",
        "secondary": "#EB4963",
        "custom-color": {
          0: "#9F5DB1",
          1: "#E079FC",
          2: "#CE7AE6",
          3: "#E079FC",
        }
      }
    },
  },
  plugins: [],
};
