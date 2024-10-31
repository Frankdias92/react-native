import { createContext, ReactNode, useEffect, useState } from "react"
import { Alert, ToastAndroid } from "react-native"
import { router } from "expo-router"

import { UserDTO, UserSignInDTO } from "@/dtos/UserDTO"
import { StorageUserGet, StorageUserLogOut, StorageUserSave } from "@/storage/storageUser"
import { storageAuthTokenGet, storageAuthTokenRemove, storageAuthTokenSave } from "@/storage/storageAuthTokens"
import * as ImagePicker from 'expo-image-picker';
import { userDataMock } from "../utils/getUserProfileMockup"


export type AuthContextDataProps = {
  user: UserDTO
  signIn: ( data: UserSignInDTO ) => void
  signUp: ( data: UserDTO ) => void
  logOut: () => void
  isLoadingUserStorageData: boolean
  handleUserPhotoSelect: () => void
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps)

type AuthContextProviderProps = {
  children: ReactNode
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO)
  const [isLoadingUserStorageData, setIsLoadingUserStorage] = useState(false)
  const [imageProfile, setImageProfile] = useState<string>('')

  
  const schemaTestUser = {
    id: '1',
    name: 'Franklin',
    email: 'email',
    password: '123',
    image: user.image
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

  async function storageUserPhotoSave(userData: UserDTO) {
    try {
      setIsLoadingUserStorage(true)
      
      console.log('updata photo user', userData)
      await StorageUserSave(userData)
      setUser(userData)

    } catch (error) {
      throw error
    } finally {
      setTimeout(() => {
        setIsLoadingUserStorage(false)
      }, 2000)
    }
  }

  async function signIn (data: UserSignInDTO) {
    try {
      const myToken = '123456'
      const getUserStorage = await userDataMock
      console.log(getUserStorage.name)
      console.log('pass throur')


      if (getUserStorage.email === data.email) {
        setUser(getUserStorage)
        
        await storageUserAndTokenSave(getUserStorage, myToken)
        userAndTokenUpdate(getUserStorage, myToken)

        ToastAndroid.show('Welcome !', ToastAndroid.TOP);
      }
    } catch (error) {
      Alert.alert('Error', 'your password or email are wrong')
    } finally {
      setTimeout(() => {
        router.navigate('/(drawer)/(tabs)/')
        setIsLoadingUserStorage(false)
      }, 2000)
    }
  }

  function signUp(data: UserDTO) {
    try {
      // if (data.email === schemaTestUser.email) {
      //   setIsLoadingUserStorage(true)
      // }
      setUser(schemaTestUser)
      StorageUserSave(schemaTestUser)
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
      setIsLoadingUserStorage(false)
      router.navigate('/(drawer)/(tabs)')
    }
  }

  async function loadUserData() {
    try {
      setIsLoadingUserStorage(true)

      const userLogged = await StorageUserGet()
      const token = await storageAuthTokenGet()

      
      if (userLogged && token) {
          userAndTokenUpdate(userLogged, token)
        }
        
      } catch (error) {
        console.error(error)
      } finally {
        setTimeout(() => {
        setIsLoadingUserStorage(false)
      }, 2000)
    }
  }

  async function handleUserPhotoSelect() {
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true
      })
      
      if (photoSelected.assets) {
        let userUpdatePhoto = user.image
        userUpdatePhoto = photoSelected.assets[0].uri
        
        console.log('click', userUpdatePhoto)
        await storageUserPhotoSave({...user, image: userUpdatePhoto})
      }
      
    } catch (error) {
      console.error('something wrong with the photo', error)
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
        isLoadingUserStorageData,
        handleUserPhotoSelect
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}