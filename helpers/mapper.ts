import { PostType, WPPostTypes } from "@/types/post"
import { CategoryType, WPCategoryType } from "@/types/site"

export function toPostData(items: WPPostTypes[]): PostType[] {
  return items.map((item) => {
    const { featuredImage, ...common } = item
    const data: PostType = { ...common }

    if (featuredImage) {
      data.image = featuredImage.node
    }

    return data
  })
}
