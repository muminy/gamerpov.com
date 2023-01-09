export type ForumType = {
  id: number
  title: string
  content: string
  category?: string[]
}

export type ForumCreateFormTypes = {
  title: string
  content: string
  category?: string[]
}

export type CreateForumResponseType = {
  forum: ForumType
}

export type ForumDetailPageProps = {
  id: number
}

export type ForumDetailResponseType = {
  detail: ForumType
  more: ForumType[]
}
