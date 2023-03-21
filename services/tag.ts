import { QUERY_TAG_BY_SLUG } from "@/data/tag"
import { toTag } from "@/helpers/mapper/tag"
import client from "@/lib/apollo"
import { WPTage } from "@/types/wpgraphql"

export type WPTType = {
  tag: WPTage
}

export async function getTagBySlug(slug: string) {
  try {
    const response = await client.query<WPTType>({
      query: QUERY_TAG_BY_SLUG,
      variables: { slug },
    })

    return toTag(response.data.tag)
  } catch (e) {
    return null
  }
}
