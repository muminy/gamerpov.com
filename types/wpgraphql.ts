import { WPCommentType } from "./comment"

export type WPCategory = {
  categoryId: number
  name: string
  slug: string
  showmenu: boolean
  image: {
    node: {
      sourceUrl: string
      title: string
    }
  }
}

export type WPAuthor = {
  name: string
  description: string
}
export type WPImage = {
  sourceUrl: string
  title: string
}

export type WPPost = {
  author: {
    node: WPAuthor
  }
  featuredImage?: {
    node: WPImage
  }
  categories: {
    nodes: WPCategory[]
  }
  comments: {
    nodes: WPCommentType[]
  }
  excerpt: string
  date: string
  commentCount: number
  readingTime: number
  slug: string
  title: string
  content: string
}
