import { APOLLO_URL } from "@/constants/website"
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"

import { removeLastTrailingSlash } from "./utils"
let client: any

/**
 * getApolloClient
 */

export function getApolloClient() {
  if (!client) {
    client = _createApolloClient()
  }
  return client
}

/**
 * createApolloClient
 */

export function _createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: removeLastTrailingSlash(APOLLO_URL),
    }),
    cache: new InMemoryCache({
      typePolicies: {
        RootQuery: {
          queryType: true,
        },
        RootMutation: {
          mutationType: true,
        },
      },
    }),
  })
}
