import { AppContext, AppProps } from "next/app"
import Layout from "@/components/Layout/Layout"

import "@/styles/tailwind.css"
import "@/styles/style.css"

import Seo from "@/components/Seo"
import { initialSeo } from "@/constants/seo"
import { getCategories } from "@/services/category"
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

MyCustomApp.getInitialProps = async () => {
  const categories = await getCategories()

  return { categories, menu: categories.filter((item) => item.showmenu) }
}
