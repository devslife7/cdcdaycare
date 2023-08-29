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
                primary: {
                    DEFAULT: "#029AFF",
                    50: "#E5F5FF",
                    100: "#B8E2FF",
                    200: "#8AD0FF",
                    300: "#5DBEFF",
                    400: "#2FACFF",
                    500: "#029AFF",
                    600: "#0081D6",
                    700: "#0068AD",
                    800: "#005085",
                    900: "#00375C",
                },
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
