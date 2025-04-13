/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"], // Adjust based on your project structure
    theme: {
      extend: {
        fontSize: {
          'xxs': ['10px', { lineHeight: '14px' }],
          'xs': ['12px', { lineHeight: '16px' }],
          'sm': ['14px', { lineHeight: '20px' }],
          'base': ['16px', { lineHeight: '24px' }],
          'lg': ['18px', { lineHeight: '28px' }],
          'xl': ['20px', { lineHeight: '30px' }],
          '2xl': ['24px', { lineHeight: '32px' }],
          '3xl': ['30px', { lineHeight: '36px' }],
          '4xl': ['36px', { lineHeight: '40px' }],
          '5xl': ['48px', { lineHeight: '52px' }],
          '6xl': ['60px', { lineHeight: '64px' }],
          '7xl': ['72px', { lineHeight: '80px' }],
          '8xl': ['96px', { lineHeight: '104px' }],
          '9xl': ['128px', { lineHeight: '136px' }],
          'h1': ['64px', { lineHeight: '68px' }],
        },
      },
    },
    plugins: [],
  };
  