export type UsersResponseType = {
  info: Info
  results: Result[]
}

type Result = {
  email: string
  gender: string
  id: Id
  name: Name
}

type Name = {
  first: string
  last: string
  title: string
}

type Id = {
  name: string
  value?: string
}

type Info = {
  page: number
  results: number
  seed: string
  version: string
}
