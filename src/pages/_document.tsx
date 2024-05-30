import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head />
      <body className="antialiased dark:bg-[#0D0D0D]">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
