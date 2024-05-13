import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'es': '1100px',
      },
      backgroundImage: {
        'hero': "url('../public/images/lawhero.svg')",
      },
      backgroundPosition: {
        '85%': '85%',
      },
    },
  },
  plugins: [],
};
export default config;
