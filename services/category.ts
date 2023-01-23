import { toCategory } from "@/helpers/mapper/category"
import client from "@/libs/apollo"
import { WPCategory } from "@/types/wpgraphql"
import { ApolloQueryResult } from "@apollo/client"
import { QUERY_CATEGORIES, QUERY_CATEGORY_BY_SLUG } from "data/category"

export type WPCList = {
  categories: {
    nodes: WPCategory[]
  }
}

export type WPCType = {
  category: WPCategory
}

export async function getCategories() {
  try {
    return await client
      .query({ query: QUERY_CATEGORIES })
      .then((response: ApolloQueryResult<WPCList>) =>
        response.data.categories.nodes.map(toCategory)
      )
  } catch (e) {
    return []
  }
}

export async function getCategoryBySlug(slug: string) {
  try {
    const response = await client.query<WPCType>({
      query: QUERY_CATEGORY_BY_SLUG,
      variables: { slug },
    })

    return toCategory(response.data.category)
  } catch (e) {
    return null
  }
}
