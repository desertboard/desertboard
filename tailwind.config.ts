import type { Config } from "tailwindcss";

const withMT = require("@material-tailwind/html/utils/withMT");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = withMT({
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["class", "class"],
  theme: {
  	extend: {
  		screens: {
  			xs: '480px',
  			sm: '606px',
  			md: '798px',
  			lg: '1022px',
  			xl: '1230px',
  			xxl: '1430px',
  			'3xl': '1630px',
  			'4xl': '1790px'
  		},
  		container: {
  			center: true,
  			padding: {
  				DEFAULT: '15px'
  			},
  			screens: {
  				xs: '480px',
  				sm: '570px',
  				md: '750px',
  				lg: '990px',
  				xl: '1170px',
  				xxl: '1350px',
  				'3xl': '1550px',
  				'4xl': '1790px'
  			}
  		},
  		colors: {
  			primary: '#00594F',
  			secondary: '#FFB549',
  			Darkgreen: '#002D28',
  			litetext: '#151515',
  			orange: '#FF671F',
  			accent: '#ff671f',
  			themebg: '#E5E0DC',
  			lightBlack: '#151515',
  			grayE3D: '#E3DED9',
  			medBg: '#E3DED9'
  		},
  		fontSize: {
  			font14: 'clamp(0.7rem,1.2vw,0.875rem)',
  			font16: 'clamp(0.7rem, 1.5vw, 1rem)',
  			font18: 'clamp(0.8rem, 1.5vw, 18px)',
  			font19: 'clamp(0.8rem, 2vw, 1.1875rem)',
  			font20: 'clamp(1rem, 2vw, 1.25rem)',
  			font24: 'clamp(1.2rem, 3vw, 1.5rem)',
  			font25: 'clamp(1.3rem, 3vw, 1.5625rem)',
  			font28: 'clamp(1.4rem, 2.5vw, 1.75rem)',
  			font30: 'clamp(1.5rem, 2.5vw, 1.875rem)',
  			font32: 'clamp(1.6rem, 2.5vw, 2rem)',
  			font35: 'clamp(1.7rem, 3.5vw, 2.1875rem)',
  			font40: 'clamp(1.8rem, 3.5vw, 2.5rem)',
  			font48: 'clamp(1.9rem, 4vw, 3rem)',
  			font65: 'clamp(2rem, 4.5vw, 4.0625rem)',
  			font72: 'clamp(2.5rem, 5vw, 4.5rem)',
  			font80: 'clamp(3rem, 8vw, 5rem)'
  		},
  		lineHeight: {
  			lh0p76: '0.7692307692307692',
  			lh1p07: '1.076923076923077',
  			lh1p26: '1.266666666666667',
  			lh1p33: '1.33333333',
  			lh1p78: '1.785714285714286',
  			lh1p4: '1.4',
  			lh2p3: '2.333333333333333',
  			lh1p66: '1.66666666666',
  			lh1p18: '1.1875'
  		},
  		height: {
  			'75dvh': '75dvh',
  			'60dvh': '60dvh'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [addVariablesForColors, require("tailwindcss-animate")],
});



function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}


