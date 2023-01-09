import { ForumType } from "./forum"

export type UserType = {
  username: string
  image?: string
  name: string
  bio?: string
  forums: ForumType[]
}

export type CreateUserProps = {
  //
  name: string
  email: string
  password: string
  username: string
}

export type LoginFormType = {
  username: string
  password: string
}

export type UserDetailResponse = UserType

export type UserDetailPageProps = {
  username: string
}

//
export type UserLoginResponse = {
  token: string
  user: UserType
  status: 200 | 400
}

export type UserStoreTypes = {
  user?: UserType
  token?: string
  loading: boolean
}
