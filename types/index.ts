import { AxiosError } from "axios"

export type ErrorResponseType = {
  // can be add new types
  status: number
}

export type ErrorCommonType = {
  message?: string
  error: AxiosError<ErrorResponseType>
}

export type CategoryType = {
  title: string
  image: string
}

export type MenuType = {
  href: string
  title: string
}
