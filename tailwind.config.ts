import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        flip: "flip 0.6s ease-in-out",
      },
      keyframes: {
        flip: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(180deg)" },
        },
      },
      perspective: {
        "1000": "1000px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },
        ".perspective-1000": {
          perspective: "1000px",
        },
      });
    },
  ],
};

export default config;
