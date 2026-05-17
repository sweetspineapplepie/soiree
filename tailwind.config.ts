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
          "clamp(4.5rem, 6vw, 5.75rem)",
          { lineHeight: "1.0", letterSpacing: "-0.01em" },
        ],
        "display-lg": ["clamp(2.625rem, 4vw, 3.25rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(1.5rem, 3vw, 1.875rem)", { lineHeight: "1.2" }],
        counter: [
          "clamp(3rem, 10vw, 8rem)",
          { lineHeight: "1", letterSpacing: "-0.02em" },
        ],
        "label-xs": ["0.8125rem", { letterSpacing: "0.12em" }],
        "label-sm": ["0.875rem", { letterSpacing: "0.12em" }],
      },
    },
  },
  plugins: [],
} satisfies Config;
