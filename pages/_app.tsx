import App, { AppContext, AppProps } from "next/app"
import Layout from "@/components/Layout/Layout"

import "@/styles/tailwind.css"
import "@/styles/style.css"
import Seo from "@/components/Seo"
import { initialSeo } from "@/constants/seo"
import { getSiteContent } from "@/libs/site"
import { SiteContext, SiteContextType } from "context/site"

export default function MyCustomApp({
  Component,
  pageProps,
  categories,
  menu,
}: AppProps & SiteContextType) {
  return (
    <SiteContext.Provider value={{ categories, menu }}>
      <Layout>
        <Seo {...initialSeo} />
        <Component {...pageProps} />
      </Layout>
    </SiteContext.Provider>
  )
}

MyCustomApp.getInitialProps = async (context: AppContext) => {
  const categories = await getSiteContent()

  return { categories, menu: [] }
}
