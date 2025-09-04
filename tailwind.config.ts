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
        },
    },
    plugins: [],
} satisfies Config;


