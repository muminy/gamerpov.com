import { CategoryType, MenuType } from "@/types/site"
import { createContext, useContext } from "react"

export type SiteContextType = {
  categories: CategoryType[]
  menu: CategoryType[]
}
export const SiteContext = createContext<SiteContextType>({} as SiteContextType)
export const useSiteContent = () => useContext(SiteContext)
