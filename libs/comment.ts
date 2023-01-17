import { CreateCommentType } from "@/types/comment"
import { MUTATION_CREATE_COMMENT } from "data/posts"
import { getApolloClient } from "./apollo"

export async function createComment({
  commentOn,
  content,
  authorEmail,
  author,
}: CreateCommentType) {
  const apolloClient = getApolloClient()

  try {
    await apolloClient.mutate({
      mutation: MUTATION_CREATE_COMMENT,
      variables: { commentOn, content, authorEmail, author },
    })
  } catch (e) {
    throw e
  }

  return null
}
