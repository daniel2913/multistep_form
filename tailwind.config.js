
const relatives = {
	1: ".25em",
	2: ".5em",
	3: ".75em",
	4: "1em",
	5: "1.25em",
	6: "1.5em",
	7: "1.75em",
	8: "2em",
	10: "2.5em",
	12: "3em",
	16: "4em"
}
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
