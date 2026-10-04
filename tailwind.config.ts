import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#f8f8f8",
        ink: "#000000",
        quiet: "#222222",
        signal: "#49b3fc",
        cobalt: "#49b3fc",
        ember: "#49b3fc",
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
