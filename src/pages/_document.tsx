import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head />
      <body className="overflow-hidden antialiased md:overflow-auto">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
