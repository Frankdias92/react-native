import { Alert, Text, TouchableOpacity, View } from "react-native";
import ControllerProfile from "@/src/components/user/controllerProfile";
import { Suspense, useCallback, useState } from "react";
import { router, useFocusEffect } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "@/src/hooks/useAuth";
import { Loading } from "@/src/components/loading";


export default function Profile() {
  const { user, isLoadingUserStorageData } = useAuth()
  const [loadingProfile, setLoadingProfile] = useState(true)

  // if (loadingProfile) {
  //   return (
  //     <View className="flex-1 justify-center items-center bg-slate-950">
  //       <Loading  />
  //     </View>
  //   )
  // }

  useFocusEffect(useCallback(() => {
    if(!user.email) {
      setLoadingProfile(false)
      Alert.alert('You are not logged', `Let's login at your account`, [
        {
          text: `Let's go!`,
          onPress: () => router.navigate('/logIn')
        }
      ])
      // return router.navigate('/(drawer)/(tabs)/')
      console.log('there is user', user)
    }
  }, [user]))
  
  return (
    <View className="flex h-full w-full justify-center items-start bg-slate-900 px-8">
      <View className="flex w-full h-full">
        <Suspense fallback={<Loading />}>
          <ControllerProfile />
        </Suspense>
      </View>

      <TouchableOpacity 
        onPress={() => router.back()}
        className="flex absolute top-16 left-8"
      >
        <MaterialIcons name="arrow-back" color={'white'} size={24}/>
      </TouchableOpacity>
    </View>
  )
}