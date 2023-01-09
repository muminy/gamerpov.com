import { toPostData } from "@/helpers/mapper"
import { QUERY_ALL_POSTS } from "data/posts"
import { getApolloClient } from "./apollo"

export function mapPostData(post: object) {
  const data = { ...post }

  return data
}

export async function getAllPosts() {
  const apolloClient = getApolloClient()

  const data = await apolloClient.query({
    query: QUERY_ALL_POSTS,
  })

  const posts = data?.data.posts.edges.map(({ node = {} }) => node)

  return {
    posts: Array.isArray(posts) && toPostData(posts),
  }
}
