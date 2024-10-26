import { createContext, ReactNode, useCallback, useEffect, useState } from "react"
import { UserDTO } from "../dtos/UserDTO"
import { storageAuthTokenGet, storageAuthTokenRemove, storageAuthTokenSave } from "../storage/storageAuthTokens"
import { StorageUserGet, StorageUserLogOut, StorageUserSave } from "../storage/storageUser"
import { Alert, ToastAndroid } from "react-native"
import { router } from "expo-router"

export type AuthContextDataProps = {
  user: UserDTO
  signIn: ( data: UserDTO ) => void
  signUp: ( data: UserDTO ) => void
  logOut: () => void
  isLoadingUserStorageData: boolean
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps)

type AuthContextProviderProps = {
  children: ReactNode
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO)
  const [isLoadingUserStorageData, setIsLoadingUserStorage] = useState(false)

  
  const schemaTestUser = {
    id: '1',
    name: 'Franklin',
    email: 'email',
    password: '123'
  }
  async function userAndTokenUpdate(userData: UserDTO, token: string) {
    setUser(userData)
  }

async function storageUserAndTokenSave(userData: UserDTO, token: string) {
  try {
    setIsLoadingUserStorage(true)
    
    await storageAuthTokenSave(token)
    await StorageUserSave(userData)

  } catch (error) {
    throw error
  } finally {
    setTimeout(() => {
      setIsLoadingUserStorage(false)
    }, 2000)
  }
}

  async function signIn (data: UserDTO) {
    try {
      const myToken = '123456'

      if (data.name === schemaTestUser.name) {   
        setIsLoadingUserStorage(true)

        await storageUserAndTokenSave(schemaTestUser, myToken)
        userAndTokenUpdate(schemaTestUser, myToken)
        
        ToastAndroid.show('Welcome !', ToastAndroid.TOP);
        router.navigate('/(drawer)')
      }
    } catch (error) {
      Alert.alert('Error', 'your password or email are wrong')
    } finally {
      setTimeout(() => {
        setIsLoadingUserStorage(false)
      }, 2000)
    }
  }

  function signUp(data: UserDTO) {
    try {
      setIsLoadingUserStorage(true)
      setUser(data)
      StorageUserSave(data)
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
      await StorageUserLogOut()
      await storageAuthTokenRemove()

    } catch (error) {
      throw error
      
    } finally {
      router.navigate('/login')
      setIsLoadingUserStorage(false)
    }
  }

  async function loadUserData() {
    try {
      setIsLoadingUserStorage(true)
      const userLogged = await StorageUserGet()
      const token = await storageAuthTokenGet()
  
      if (userLogged && token) {
        userAndTokenUpdate(userLogged, token)
        router.navigate('/(drawer)')
      }

    } catch (error) {
      console.error(error)
    } finally {
      setTimeout(() => {
        setIsLoadingUserStorage(false)
      }, 2000)
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