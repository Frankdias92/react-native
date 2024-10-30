import { View } from "react-native";

import { router } from "expo-router";

import { useAuth } from "@/src/hooks/useAuth";
import { Loading } from "@/src/components/loading";

import { Suspense } from "react";
import Login from "./logIn";


export default function Index() {
  const { user, isLoadingUserStorageData, logOut } = useAuth()

  if (isLoadingUserStorageData) {
    return (
      <View className="flex-1 justify-center items-center bg-slate-950">
        <Loading  />
      </View>
    )
  }

  if (user.email) {
    router.navigate('/(drawer)/(tabs)') 
  }

  return (
    <View className="flex-1 justify-start items-center gap-4 px-8 bg-slate-950">
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
        
    </View>
  )
}