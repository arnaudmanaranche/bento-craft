import { Button } from '@/components/Button/Button'
import '@/styles/globals.css'
import { CubeIcon } from '@radix-ui/react-icons'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Toaster, toast } from 'sonner'

export default function App({ Component, pageProps }: AppProps) {
  const { push } = useRouter()

  return (
    <Theme>
      <Toaster />
      <Head>
        <title>BentoCraft</title>
      </Head>
      <main>
        <div className="relative flex h-screen flex-col items-center bg-white p-10">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full stroke-gray-200 opacity-50 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="FCFCFD"
                width="200"
                height="200"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none"></path>
              </pattern>
            </defs>
            <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth="0"
              ></path>
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth="0"
              fill="url(#FCFCFD)"
            ></rect>
          </svg>
          <div className="z-10 flex max-w-[724px] flex-grow flex-col items-center justify-center space-y-10">
            <h1 className="relative font-serif text-6xl font-bold">
              <span className="homepage-title">BentoCraft</span>
              <div className="absolute -top-12 left-0 right-0 flex justify-center md:-right-14 md:-top-4 md:left-auto">
                <p className="w-fit rounded-full bg-yellow-100 p-2 text-sm text-black">
                  Beta
                </p>
              </div>
            </h1>
            <p className="text-center leading-6 text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-center leading-6 text-black">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <Button
              onClick={() => {
                if (window.matchMedia('(min-width: 768px)').matches) {
                  push('/#main')
                } else {
                  toast.info('Open the app on desktop')
                }
              }}
              icon={<CubeIcon />}
              iconPosition="right"
            >
              Let&apos;s craft
            </Button>
          </div>
        </div>
        <ThemeProvider attribute="class">
          {/* Handle backgrounds dark mode here */}
          <div className="min-h-screen bg-[#ffffff] dark:bg-[#111111]">
            <Component {...pageProps} />
          </div>
        </ThemeProvider>
      </main>
    </Theme>
  )
}
