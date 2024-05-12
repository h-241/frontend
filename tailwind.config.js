/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange_btn: "#f26200",
        purple_btn: "#9333EA",
        red: "#F87070",
        turquoise: "#70F3F8",
        purple: "#D881F8",
        grey: "#D7E0FF",
        white: "#FFFFFF",
        grey: "#EFF1FA",
        blue: {
          midnight: "#1E213F",
          dark: "#161932",
        },
      },
    },
  },
  plugins: [],
};
