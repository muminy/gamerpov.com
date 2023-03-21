import { AxiosError } from "axios"
import { CommentType } from "./comment"
import { WPImage } from "./wpgraphql"

export type ErrorResponseType = {
  //
  status: number
}

export type ErrorCommonType = {
  message?: string
  error: AxiosError<ErrorResponseType>
}


export enum BgColorTypes {
  DARK = "DARK",
  DEFAULT = "DEFAULT",
  PRIMARY = "PRIMARY",
}
export type CategoryType = {
  id: number
  name: string
  slug: string
  showmenu: boolean
  image: {
    sourceUrl: string
    title: string
  }
}

export type MenuType = {
  href: string
  title: string
}
export type TagType = {
  name: string
  slug: string
  count: number
}

export type NameValue = {
  name: string
  value?: string | number
}
export type PostType = {
  commentCount: number
  date: string
  excerpt: string
  readingTime: number
  slug: string
  tags: TagType[]
  comments: CommentType[]
  postId: number
  title: string
  content: string
  categories: CategoryType[]
  author: {
    name: string
    description: string
  }
  image: WPImage
}
