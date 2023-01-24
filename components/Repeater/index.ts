import { ReactNode } from "react"

export type RepeaterProps<T> = {
  items: T[]
  renderItem: (item: T, index: number) => ReactNode
  renderHeader?: () => ReactNode
  renderBottom?: ReactNode
  renderNotFound?: ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
  title?: string
}

export { default } from "./Repeater"
