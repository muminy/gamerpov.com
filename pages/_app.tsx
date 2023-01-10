import type { AppProps } from "next/app"
import Layout from "@/components/Layout/Layout"

import "@/styles/tailwind.css"
import "@/styles/style.css"
import Seo from "@/components/Seo"
import { initialSeo } from "@/constants/seo"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Seo {...initialSeo} />
      <Component {...pageProps} />
    </Layout>
  )
}
