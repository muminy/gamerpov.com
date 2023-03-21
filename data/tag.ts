import { gql } from "@apollo/client"

export const FRAGMENTS_TAG = gql`
  fragment TagFields on Tag {
    name
    slug
    count
  }
`

export const QUERY_TAG_BY_SLUG = gql`
  ${FRAGMENTS_TAG}
  query CategoryBySlug($slug: ID!) {
    tag(id: $slug, idType: SLUG) {
      ...TagFields
    }
  }
`
