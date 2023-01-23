import { AxiosError } from "axios"
import { CommentType } from "./comment"
import { WPImage, WPPost } from "./wpgraphql"

export type ErrorResponseType = {
  //
  status: number
}

export type ErrorCommonType = {
  message?: string
  error: AxiosError<ErrorResponseType>
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

export type PostType = {
  commentCount: number
  comments: CommentType[]
  date: string
  readingTime: number
  slug: string
  postId: number
  pinned: boolean
  excerpt: string
  title: string
  content: string
  categories: CategoryType[]
  author: {
    name: string
    description: string
  }
  image: WPImage
}
