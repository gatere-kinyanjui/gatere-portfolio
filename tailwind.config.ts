import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

// const config = {
//   content: [
//     "./node_modules/flowbite-react/lib/**/*.js",
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//       colors: {
//         "grayNurse": "#E2E4DF",
//         'oracle': "#3C766D",
//         "white": "#FFFFFF",
//         "lighter": "#D2E5D0",
//         "light": "#9EDEC6",
//         "dark": "#6E6D6E",
//         "black": "#000000",
//         "scallopSeashell": "#E7D2CC",
//         "pewter": "#B9B7BD",
//         "gray": "#868B8",
//         "ivory": "#EEEDE7",
//       },
//     },
//   },
//   plugins: [require("flowbite/plugin")],
// };

// export default config;

// import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // CORE COLORS
        white: "#FFFFFF",
        lighterGreen: "#D2E5D0",
        "blue-gray": "#6699CC",

        "gunmetal-gray": "#8D918D",
        oracle: "#3C766D",
        ivory: "#EEEDE7",

        "cool-gray": "#868B8",

        grayNurse: "#E2E4DF",
        light: "#9EDEC6",
        dark: "#6E6D6E",
        black: "#000000",
        "scallop-seashell": "#E7D2CC",
        pewter: "#B9B7BD",
      },
    },
  },
  darkMode: "class",
  plugins: [require("flowbite/plugin"), nextui(), require("daisyui")],
};

export default config;
