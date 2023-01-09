import { PostType } from "@/types/post"

export type HeroCardType = Pick<PostType, "content" | "image" | "title">

export { default } from "./HeroCard"
