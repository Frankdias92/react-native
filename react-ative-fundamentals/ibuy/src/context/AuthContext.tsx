import { router, useFocusEffect } from "expo-router";

import { Alert } from "react-native";
import { createContext, ReactNode, useEffect, useState } from "react";

import { UserDTO } from "@/dtos/UserDTO";
import { storageUserGet, storageUserSave } from "@/storage/storageUser";



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

      router.navigate('/(drawer)')
    } else {
      Alert.alert('Error', 'your password or email are wrong')
    }
  }

  function signUp(data: UserDTO) {
    setUser(data)
    storageUserSave(data)
    console.log('Account Created')
  }

  async function loadUserData() {
    const userLogged = await storageUserGet()

    if (userLogged) {
      setUser(userLogged)
    }
  }

  useEffect(() => {
    loadUserData()
  }, [])
  
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