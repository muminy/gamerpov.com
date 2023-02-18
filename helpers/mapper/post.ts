import { defaultImage } from "@/constants/default"
import { WPPost } from "@/types/wpgraphql"
import { PostType } from "@/types/index"
import { toCategory } from "./category"
import { toComment } from "./comment"

export function toPost({
  author,
  featuredImage,
  categories,
  comments,
  ...common
}: WPPost): PostType {
  const post = {
    ...common,
    author: author.node,
    image: {
      sourceUrl: defaultImage,
      title: "default_hz_adem",
    },
  } as PostType

  if (featuredImage?.node) {
    post.image = featuredImage.node
  }

  return {
    ...post,
    categories: categories.nodes.map(toCategory),
    comments: toComment(comments.nodes),
  }
}
