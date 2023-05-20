import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "uns-blue": "#131a2a",
        "uns-light-blue": "#98a1c0",
        "uns-blue-gray": "#99a1bd14",
        "uns-blue-3": "#080a1800",
        "uns-blue-4": "#080a18",
        "uns-blue-5": "#a697ff00",
        "uns-blue-6": "#5d6785",
        "uns-blue-7": "#050026",
        "uns-blue-8": "#3335480a",
        "uns-blue-9": "#293249",
        "uns-blue-10": "#0d111c",
        "uns-sky": "#4c82fb",
        "uns-pink-1": "#ff37eb",
        "uns-pink-2": "rgb(255, 87, 218)",
        "uns-pink-3": "#ff00c7",
        "uns-pink-4": "#ff9ffb",
        "uns-yellow-1": "rgb(255, 244, 207)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        cta: "url('/assets/img/ctabg.png'), radial-gradient(101.8% 4091.31% at 0% 0%, #4673fa 0%, #9646fa 100%)",
      },
      boxShadow: {
        glow: "0 0 16px 0 var(--tw-shadow-color)",
        features: "0 10px 24px 0 var(--tw-shadow-color)",
        cta: "0 10px 24px var(--tw-shadow-color)",
      },
      backgroundSize: {
        "auto-hundred": "auto 100%",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-gradient": (angle: any) => ({
            "background-image": `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          // values from config and defaults you wish to use most
          values: Object.assign(
            theme("bgGradientDeg", {}), // name of config key. Must be unique
            {
              10: "10deg", // bg-gradient-10
              15: "15deg",
              20: "20deg",
              25: "25deg",
              30: "30deg",
              45: "45deg",
              60: "60deg",
              90: "90deg",
              120: "120deg",
              135: "135deg",
            }
          ),
        }
      );
    }),
  ],
} satisfies Config;
