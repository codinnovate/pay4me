import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand:'#7AC534'
      },
      animation:{
        "loop-scroll":'loop-scroll 20s linear infinite',
        "loop-scroll-reverse":'loop-scroll-reverse 20s linear infinite',
      },
      keyframes:{
        "loop-scroll":{
          from:{transform:"translateX(0)"},
          to:{transform:"translateX(-100%)"},
        },
      }
    },
  },
  plugins: [],
} satisfies Config;
