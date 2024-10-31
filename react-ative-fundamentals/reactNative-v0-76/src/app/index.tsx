import { View } from "react-native";

import { router, useFocusEffect } from "expo-router";

import { useAuth } from "@/src/hooks/useAuth";
import { Loading } from "@/src/components/loading";

import { Suspense, useCallback } from "react";
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

  useFocusEffect(useCallback(() => {
    router.navigate('/(drawer)/(tabs)') 
  }, [user]))

  return (
    <View className="flex-1 justify-start items-center gap-4 px-8 bg-slate-950">
      <Login />        
    </View>
  )
}