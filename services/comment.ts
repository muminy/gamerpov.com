import { CreateCommentType } from "@/types/comment"
import { MUTATION_CREATE_COMMENT } from "@/data/comment"
import client from "@/libs/apollo"

export async function createComment({
  commentOn,
  content,
  authorEmail,
  author,
}: CreateCommentType) {
  return await client.mutate({
    mutation: MUTATION_CREATE_COMMENT,
    variables: { commentOn, content, authorEmail, author },
  })
}
