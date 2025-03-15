import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					'50': '#f2f2f3',
					'100': '#e5e5e6',
					'200': '#cbcbcd',
					'300': '#b1b2b5',
					'400': '#97989c',
					'500': '#7d7e83',
					'600': '#646569',
					'700': '#4b4c4f',
					'800': '#323234',
					'900': '#19191a',
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					'50': '#eef0f5',
					'100': '#dee0ec',
					'200': '#bdc2d9',
					'300': '#9ba3c5',
					'400': '#7a85b2',
					'500': '#59669f',
					'600': '#47527f',
					'700': '#353d5f',
					'800': '#242940',
					'900': '#121420',
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				special: {
					'50': '#ececec',
					'100': '#d9d9d9',
					'200': '#b3b3b3',
					'300': '#8d8d8d',
					'400': '#676767',
					'500': '#414141',
					'600': '#343434',
					'700': '#272727',
					'800': '#1a1a1a',
					'900': '#0d0d0d'
				},
				// jade: {
				// 	'50': '#ebf7f3',
				// 	'100': '#d6efe6',
				// 	'200': '#ade0ce',
				// 	'300': '#85d0b5',
				// 	'400': '#5cc19d',
				// 	'500': '#33b184',
				// 	'600': '#298e6a',
				// 	'700': '#1f6a4f',
				// 	'800': '#144735',
				// 	'900': '#0a231a'
				// },
				jade: {
					"50": "#e9f2eb",
					"100": "#d4e5d7",
					"200": "#a9cbaf",
					"300": "#7db287",
					"400": "#52985f",
					"500": "#277e37",
					"600": "#1f652c",
					"700": "#174c21",
					"800": "#103216",
					"900": "#08190b"
				},
				burg: {
					'50': '#ffecec',
					'100': '#ffd8d8',
					'200': '#ffb1b1',
					'300': '#ff8a8a',
					'400': '#ff6363',
					'500': '#ff3c3c',
					'600': '#cc3030',
					'700': '#992424',
					'800': '#661818',
					'900': '#330c0c'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require('@tailwindcss/forms'), require("tailwindcss-animate")],
} satisfies Config;
