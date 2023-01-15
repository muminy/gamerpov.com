import { IconTypes } from "@/icons/index"
import { PostType } from "@/types/post"
import Author from "./Author"
import Share from "./Share"
import TextList from "./TextList"

const Widgets = {
  TextList,
  Author,
  Share,
}

export type TextListProps = {
  items: PostType[]
  title?: string
  icon?: IconTypes
  onClick?(): void
  moreText?: string
}

export type AuthorProps = {
  name?: string
  description?: string
} & JSX.IntrinsicElements["div"]

export type ShareProps = JSX.IntrinsicElements["div"] & {
  text: string
}

export default Widgets
