import { PAGE_COLORS } from "./src/utils";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
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
        "ui-primary": PAGE_COLORS.primary.main,
        "ui-primary-light": PAGE_COLORS.primary.light,
        "ui-secondary": PAGE_COLORS.secundary.main,
        "ui-black": PAGE_COLORS.black,
        "ui-gray": {
          700: PAGE_COLORS.gray.gray700,
          500: PAGE_COLORS.gray.gray500,
          300: PAGE_COLORS.gray.gray300,
        },
      },
    },
  },
  plugins: [],
};
export default config;
