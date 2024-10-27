import { Text, View } from "react-native";
import { Suspense, useCallback, useEffect } from "react";

import { useFocusEffect, useGlobalSearchParams } from "expo-router";

import { useAuth } from "@/src/hooks/useAuth";
import { Loading } from "@/src/components/loading";

import { HandleWithSignUp } from "@/src/components/login/signUp";
import { HandleWithSignIn } from "@/src/components/login/signIn";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function Login() {
  const { user, isLoadingUserStorageData, logOut } = useAuth()
  const { message } = useGlobalSearchParams()

  if (isLoadingUserStorageData) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>sign in</Text>
        <Loading  />
      </View>
    )
  }

  // useFocusEffect(useCallback(() => {
  //   if(message === 'false') {
  //     // logOut()
  //     console.log('print message', message)
  //     // console.log('user:', user)
  //   }
  // }, [message]))


  return (
    <View className="flex-1 justify-start items-center mt-52 gap-4 px-8">
      {/* <Suspense fallback={<Loading/>}> */}
        { user.email ?
          (
            <HandleWithSignIn />
          ) : (
            <HandleWithSignUp />
          ) 
        }

      {/* </Suspense>  */}
        <TouchableOpacity onPress={logOut}>
          <Text>LogOut</Text>
        </TouchableOpacity>
    </View>
  )
}