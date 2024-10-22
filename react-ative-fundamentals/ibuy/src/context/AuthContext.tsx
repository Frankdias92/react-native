import { createContext, ReactNode, useCallback, useState } from "react";

import { UserDTO } from "@/dtos/UserDTO";
import { Alert } from "react-native";

export type AuthContextDataProps = {
  user: UserDTO
  signIn: ( data: UserDTO ) => void
  signUp: ( data: UserDTO ) => void
}

export const AuthContext = createContext<AuthContextDataProps>({

} as AuthContextDataProps)

type AuthContextProviderProps = {
  children: ReactNode
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO)

  function signIn (data: UserDTO) {
    if (data.email === user.email && data.password === user.password) {
      setUser({
        email: data.email,
        password: data.password
      })
      console.log('Success, Login')
    } else {
      Alert.alert('Error', 'your password or email are wrong')
    }
  }

  function signUp(data: UserDTO) {
    setUser(data)
    console.log('Account Created')
  }
  
  return (
    <AuthContext.Provider 
      value={{
        user,
        signIn,
        signUp
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}