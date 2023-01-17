import { CommentType } from "@/types/comment"

export type CommentProps = {
  className?: string
  items: CommentType[]
  postId: number
}

export { default } from "./Comment"
