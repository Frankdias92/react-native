import { createContext, ReactNode, useCallback, useState } from "react"

export type AuthContextDataProps = {
  user: string
  signOut: () => void
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps)

type AuthContextProviderProps = {
  children: ReactNode
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState('frank')

  const signOut = () => {
    console.log('Leave function')
  }

  return (
    <AuthContext.Provider 
      value={{
        user,
        signOut
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}