/** @type {import('tailwindcss').Config}*/
module.exports = {
	content: ["./src/**/*.tsx", "./public/**/*.html"],
	theme: {
		fontFamily: {
			sans: ["Ubuntu", "sans-serif"]
		},
		colors: {
			p: {
				blue: {
					marine: "#02295a",
					purple: "#473dff",
					pastel: "#adbeff",
					light: "#bfe2fd"
				},
				strawberry: "#ed3548",
			},
			n: {
				alabaster: "#fafbff",
				magnolia: "#f0f6ff",
				gray: {
					cool: "#9699ab",
					light: "#d6d9e6"
				}
			}
		},
	},
	plugins: []
}
