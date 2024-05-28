import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orient: {
          '50': '#f3f8f8',
          '100': '#e0eced',
          '200': '#c4d9dd',
          '300': '#9bbfc5',
          '400': '#6b9ca5',
          '500': '#50818a',
          '600': '#456b75',
          '700': '#3f5c65',
          '800': '#374b53',
          '900': '#324147',
          '950': '#1e2a2e',
        },
      },
    },
  },
  plugins: [],
  safelist: [
    // Cols
    'grid-cols-2',
    'grid-cols-3',
    'grid-cols-4',
    'grid-cols-6',
    'grid-cols-5',
    'grid-cols-7',
    'grid-cols-8',
    // Row
    'grid-rows-2',
    'grid-rows-3',
    'grid-rows-4',
    'grid-rows-6',
    'grid-rows-5',
    'grid-rows-7',
    'grid-rows-8',
    // Gap
    'gap-2',
    'gap-3',
    'gap-4',
    'gap-6',
    'gap-5',
    'gap-7',
    'gap-8',
    'gap-9',
    'gap-10',
    'gap-11',
    'gap-12',
    'gap-13',
    'gap-14',
    'gap-15',
    'gap-16',
  ],
}

export default config
