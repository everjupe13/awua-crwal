import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import { CSSRuleObject } from 'tailwindcss/types/config'

const toPX = (values: any) => Object.fromEntries(values.map((v: string) => [+v, `${v}px`]))
const object0to100px = toPX(Array.from({ length: 101 }).map((_, i) => +i))
const fallbackSansSerifFonts = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Helvetica',
  'Arial',
  'sans-serif'
]


const typography: CSSRuleObject = {
  '.text-medium-48': { // using
    fontSize: '48px',
    lineHeight: '62px',
    fontWeight: '500'
  },
  
  '.text-medium-32': { // using
    fontSize: '32px',
    lineHeight: '48px',
    fontWeight: '500'
  },

  '.text-medium-24': { // using
    fontSize: '24px',
    lineHeight: '38px',
    fontWeight: '500'
  },

  '.text-medium-18': { // using
    fontSize: '18px',
    lineHeight: '28px',
    fontWeight: '500'
  },

  '.text-medium-16': { // using
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '500'
  },

  '.text-medium-14': { // using
    fontSize: '14px',
    lineHeight: '22px',
    fontWeight: '500'
  },

  '.text-regular-18': {
    fontSize: '18px',
    lineHeight: '25px',
    fontWeight: '400'
  }
}

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: undefined,

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      borderColor: {
        DEFAULT: 'transparent'
      },

      scale: {
        101: '1.01'
      }
    },

    screens: {
      // xs: '0',
      // sm: '640px',
      // md: '768px',
      // lg: '1024px',
      // xl: '1280px',
      // '2xl': '1536px'

      xl: { max: '1529.99px' },
      lg: { max: '1199.99px' },
      md: { max: '991.99px' },
      sm: { max: '767.99px' },
      xs: { max: '575.99px' },
    },

    fontSize: undefined,

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#FFFFFF',
      zinc: '#E5E5E5',
      gray: {
        DEFAULT: '#191919',
        second: '#252525'
      },
      lightgray: '#BDBFBE',
      tapestry: '#DDADB5',
      green: {
        DEFAULT: '#6CEABD',
        'button-pressed': '#56BB97'
      },
      pink: {
        DEFAULT: '#FFBEC9',
        hover: '#FFCBD4'
      },
      danger: '#DA1C1C',
      red: '#FF3B30'
    },

    spacing: object0to100px,

    borderWidth: {
      DEFAULT: '1px',
      ...object0to100px
    },

    borderRadius: {
      ...object0to100px,
      full: '9999px'
    },

    fontFamily: {
      sans: ['Gilroy', ...fallbackSansSerifFonts],
      hauora: ['Hauora', ...fallbackSansSerifFonts]
    }
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities(typography)
    }),
  ],
}
export default config
