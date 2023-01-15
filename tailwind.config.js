/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        century: "Century Gothic",
      },
      colors: {
        primary: "#98D1C9",
        secondary: "#465250",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: (theme) => ({
        gradientPrimary: `linear-gradient(to right, ${theme(
          "colors.primary"
        )}, ${theme("colors.white")})`,
      }),
    },
  },
  plugins: [],
};
