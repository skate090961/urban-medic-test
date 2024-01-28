export type User = {
  email: string
  firstName: string
  gender: string
  id: string
  lastName: string
}

export type UserDomain = User & { isSavedUser: boolean }

export type UpdateUserModel = {
  email?: string
  firstName?: string
  gender?: string
  lastName?: string
}
