import { PostType } from "@/types/index"

export type BlogType = {
  type?: "IMAGE" | "DEFAULT"
} & PostType

export { default } from "./Blog"
