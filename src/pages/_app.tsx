import "@/styles/globals.css";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { ThemeProvider } from "next-themes";

import type { AppProps } from "next/app";
import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }): ReactNode {
  return (
    <main>
      <header className="border-b-2 flex items-center justify-between px-10 py-6">
        <h1>BentoGenerator</h1>
      </header>
      {children}
    </main>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Theme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </ThemeProvider>
  );
}
