import { Text, View } from "react-native";

import { router, useFocusEffect } from "expo-router";

import { useAuth } from "@/src/hooks/useAuth";
import { Loading } from "@/src/components/loading";

import { HandleWithSignUp } from "@/src/components/login/signUp";
import { HandleWithSignIn } from "@/src/components/login/signIn";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Suspense, useCallback, useState } from "react";
import { StorageUserGet } from "../storage/storageUser";


export default function Login() {
  const { user, isLoadingUserStorageData, logOut } = useAuth()
  const [newUser, setNewUser] = useState(false)

  if (isLoadingUserStorageData) {
    return (
      <View className="flex-1 justify-center items-center bg-stone-900">
        <Loading  />
      </View>
    )
  }

  
  
  useFocusEffect(useCallback(() => {
    async function loadingUserData() {
      const user = StorageUserGet()
      if (!user) {
        setNewUser(true)
        return console.log('Please make your login')
      }
      return router.navigate('/(drawer)') 
    }

    loadingUserData()
  }, []))


  return (
    <View className="flex-1 justify-start items-center pt-52 gap-4 px-8 bg-slate-950">
      <Suspense fallback={<Loading/>}>
        { newUser ?
          (
            <HandleWithSignIn />
          ) : (
            <HandleWithSignUp />
          ) 
        }
      </Suspense> 
        <TouchableOpacity onPress={logOut}>
          <Text>LogOut</Text>
        </TouchableOpacity>
    </View>
  )
}