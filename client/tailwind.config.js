/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx}"
	],
	theme: {
		extend: {
			animation: {
				'move-in': 'moveIn .2s ease-out',
				'fade-in': 'fadeIn .2s ease-out'
			},
			keyframes: {
				moveIn: {
					'0%': { transform: 'translateY(-100%)' }
				},
				fadeIn: {
					'0%': { opacity: 0 }
				}
			}
		},
	},
	plugins: [],
}
