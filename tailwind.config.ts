
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ["var(--font-inter)"],
                outfit: ["var(--font-outfit)"],
                space: ["var(--font-space)"],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                neon: {
                    blue: "#0ea5e9", // Sky 500
                    cyan: "#06b6d4", // Cyan 500
                    amber: "#f59e0b", // Amber 500
                }
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)",
            },
            animation: {
                'scan': 'scan 4s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                scan: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                }
            }
        },
    },
    plugins: [],
};
export default config;
