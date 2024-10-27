import { Text, View } from "react-native";

import { useGlobalSearchParams } from "expo-router";

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
        <Loading  />
      </View>
    )
  }

  


  return (
    <View className="flex-1 justify-start items-center pt-52 gap-4 px-8 bg-slate-950">
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