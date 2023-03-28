import { SeoProps } from "@/components/Seo"
import { domain } from "./default"

export const initialSeo: SeoProps = {
  image: `${domain}/api/og/default`,
  title: "GamerPov",
  keywords: "esport news, counter strinke 2, esport news",
  description: "Brings You E-sports news, breaking news and highlights.",
  twitter: {
    site: "@Gamerpovcom",
    cardType: "summary_large_image",
  },
}