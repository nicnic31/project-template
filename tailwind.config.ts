import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#2B2730",
        "light-gray": "#F1EFEF",
        gray: "#B4B4B3",
        "dark-gray": "#7D7C7C",
        "light-red": "#FF9B9B",
        red: "#FE0000",
        "dark-red": "#B70404",
        "light-brown": "#EAD7BB",
        brown: "#C38154",
        "dark-brown": "#865439",
        "light-green": "#A7D397",
        green: "#7A9D54",
        "dark-green": "#557A46",
        "light-yellow": "#FBECB2",
        yellow: "#F0DE36",
        "dark-yellow": "#FFC436",
        "light-blue": "#AEDEFC",
        blue: "#279EFF",
        "dark-blue": "#1450A3",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
