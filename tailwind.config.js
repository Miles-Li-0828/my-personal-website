/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                fadeIn: "fadeIn 1.5s ease-in-out",
                slideIn: "slideIn 1.5s ease-in-out",
                bounceIn: "bounceIn 1.5s ease-in-out",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                slideIn: {
                    "0%": { transform: "translateX(100%)", opacity: 0 },
                    "100%": { transform: "translateX(0)", opacity: 1 },
                },
                bounceIn: {
                    "0%, 100%": { transform: "scale(0.8)", opacity: 0 },
                    "50%": { transform: "scale(1.1)", opacity: 1 },
                },
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [],
};
