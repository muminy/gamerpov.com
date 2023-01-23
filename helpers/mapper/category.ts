import { WPCategory } from "@/types/wpgraphql"
import { CategoryType } from "@/types/index"

export function toCategory({
  categoryId,
  image,
  ...common
}: WPCategory): CategoryType {
  const data = { id: categoryId, ...common } as CategoryType

  if (image) {
    data.image = image.node
  }

  return data
}
