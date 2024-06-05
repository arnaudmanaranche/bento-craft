import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        contentShow: {
          from: {
            opacity: '0',
            transform: 'translate(-50%, -48%) scale(0.96)',
          },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
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
