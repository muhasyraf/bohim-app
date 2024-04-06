import forms from "@tailwindcss/forms";
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1440px",
            },
        },
        extend: {
            fontFamily: {
                sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
            },
            colors: {
                "bohim-blue": "#007EA7",
                "bohim-sky": "#55C4CA",
                "bohim-snow": "#FDFAFA",
                "bohim-jet": "#2D2E2E",
                "bohim-light-blue": "#E7F3F3",
                "bohim-cream-white": "#F6FFFF",
            },
            textShadow: {
                sm: "0 1px 2px var(--tw-shadow-color)",
                DEFAULT: "0 2px 4px var(--tw-shadow-color)",
                lg: "0 8px 16px var(--tw-shadow-color)",
            },
        },
    },

    plugins: [
        forms,
        require("tailwindcss-animate"),
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    "text-shadow": (value) => ({
                        textShadow: value,
                    }),
                },
                { values: theme("textShadow") }
            );
        }),
    ],
};
