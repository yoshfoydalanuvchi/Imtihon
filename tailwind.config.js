/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html, js}"],
  theme: {
    screens: {
      xs: "576px", // Extra small (≤576px) [Note: Tailwind defaultda bu breakpointsni taqdim etmaydi, siz qo'shishingiz kerak]
      sm: "576px", // Small (≥576px)
      md: "768px", // Medium (≥768px)
      lg: "992px", // Large (≥992px)
      xl: "1200px", // Extra large (≥1200px)
      xxl: "1300px", // Extra extra large (≥1400px)
    },
    extend: {},
  },
  plugins: [],
};
