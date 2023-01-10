/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
  theme: {
      colors: {
        primary: '#6A24FF',
        primaryLight: '#0090E3',
        secondary: '#FF8D24',
        black: '#000F17',
        gray: '#999999',
        lightgray: '#D6D7DC',
        darkGray: '#66667D',
        white: '#FFFFFF',
        lightblue: '#F5F7FD',
        lightCrimson: '#FF5F74',
        navyBlue: '#00507D',
        dark: '#000B12',
        green: '#00D06F',
        primaryExtraLight: '#F4F2FF',
      },
      spacing: {
        space5: '0.5rem',
        space12: '1.2rem',
        space16: '1.6rem',
        space20: '2rem',
        space24: '2.4rem',
        space28: '2.8rem',
        space32: '3.2rem',
        space34: '3.4rem',
        space40: '4rem',
      },

    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
      rubik: ['Rubik', 'sans-serif'],
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        html: {
          fontSize: '62.5%',
        },
        body: {
          fontFamily: theme('fontFamily.nunito'),
          fontSize: '1.6rem',
          // fontWeight: '400',
          fontStyle: 'normal',
          lineHeight: '2.6rem',
          color: theme('colors.darkGray'),
        },
        h1: {
          fontFamily: theme('fontFamily.rubik'),
          fontSize: '4.8rem',
          fontWeight: '700',
          lineHeight: '7.2rem',
          color: theme('colors.black'),
        },
        h2: {
          fontFamily: theme('fontFamily.rubik'),
          fontSize: '4rem',
          fontWeight: '700',
          lineHeight: '6rem',
          color: '#31375E',
          letterSpacing: '0.025em',
        },
        h3: {
          fontFamily: theme('fontFamily.rubik'),
          fontSize: '3.2rem',
          fontWeight: '700',
          lineHeight: '6rem',
          color: '#31375E',
          letterSpacing: '0.025em',
        },
        h4: {
          fontFamily: theme('fontFamily.rubik'),
          fontSize: '2.4rem',
          fontWeight: '700',
          lineHeight: '3.6rem',
          color: '#31375E',
          letterSpacing: '.05em',
        },
        h5: {
          fontFamily: theme('fontFamily.rubik'),
          fontSize: '1.6rem',
          fontWeight: '500',
          lineHeight: '2.4rem',
          color: '#31375E',
          letterSpacing: '.05em',
        },
        h6: {
          fontFamily: theme('fontFamily.rubik'),
          fontSize: '1.2rem',
          fontWeight: '500',
          lineHeight: '1.8rem',
          color: '#31375E',
          letterSpacing: '.05em',
        },
      })
    }),
  ],
}
