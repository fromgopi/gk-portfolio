const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				mont: ['var(--font-mont)', ...fontFamily.sans]
			},
			colors: {
				dark: "#1b1b1b",
				light: "#f5f5f5",
				primary: "#047857", // 240,86,199
				primaryDark: "#58E6D9", // 80,230,217
			},
			backgroundImage: {
				circularLight: "repeating-radial-gradient(rgba(0,0,0,0.5), #f5f5f5 5px, #f5f5f5 100px)"
			}
		},
	},
	plugins: [],
}
