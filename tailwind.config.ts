import type { Config } from "tailwindcss";

export default {
    content: ['./src/**/*.{ts,tsx,js,jsx}'],
    theme: {
        extend: {
            fontFamily: {
                body: ["var(--font-alike)", "sans-serif"], // default
                accent: ['var(--font-poppins)', 'serif'],
            },
        },
    },
    plugins: [],
} satisfies Config;


