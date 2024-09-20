import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
    	extend: {
    		colors: {
    			background: {
    				DEFAULT: 'var(--tg-theme-bg-color)',
    				secondary: 'var(--tg-theme-secondary-bg-color)'
    			},
    			foreground: {
    				DEFAULT: 'var(--tg-theme-text-color)',
    				subtitle: 'var(--tg-theme-subtitle-text-color)',
    				accent: 'var(--tg-theme-accent-text-color)'
    			},
    			button: {
    				DEFAULT: 'var(--tg-theme-button-color)',
    				foreground: 'var(--tg-theme-button-text-color)'
    			},
    			desctructive: 'var(--tg-theme-desctructive-text-color)',
    			header: 'var(--tg-theme-header-bg-color)',
    			hint: 'var(--tg-theme-hint-color)',
    			link: 'var(--tg-theme-link-color)',
    			section: {
    				DEFAULT: 'var(--tg-theme-section-bg-color)',
    				background: 'var(--tg-theme-section-bg-color)'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },
	plugins: [require('tailwindcss-animate')],
}
export default config
