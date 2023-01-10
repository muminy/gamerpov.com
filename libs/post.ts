import { toPostData } from "@/helpers/mapper"
import {
  QUERY_ALL_POSTS,
  QUERY_GET_HOME_POSTS,
  QUERY_POST_BY_SLUG,
} from "data/posts"
import { getApolloClient } from "./apollo"

export function mapPostData(post: object) {
  const data = { ...post }

  return data
}

export async function getAllPosts() {
  const apolloClient = getApolloClient()

  const data = await apolloClient.query({
    query: QUERY_GET_HOME_POSTS,
  })

  const posts = data?.data.posts.edges.map(({ node = {} }) => node)
  const left = data?.data.left.edges.map(({ node = {} }) => node)

  return {
    posts: toPostData(posts),
    left: toPostData(left),
  }
}

export async function getPostBySlug(slug: string) {
  const apolloClient = getApolloClient()

  let postData

  try {
    postData = await apolloClient.query({
      query: QUERY_POST_BY_SLUG,
      variables: {
        slug,
      },
    })
  } catch (e) {
    throw e
  }

  if (!postData?.data.post) return { post: undefined }

  const post = toPostData([postData?.data.post])[0]

  return {
    post,
  }
}
