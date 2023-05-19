import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "uns-blue": "#131a2a",
        "uns-light-blue": "#98a1c0",
        "uns-blue-gray": "#99a1bd14",
      },
    },
  },
  plugins: [],
} satisfies Config;
