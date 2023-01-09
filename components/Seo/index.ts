export type SeoProps = {
  title?: string
  description?: string
  image?: string
  twitter?: TwitterSeoType
  openGraph?: OpenGraphSeoType
  date?: string
}

export type TwitterSeoType = {
  cardType?: "summary" | "summary_large_image" | "app" | "player"
  site?: string
}

export interface OpenGraphSeoType {
  type?:
    | "article"
    | "website"
    | "profile"
    | "video.other"
    | "video.movie"
    | "video.episode"
    | "video.tv_show"
    | "video.other"
    | "book"
    | "music.song"
    | "music.album"
    | "music.playlist"
    | "music.radio_station"
  site_name?: string
}

export { default } from "./Seo"
