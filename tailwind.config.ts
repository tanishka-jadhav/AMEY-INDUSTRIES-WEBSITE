import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          bg: "#F6F7F2",
          surface: "#FFFFFF",
          card: "#FFFFFF",
          mutedBg: "#EEF1EA",
          lightGreenBg: "#E8F1E4",
          text: "#202620",
          textMuted: "#697169",
          green: "#2E6B3F",
          greenDark: "#1D4528",
          freshGreen: "#69A53A",
          border: "#DCE2D7",
          borderDark: "#C1CBB9",
          steel: "#7B817C",
          charcoal: "#202620",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "Inter", "sans-serif"],
      },
      boxShadow: {
        'subtle': '0 2px 12px rgba(32, 38, 32, 0.04)',
        'card': '0 6px 24px rgba(32, 38, 32, 0.06)',
        'elevated': '0 12px 36px rgba(32, 38, 32, 0.09)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(32, 38, 32, 0.04)',
      },
      borderRadius: {
        'industrial': '4px',
      }
    },
  },
  plugins: [],
};
export default config;
