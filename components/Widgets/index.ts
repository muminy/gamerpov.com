import { IconTypes } from "@/icons/index"
import { PostType } from "@/types/post"
import TextList from "./TextList"

const Widgets = {
  TextList,
}

export type TextListProps = {
  items: PostType[]
  title?: string
  icon?: IconTypes
}

export default Widgets