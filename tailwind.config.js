/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';

module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        colors: {
            black: 'black',
            white: 'white',
            green: {
                100: '#fefffa',
                200: '#fbfff0',
                300: '#f8ffe5',
                400: '#f2ffcc',
                500: '#e5ff99',
                600: '#d8ff66',
                700: '#d1ff4c',
                800: '#caff33',
            },
            'white-shades': {
                100: '#fcfcfd',
                200: '#f7f7f8',
                300: '#f1f1f3',
                400: '#e4e4e7',
            },
            grey: {
                100: '#bfbfbf',
                200: '#b3b3b3',
                300: '#98989a',
                400: '#656567',
                500: '#59595a',
                600: '#4c4c4d',
                700: '#333333',
                800: '#262626',
                900: '#1c1c1c',
                1000: '#191919',
            },
        },
        fontFamily: {
            sans: ['Lexend', 'sans-serif'],
        },
        extend: {
            bgGradientDeg: {
                20: '20deg',
            },
        },
    },
    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'bg-gradient': (angle) => ({
                        'background-image': `linear-gradient(${angle} , var(--tw-gradient-stops))`,
                    }),
                },
                {
                    values: Object.assign(
                        theme('bgGradientDeg', {}), // name of config key. Must be unique
                        {
                            10: '10deg', // bg-gradient-10
                            15: '15deg',
                            20: '20deg',
                            25: '25deg',
                            30: '30deg',
                            45: '45deg',
                            60: '60deg',
                            90: '90deg',
                            120: '120deg',
                            135: '135deg',
							240: '240deg',
                        }
                    ),
                }
            );
        }),
    ],
};
