export type UserDTO = {
  id?: string
  name: string
  email: string
  password: string
  image?: string
}

export type UserSignInDTO = {
  email: string
  password: string
}