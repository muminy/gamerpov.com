import { WPTage } from "@/types/wpgraphql"
import { TagType } from "@/types/index"

export function toTag({ ...common }: WPTage): TagType {
  return common
}
