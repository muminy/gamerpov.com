import { AppContext, AppProps } from "next/app"
import Layout from "@/components/Layout/Layout"

import "@/styles/tailwind.css"
import "@/styles/style.css"

import Seo from "@/components/Seo"
import { initialSeo } from "@/constants/seo"
import { getSiteContent } from "@/libs/site"
import { SiteContext, SiteContextType } from "context/site"
import { ThemeProvider } from "next-themes"
import Script from "next/script"

export default function MyCustomApp({
  Component,
  pageProps,
  categories,
  menu,
}: AppProps & SiteContextType) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-71914973-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'UA-71914973-1');
        `}
      </Script>
      <SiteContext.Provider value={{ categories, menu }}>
        <Layout>
          <Seo {...initialSeo} />
          <Component {...pageProps} />
        </Layout>
      </SiteContext.Provider>
    </ThemeProvider>
  )
}

MyCustomApp.getInitialProps = async (context: AppContext) => {
  const categories = await getSiteContent()

  return { categories, menu: [] }
}
