import { SeoProps } from "@/components/Seo"
import { domain } from "./default"

export const initialSeo: SeoProps = {
  image: `${domain}/api/og/default`,
  title: "Gamerpov.com E-sports news, breaking news and highlights",
  description:
    "Gamerpov.com brings you E-sports news, breaking news and highlights.",
  twitter: {
    site: "@Gamerpovcom",
    cardType: "summary_large_image",
  },
}