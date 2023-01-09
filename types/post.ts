export type WPImageTypes = {
  altText: string
  caption?: string
  id: string
  sizes: string
  sourceUrl: string
}

export type WPPostTypes = {
  featuredImage: {
    node: WPImageTypes
  }
  title: string
  content: string
}

export type PostType = {
  title?: string
  content?: string
  image?: WPImageTypes
}
