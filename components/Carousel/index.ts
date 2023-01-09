import { ReactNode } from "react"

export type CarouselProps<T> = {
  items: T[]
  renderItem(item: T, index: number): ReactNode
  className?: string
}

export { default } from "./Carousel"
