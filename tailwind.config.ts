import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "custom-gray": "#2B2C2D",
      },
      colors: {
        orange: "#f17e15",
        services: "#5C5E60",
        blackBackground: "#212121",
        message: "#02122E",
        we: "#28303D",
        blueG: "#1993E8",
        white: "#FFFFFF",
        px: "1px",
      },
    },
  },
  plugins: [],
};
export default config;
