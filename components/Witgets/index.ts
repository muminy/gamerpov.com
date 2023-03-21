import { PostType, TagType } from "@/types/index"
import { ReactNode } from "react"
import { NotFoundProps } from "../NotFound"
import { TitleProps } from "../Title"

export type TextListProps = {
  className?: string
  items: PostType[]
  title?: TitleProps
  notFound?: NotFoundProps
}

export type CommonProps = {
  className?: string
}

export type BlogListProps = CommonProps & {
  repeaterClassName?: string
  blogType?: "DEFAULT" | "IMAGE"
  items: PostType[]
  renderHeader?: ReactNode
  notFound?: NotFoundProps
}

export type ShareProps = JSX.IntrinsicElements["div"] & {
  text: string
}

export type TagListProps = JSX.IntrinsicElements["div"] & {
  tags: TagType[]
}

export { default as CategoryList } from "./CategoryList"
export { default as BlogList } from "./BlogList"
export { default as TextList } from "./TextList"
export { default as Share } from "./Share"
