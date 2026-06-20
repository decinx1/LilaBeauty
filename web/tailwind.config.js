/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FFFBF8",
          100: "#FBF3EE",
          200: "#F6E8DF"
        },
        rose: {
          50: "#FCF1F4",
          100: "#F8DDE5",
          200: "#F1BACE",
          300: "#E994B2",
          400: "#DD6F95",
          500: "#C84F78",
          600: "#A53A60",
          700: "#7D2A48",
          800: "#5C2A3B"
        },
        peach: {
          100: "#F6E9E2",
          200: "#F0D8CD",
          300: "#E8BFB0",
          400: "#DE9D8C"
        },
        plum: {
          600: "#5C2A3B",
          700: "#4A1F30",
          800: "#3A1726",
          900: "#2A0F1A"
        },
        sage: {
          100: "#EEF1E7",
          300: "#C9D4B6",
          500: "#92A67C"
        }
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      borderRadius: {
        blob: "2rem"
      }
    }
  },
  plugins: []
};
