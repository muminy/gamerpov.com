import { PostType, WPPostTypes } from "@/types/post"

export function toPostData(items: WPPostTypes[]): PostType[] {
  return items.map((item) => {
    const { featuredImage, author, categories, ...common } = item
    const data: PostType = { ...common, categories: [] }

    if (featuredImage) {
      data.image = featuredImage.node
    }

    if (author) {
      data.author = author.node
    }

    if (categories.nodes) {
      data.categories = categories.nodes
    }

    return data
  })
}
