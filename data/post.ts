import { gql } from "@apollo/client"
import { COMMENT_FRAGMENTS } from "./comment"
import { FRAGMENTS_TAG } from "./tag"

const FRAGMENTS_POST = gql`
  ${COMMENT_FRAGMENTS}
  ${FRAGMENTS_TAG}
  fragment PostFields on Post {
    author {
      node {
        name
        description
      }
    }
    featuredImage {
      node {
        sourceUrl
        title
      }
    }
    categories {
      nodes {
        categoryId
        count
        image {
          node {
            sourceUrl
            title
          }
        }
        name
        slug
      }
    }
    tags {
      nodes {
        ...TagFields
      }
    }
    comments {
      nodes {
        ...CommentFields
      }
    }
    postId
    date
    excerpt
    commentCount
    slug
    title
  }
`

export const QUERY_POSTS = gql`
  ${FRAGMENTS_POST}
  query Posts {
    posts(first: 100) {
      nodes {
        ...PostFields
      }
    }
  }
`

export const QUERY_SEARCH_POSTS = gql`
  ${FRAGMENTS_POST}
  query SearchPosts($search: String) {
    posts(where: { search: $search }) {
      nodes {
        ...PostFields
      }
    }
  }
`

export const QUERY_POSTS_BY_CATEGORY_ID = gql`
  ${FRAGMENTS_POST}
  query PostsByCategoryId($id: Int!) {
    posts(where: { categoryId: $id }) {
      nodes {
        ...PostFields
      }
    }
  }
`

export const QUERY_POSTS_BY_TAG_NAME = gql`
  ${FRAGMENTS_POST}
  query PostsByTagName($tag: String!) {
    posts(where: { tag: $tag }) {
      nodes {
        ...PostFields
      }
    }
  }
`

export const QUERY_GET_POST_BY_SLUG = gql`
  ${FRAGMENTS_POST}
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      ...PostFields
      content
    }
  }
`
