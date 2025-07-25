/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      animation: {
        typewriter:
          "typing 1.5s steps(10) var(--animation-delay) forwards, blink-cursor 0.4s step-end infinite alternate",
      },
      keyframes: {
        typing: {
          "0%": { width: 0 },
          "50%": { borderColor: "transparent" },
          "100%": { width: "calc(10ch + 1px)" },
        },
        "blink-cursor": {
          "50%": { borderColor: "transparent" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-motion"), require("tailwindcss-intersect")],
};
