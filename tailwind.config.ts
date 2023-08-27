import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#029AFF",
                secondary: "#012740",
                backgroundGray: "#f5f5f5",
                purple: {
                    DEFAULT: "#D164F5",
                },
                green: {
                    DEFAULT: "#9dd459",
                },
                orange: {
                    DEFAULT: "#ffb100",
                },
            },
        },
    },
    plugins: [],
}
export default config
