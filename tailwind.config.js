/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#009AEE",
                "primary-light": "#C6F1FF",
                "primary-dark": "#1484CD",
                secondary: "#25CBA1",
                "secondary-dark": "#1EAA87",
                tertiary: "#111928",
                "tertiary-dark": "#637381",
                "grey-light": "#E5E7EB",
                "grey-dark": "#6B7280",
                warning: "#9D5425",
                "warning-light": "#D0915C",
                yellow: "#FBBF24",
                "yellow-light": "#FFFBEB",
                green: "#22AD5C",
                "green-light": "#DAF8E6",
                red: "#F23030",
                "red-light": "#FEF3F3",
                blue: "#0B76B7",
                "blue-light": "#E9F9FF",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
