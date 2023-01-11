import { QUERY_ALL_CATEGORIES, QUERY_CATEGORY_BY_SLUG } from "data/categories"
import { getApolloClient } from "./apollo"

export async function getSiteContent() {
  const apolloClient = getApolloClient()

  let categoryData

  try {
    categoryData = await apolloClient.query({
      query: QUERY_ALL_CATEGORIES,
    })
  } catch (e) {
    throw e
  }

  const categories = categoryData?.data.categories.edges.map(
    ({ node = {} }) => node
  )

  return categories ?? []
}

export async function getCategoryBySlug(slug: string) {
  const apolloClient = getApolloClient()

  let categoryData

  try {
    categoryData = await apolloClient.query({
      query: QUERY_CATEGORY_BY_SLUG,
      variables: {
        slug,
      },
    })
  } catch (e) {
    throw e
  }

  return {
    category: categoryData?.data.category,
  }
}
