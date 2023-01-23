export type CategoryType = {
  id: string
  name: string
  slug: string
  description: string
  image: {
    sourceUrl: string
    title: string
  }
}

export type WPCategoryType = {
  nodes: CategoryType[]
}

export type MenuType = {
  id: string
  name: string
  slug: string
}

export type WPMenuType = {
  nodes: MenuType[]
}
