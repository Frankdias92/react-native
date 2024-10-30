import { Text, View } from "react-native";

import { Link, router, useFocusEffect } from "expo-router";

import { useAuth } from "@/src/hooks/useAuth";
import { Loading } from "@/src/components/loading";

import { Suspense, useCallback, useState } from "react";

import { HandleWithSignUp } from "@/src/components/login/signUp";
import { HandleWithSignIn } from "@/src/components/login/signIn";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextOnPress } from "../components/textOnPress";


export default function Login() {
  const { user, isLoadingUserStorageData, logOut } = useAuth()
  const [makeLogin, setMakeLogin] = useState(false)

  if (isLoadingUserStorageData) {
    return (
      <View className="flex-1 justify-center items-center bg-slate-950">
        <Loading  />
      </View>
    )
  }
  
  useFocusEffect(useCallback(() => {
    if(user.email) {
      router.navigate('/(drawer)/(tabs)')
    }
  }, [user]))



  return (
    <View className="flex w-full h-full justify-start items-center pt-32 gap-4 px-8 bg-slate-950">
      <Suspense fallback={<Loading/>}>
        { makeLogin ?
          (
            <>
              <HandleWithSignIn />
              <TextOnPress text="Create a new account" onPress={() => setMakeLogin(!true)} />
            </>
          ) : (
            <>
              <HandleWithSignUp />
              <TextOnPress text="Already have an account?" onPress={() => setMakeLogin(true)} />
            </>
          ) 
        }
      </Suspense> 

        
        <Link
          href={'/(drawer)/(tabs)'} 
          className="text-white"
        >
          HOME
        </Link>
        
    </View>
  )
}