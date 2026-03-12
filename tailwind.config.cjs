/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary:           '#5B21B6',
        'primary-light':   '#7C3AED',
        'primary-dark':    '#4C1D95',
        accent:            '#0D9488',
        'accent-light':    '#14B8A6',
        secondary:         '#EB4963',   /* logo / brand red-pink */
      },
      /* ── Keep bg-image tokens so asset refs aren't broken ── */
      backgroundImage: {
        "hero-pattern":         "url('/src/assets/background-hero.png')",
        "hero-pattern-purple":  "url('/src/assets/liquid-cheese.png')",
        "navbar-pattern":       "url('/src/assets/navbar-bg.png')",
        "about-pattern":        "url('/src/assets/background-about.png')",
        "about-pattern-purple": "url('/src/assets/background-about-purple.png')",
        "footer-pattern":       "url('/src/assets/chevron.png')",
        "section-pattern":      "url('/src/assets/background-section.png')",
      },
    },
  },
  plugins: [],
};
