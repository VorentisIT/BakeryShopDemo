/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        etoile: {
          obsidian: "#100E0C",
          espresso: "#181310",
          darkMocha: "#211A15",
          champagneGold: "#D6A84F",
          warmGold: "#F1C96B",
          warmIvory: "#F5EBDD",
          mutedBeige: "#B9AA98",
          softBronze: "#4A3928",
          patisserieIvory: "#EFE4D2",
          cocoa: "#5A3826",
          sage: "#8C9A70",
          raspberry: "#7B3131"
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 35px rgba(214, 168, 79, 0.22)',
        'soft-shadow': '0 20px 50px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
