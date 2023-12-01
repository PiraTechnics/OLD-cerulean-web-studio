/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["winter", "night"],
		/* 		themes: [
			{
				cws: {
					primary: "#0140bf",
					secondary: "#0080ff",
					accent: "#0080ff",
					neutral: "#0140bf",
					"base-100": "#ffffff",
				},
			},
		], */
	},
};
