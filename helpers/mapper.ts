import { CommentType, WPCommentType } from "@/types/comment"
import { PostType, WPPostTypes } from "@/types/post"

export function toComment(items: WPCommentType[]): CommentType[] {
  return items.map(({ author, ...props }) => ({
    ...props,
    author: { ...author.node },
  }))
}

export function toPostData(items: WPPostTypes[]): PostType[] {
  return items.map((item) => {
    const { featuredImage, author, categories, comments, ...common } = item
    const data: PostType = { ...common, categories: [], comments: [] }

    if (featuredImage) {
      data.image = featuredImage.node
    }

    if (author) {
      data.author = author.node
    }

    if (categories.nodes) {
      data.categories = categories.nodes
    }

    if (comments.nodes) {
      const commentList: CommentType[] = toComment(comments.nodes)
      data.comments = commentList
    }

    return data
  })
}
