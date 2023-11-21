/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			/* animation: {
				slidedown: "slidedown 1s",
			},
			keyframes: {
				slidedown: {
					"0%": { transform: "translateY(-500px)", opacity: "0" },
					"100%": { transform: "none", opacity: "1" },
				},
			},
			animation: {
				slideup: "slideup 1s",
			},
			keyframes: {
				slidedown: {
					"0%": { transform: "none", opacity: "1" },
					"100%": { transform: "translateY(-500px)", opacity: "0" },
				},
			}, */
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["night", "winter"],
	},
};
