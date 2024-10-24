import { router, useFocusEffect } from "expo-router";

import { Alert, ToastAndroid } from "react-native";
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
  const [isLoadingUserStorageData, setIsLoadingUserStorage] = useState(false)
  
  async function storageUserAndToken(user: UserDTO, token: string) {

  }


  const schemaTestUser = {
    id: '1',
    name: 'Franklin',
    email: 'email',
    password: '123'
  }
  function signIn (data: UserDTO) {
    setUser({} as UserDTO)

    try {
      setIsLoadingUserStorage(true)
      if (data.name === schemaTestUser.name) {        
        ToastAndroid.show('Welcome !', ToastAndroid.TOP);
      }
    } catch (error) {
      Alert.alert('Error', 'your password or email are wrong')
    } finally {
      setTimeout(() => {
        setUser(schemaTestUser)
        // router.navigate('/(drawer)')
        setIsLoadingUserStorage(false)
        console.log('timer')
      }, 2000);
    }
  }



  function signUp(data: UserDTO) {
    try {
      setIsLoadingUserStorage(true)
      setUser(data)
      storageUserSave(data)
      console.log('Account Created')
    } catch (error) {
      throw error
    } finally {
      setTimeout(() => {
        setIsLoadingUserStorage(false)
      }, 2000)
    }
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