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
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
