import { useRouter } from "next/router"
import Script from "next/script"
import { useEffect } from "react"
import { pageview } from "@/libs/ga"

const GA_TRACKING_ID = "G-JYX9TG6V24"

export default function GoogleAnalytics() {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url, GA_TRACKING_ID)
    }

    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
    </>
  )
}
