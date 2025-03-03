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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          "50": "#f2f2f3",
          "100": "#e5e5e6",
          "200": "#cbcbcd",
          "300": "#b1b2b5",
          "400": "#97989c",
          "500": "#7d7e83",
          "600": "#646569",
          "700": "#4b4c4f",
          "800": "#323234",
          "900": "#19191a"
        },
        secondary: {
          "50": "#eef0f5",
          "100": "#dee0ec",
          "200": "#bdc2d9",
          "300": "#9ba3c5",
          "400": "#7a85b2",
          "500": "#59669f",
          "600": "#47527f",
          "700": "#353d5f",
          "800": "#242940",
          "900": "#121420"
        },
        special: {
          "50": "#ececec",
          "100": "#d9d9d9",
          "200": "#b3b3b3",
          "300": "#8d8d8d",
          "400": "#676767",
          "500": "#414141",
          "600": "#343434",
          "700": "#272727",
          "800": "#1a1a1a",
          "900": "#0d0d0d"
        },
        jade: {
          "50": "#ebf7f3",
          "100": "#d6efe6",
          "200": "#ade0ce",
          "300": "#85d0b5",
          "400": "#5cc19d",
          "500": "#33b184",
          "600": "#298e6a",
          "700": "#1f6a4f",
          "800": "#144735",
          "900": "#0a231a"
        },
        burg: {
          "50": "#ffecec",
          "100": "#ffd8d8",
          "200": "#ffb1b1",
          "300": "#ff8a8a",
          "400": "#ff6363",
          "500": "#ff3c3c",
          "600": "#cc3030",
          "700": "#992424",
          "800": "#661818",
          "900": "#330c0c"
        }
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
