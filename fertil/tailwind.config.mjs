/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
		  {
			fertil: {
			
   "primary": "#f59e0b",
			
   "secondary": "#f97316",
			
   "accent": "#facc15",
			
   "neutral": "#44403c",
			
   "base-100": "#292524",
			
   "info": "#a8a29e",
			
   "success": "#84cc16",
			
   "warning": "#ffc639",
			
   "error": "#ef4444",
			},
		  },
		],
	  },
	  plugins: [
		require('daisyui'),
	  ],
}
