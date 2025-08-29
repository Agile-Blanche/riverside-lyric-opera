import type { Config } from "tailwindcss";

export default {
    content: ['./src/**/*.{ts,tsx,js,jsx}'],
    theme: {
        extend: {
            fontFamily: {
                body: ["var(--font-alike)", "sans-serif"], // default
                accent: ['var(--font-montserrat)', 'serif'],
            },
        },
    },
    plugins: [],
} satisfies Config;


