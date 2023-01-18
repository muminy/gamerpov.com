import { createRef } from "react"

export type SearchRefType = {
  show(): void
}
export const searchRef = createRef<SearchRefType>()

export { Search as default } from "./Search"
