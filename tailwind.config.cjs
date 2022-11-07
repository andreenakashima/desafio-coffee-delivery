/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			"coffee-yellow-dark": "#c47f17",
			"coffee-yellow": "#dbac2c",
			"coffee-yellow-light": "#f1e9c9",

			"coffee-purple-dark": "#4b2995",
			"coffee-purple": "#8047f8",
			"coffee-purple-light": "#ebe5f9",

			"base-title": "#272221",
			"base-subtitle": "#403937",
			"base-text": "#574f4d",
			"base-label": "#8d8686",
			"base-hover": "#d7d5d5",
			"base-button": "#e6e5e5",
			"base-input": "#ededed",
			"base-card": "#f3f2f2",
			background: "#fafafa",
			white: "#ffffff",
		},

		extend: {
			fontFamily: {
				baloo2: "'Baloo 2', cursive",
				roboto: "'Roboto', sans-serif",
			},
		},
	},
	plugins: [],
};
