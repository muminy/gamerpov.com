import { gql } from "@apollo/client"

export const COMMENT_FRAGMENTS = gql`
  fragment CommentFields on Comment {
    author {
      node {
        email
        name
      }
    }
    content
    commentId
    id
    status
    date
  }
`
