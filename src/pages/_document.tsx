import clsx from 'clsx'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head />
      <body
        className={clsx(
          'antialiased md:overflow-auto',
          process.env.NODE_ENV === 'development'
            ? 'overflow-auto'
            : 'overflow-hidden'
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
