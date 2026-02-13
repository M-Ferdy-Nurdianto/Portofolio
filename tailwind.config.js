/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: 'hsl(220, 70%, 97%)',
                    100: 'hsl(220, 70%, 92%)',
                    200: 'hsl(220, 70%, 85%)',
                    300: 'hsl(220, 70%, 75%)',
                    400: 'hsl(220, 70%, 65%)',
                    500: 'hsl(220, 70%, 55%)',
                    600: 'hsl(220, 70%, 45%)',
                    700: 'hsl(220, 70%, 35%)',
                    800: 'hsl(220, 70%, 25%)',
                    900: 'hsl(220, 70%, 15%)',
                },
                accent: {
                    50: 'hsl(280, 70%, 97%)',
                    100: 'hsl(280, 70%, 92%)',
                    200: 'hsl(280, 70%, 85%)',
                    300: 'hsl(280, 70%, 75%)',
                    400: 'hsl(280, 70%, 65%)',
                    500: 'hsl(280, 70%, 55%)',
                    600: 'hsl(280, 70%, 45%)',
                    700: 'hsl(280, 70%, 35%)',
                    800: 'hsl(280, 70%, 25%)',
                    900: 'hsl(280, 70%, 15%)',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'gradient': 'gradient 8s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                gradient: {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    'from': {
                        'box-shadow': '0 0 20px rgba(139, 92, 246, 0.5)',
                    },
                    'to': {
                        'box-shadow': '0 0 30px rgba(139, 92, 246, 0.8)',
                    },
                },
            },
        },
    },
    plugins: [],
}
