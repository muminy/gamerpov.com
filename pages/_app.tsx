import type { AppProps } from "next/app"
import Layout from "@/components/Layout/Layout"

import "@/styles/tailwind.css"
import "@/styles/style.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
