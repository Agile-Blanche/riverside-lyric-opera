import type { Config } from "tailwindcss";

export default {
    content: ['./src/**/*.{ts,tsx,js,jsx}'],
    theme: {
        extend: {
            fontFamily: {
                body: ["var(--font-poppins)", "sans-serif"], // default
                accent: ['Open Sans Condensed', 'serif'],
                subtitle: ['var(--font-sarabun)', 'serif'],
            },
            colors: {
                brand: {
                    turquoise: "#ecefee", // almost white
                    orange: "#ff5f33",
                    cream: "#eaedec",
                    black: "#1f2937",
                    lilac: "#ded7ea",
                    amber: "#a9451f"
                }
            }
        },
    },
    plugins: [],
} satisfies Config;


