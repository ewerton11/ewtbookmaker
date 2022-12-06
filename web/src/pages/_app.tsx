import type { AppProps } from "next/app"
import Head from "next/head"
import GlobalStyle from "../styles/global"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>
        <Head>
          <title>Ewtbookmaker</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            rel="stylesheet"
          />
        </Head>
      </div>

      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}
