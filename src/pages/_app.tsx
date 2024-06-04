import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import localFont from 'next/font/local'

import '@/styles/globals.css'
import '@radix-ui/themes/styles.css'

const titleFont = localFont({ src: '../fonts/title.woff2' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BentoCraft</title>
      </Head>
      <ThemeProvider attribute="class">
        <Theme>
          <main>
            <header className="flex h-screen flex-col items-center bg-orient-700 p-10">
              <div className="flex max-w-[724px] flex-grow flex-col items-center justify-center space-y-10">
                <h1 className={`${titleFont.className} text-6xl text-white`}>
                  BENTO CRAFT
                </h1>
                <p className="text-center leading-6 text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-center leading-6 text-white">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <a
                  href="#main"
                  className="rounded-md border-2 border-transparent bg-orient-900 p-6 uppercase text-white transition-all hover:border-white hover:bg-orient-700"
                >
                  Let&apos;s craft
                </a>
              </div>
            </header>
            <div className="min-h-screen">
              <Component {...pageProps} />
            </div>
          </main>
        </Theme>
      </ThemeProvider>
    </>
  )
}
