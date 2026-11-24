import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#141414",
        ink: "#F5F3EC",
        quiet: "#c5c3ba",
        signal: "#C4F04D",
        cobalt: "#C4F04D",
        ember: "#C4F04D",
      },
      letterSpacing: {
        display: "0em",
        label: "0em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
