import type { Config } from "tailwindcss";

export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xs: "450px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
        "3xl": "1760px",
      },
      container: {
        screens: {
          xs: "450px",
          sm: "568px",
          md: "768px",
          lg: "992px",
          xl: "1200px",
          xxl: "1400px",
          "3xl": "1760px",
        },
      },
      colors: {
        primary: "#00594F",
        secondary: "#FFB549",
      },
      fontSize: {
        font14: "clamp(0.7rem,1.2vw,0.875rem)",
        font16: "clamp(0.7rem, 1.5vw, 1rem)",
        font19: "clamp(0.8rem, 2vw, 1.1875rem)",
        font20: "clamp(0.8rem, 2vw, 1.25rem)",
        font25: "clamp(0.9rem, 3vw, 1.5625rem)",
        font30: "clamp(1rem, 2.5vw, 1.875rem)",
        font35: "clamp(1.2rem, 3.5vw, 2.1875rem)",
        font65: "clamp(1.5rem, 4.5vw, 4.0625rem)",
        font72: "clamp(1.5rem, 5vw, 4.5rem)",
        font80: "clamp(2rem, 8vw, 5rem)",
      },
      lineHeight: {
        lh0p76: "0.7692307692307692",
        lh1p07: "1.076923076923077",
        lh1p26: "1.266666666666667",
        lh1p33: "1.33333333",
        lh1p78: "1.785714285714286",
        lh1p4: "1.4",
        lh2p3: "2.333333333333333",
        lh1p66: "1.66666666666",
        lh1p18: "1.1875",
      },
      height: {
        "75dvh": "75dvh",
        "60dvh": "60dvh",
      },
    },
  },
  plugins: [],
} satisfies Config;


