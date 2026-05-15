import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        soiree: {
          black: "#0d0b08",
          dark: "#141008",
          surface: "#1c1710",
          card: "#231d14",
          border: "#2e2416",
          muted: "#3d3020",
          tan: "#c4a882",
          gold: "#c8a96e",
          cream: "#f2ede4",
          warm: "#a08d74",
          dimmed: "#6b5c46",
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        body: ["Jost", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "clamp(3.5rem, 8vw, 7rem)",
          { lineHeight: "0.95", letterSpacing: "-0.02em" },
        ],
        "display-lg": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.0" }],
        "display-md": ["clamp(1.8rem, 3vw, 2.8rem)", { lineHeight: "1.1" }],
        counter: [
          "clamp(3rem, 10vw, 8rem)",
          { lineHeight: "1", letterSpacing: "-0.04em" },
        ],
        "label-xs": ["0.625rem", { letterSpacing: "0.2em" }],
        "label-sm": ["0.75rem", { letterSpacing: "0.18em" }],
      },
    },
  },
  plugins: [],
} satisfies Config;
