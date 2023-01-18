import { AppContext, AppProps } from "next/app"
import Layout from "@/components/Layout/Layout"

import "@/styles/tailwind.css"
import "@/styles/style.css"

import Seo from "@/components/Seo"
import { initialSeo } from "@/constants/seo"
import { getSiteContent } from "@/libs/site"
import { SiteContext, SiteContextType } from "context/site"
import { ThemeProvider } from "next-themes"
import GoogleAnalytics from "@/components/GoogleAnalytics"
import Alert, { alertRef } from "@/components/Alert"
import Search, { searchRef } from "@/components/Search"

export default function MyCustomApp({
  Component,
  pageProps,
  categories,
  menu,
}: AppProps & SiteContextType) {
  return (
    <>
      <GoogleAnalytics />
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Alert ref={alertRef} />
        <Search ref={searchRef} />
        <SiteContext.Provider value={{ categories, menu }}>
          <Layout>
            <Seo {...initialSeo} />
            <Component {...pageProps} />
          </Layout>
        </SiteContext.Provider>
      </ThemeProvider>
    </>
  )
}

MyCustomApp.getInitialProps = async (context: AppContext) => {
  const categories = await getSiteContent()

  return { categories, menu: [] }
}
