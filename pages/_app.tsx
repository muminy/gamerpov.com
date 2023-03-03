import { AppProps } from "next/app"
import Layout from "@/components/Layout/Layout"

import "@/styles/global.css"

import { getCategories } from "@/services/category"
import { SiteContextType, SiteProvider } from "context/site"
import { ThemeProvider } from "next-themes"
import { useEffect, useState } from "react"
import { PostType } from "../types"
import GoogleAnalytics from "@/components/GoogleAnalytics"
import Modal, { modalRef } from "@/components/Modal"
import Alert, { alertRef } from "@/components/Alert"

type AppCustomProps = AppProps & SiteContextType

export default function MyCustomApp({
  Component,
  pageProps,
  categories,
  menu,
}: AppCustomProps) {
  const [favories, setFavories] = useState<PostType[]>([])

  useEffect(() => {
    const listem = localStorage.getItem("favories")
    const jsonData = listem ? JSON.parse(listem) : []

    if (jsonData.length > 0) {
      setFavories(jsonData)
    }
  }, [])

  const setFavoriList = (posts: PostType[]) => {
    setFavories(posts)
  }

  return (
    <>
      <GoogleAnalytics />
      <ThemeProvider attribute="class" defaultTheme="dark">
        <SiteProvider
          value={{
            categories,
            menu,
            favories,
            setFavories: (posts) => setFavoriList(posts),
          }}
        >
          <Alert ref={alertRef} />
          <Modal ref={modalRef} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SiteProvider>
      </ThemeProvider>
    </>
  )
}

MyCustomApp.getInitialProps = async () => {
  const categories = await getCategories()

  return { categories, menu: categories.filter((item) => item.showmenu) }
}
