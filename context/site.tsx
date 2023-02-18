import { CategoryType, PostType } from "@/types/index"
import { createContext, SetStateAction, useContext } from "react"

export type SiteContextType = {
  categories: CategoryType[]
  menu: CategoryType[]
  favories: PostType[]
  setFavories: (posts: PostType[]) => void
}
export const SiteContext = createContext<SiteContextType>(
  {} as SiteContextType
)
export const SiteProvider = SiteContext.Provider
export const useSiteContent = () => useContext(SiteContext)
