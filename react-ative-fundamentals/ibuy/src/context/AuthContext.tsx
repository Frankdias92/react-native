import { router, useFocusEffect } from "expo-router";

import { Alert } from "react-native";
import { createContext, ReactNode, useEffect, useState } from "react";

import { UserDTO } from "@/dtos/UserDTO";
import { storageUseLogOut, storageUserGet, storageUserSave } from "@/storage/storageUser";



export type AuthContextDataProps = {
  user: UserDTO
  signIn: ( data: UserDTO ) => void
  signUp: ( data: UserDTO ) => void
  logOut: () => void
  isLoadingUserStorageData: boolean
}

export const AuthContext = createContext<AuthContextDataProps>({

} as AuthContextDataProps)

type AuthContextProviderProps = {
  children: ReactNode
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO)
  const [isLoadingUserStorageData, setIsLoadingUserStorage] = useState(true)
  
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

  async function logOut() {
    try {
      setIsLoadingUserStorage(true)
      setUser({} as UserDTO)
      await storageUseLogOut()

    } catch (error) {
      throw error
    } finally {
      router.navigate('/home/signUp')
      setIsLoadingUserStorage(false)
    }
  }

  async function loadUserData() {
    try {
      setIsLoadingUserStorage(true)
      const userLogged = await storageUserGet()
  
      if (userLogged) {
        setUser(userLogged)
        router.navigate('/(drawer)')
      }

    } catch (error) {
      console.error(error)
    } finally {
      setIsLoadingUserStorage(false)
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
        signUp,
        logOut,
        isLoadingUserStorageData
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}