import { CommentType, WPCommentType } from "./comment"

export type WPImageTypes = {
  altText: string
  caption?: string
  id: string
  sizes: string
  sourceUrl: string
}

export type WPAuthor = {
  description?: string
  email: string
  name: string
}

export type CategoriesTypes = {
  name: string
  slug: string
  id: string
  categoryId: number
}

export type WPPostTypes = {
  featuredImage: {
    node: WPImageTypes
  }
  categories: {
    nodes: CategoriesTypes[]
  }
  author: {
    node: WPAuthor
  }
  title: string
  content: string
  slug: string
  excerpt: string
  comments: {
    nodes: WPCommentType[]
  }
  postId: number
  date: string
  readingTime: string
}

export type PostType = {
  title: string
  postId: number
  content?: string
  author?: WPAuthor
  image?: WPImageTypes
  slug: string
  excerpt: string
  date: string
  comments: CommentType[]
  categories: CategoriesTypes[]
  readingTime: string
}
