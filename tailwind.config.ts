import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      logo: ["New Amsterdam", "sans-serif"],
    },
    extend: {
      maxWidth: {
        "big-screen": "1280px",
      },
      colors: {
        background: "#f5f5f9",
        primary: "#5a6dac",
        secondary: "#9caad6",
        accent: "#738ad1",
        text: "#111317",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
};
export default config;
