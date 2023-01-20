const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./app/**/*.{js,jsx}",
        "./pages/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        plugin(({ addUtilities }) => {
            addUtilities({
                '.flex-center': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }
            })
        })
    ]
}
