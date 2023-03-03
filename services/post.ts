import { toPost } from "@/helpers/mapper/post"
import client from "@/lib/apollo"
import { WPPost } from "@/types/wpgraphql"
import {
  QUERY_GET_POST_BY_SLUG,
  QUERY_POSTS,
  QUERY_POSTS_BY_CATEGORY_ID,
  QUERY_SEARCH_POSTS,
} from "data/post"

export type WPPList = {
  posts: {
    nodes: WPPost[]
  }
}

export type WPPostDetail = {
  post: WPPost
}

export async function getAllPosts() {
  try {
    const heroLength = 8
    const response = await client.query<WPPList>({ query: QUERY_POSTS })
    let remaining

    const postList = response.data.posts.nodes.map(toPost)
    const hero = postList.slice(0, heroLength)

    if (postList.length > heroLength) {
      remaining = postList.slice(heroLength, postList.length)
    }

    return { hero, remaining: remaining ?? [] }
  } catch (e) {
    return { hero: [], remaining: [] }
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const response = await client.query<WPPostDetail>({
      query: QUERY_GET_POST_BY_SLUG,
      variables: {
        slug,
      },
    })

    return toPost(response.data.post)
  } catch (e) {
    return null
  }
}

export async function getPostCategory(id: number) {
  try {
    const response = await client.query<WPPList>({
      query: QUERY_POSTS_BY_CATEGORY_ID,
      variables: {
        id,
      },
    })

    return response.data.posts.nodes.map(toPost)
  } catch (e) {
    return []
  }
}

export async function getSearchPosts(search: string) {
  try {
    if (search.length < 3) {
      return []
    }

    const response = await client.query<WPPList>({
      query: QUERY_SEARCH_POSTS,
      variables: {
        search,
      },
    })

    return response.data.posts.nodes.map(toPost)
  } catch (e) {
    return []
  }
}
