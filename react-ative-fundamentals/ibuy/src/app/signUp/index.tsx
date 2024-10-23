import { Text, View } from "react-native"

import { styles } from "./style";
import { useAuth } from "@/hooks/useAuth";
import HandleWithSignUp from "@/components/login/signUp";
import HandleWithSignIn from "@/components/login/signIn";
import { Loading } from "@/components/loading";

export default function SignUp() {
  const { user, isLoadingUserStorageData } = useAuth()
  
  if (isLoadingUserStorageData) {
    return <Loading  />
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{ user.name } | { user.email } | { user.password }</Text>

      { user.email ? 
        (
          <HandleWithSignIn />
        ) : (
          <HandleWithSignUp />
        )
      }

    </View>
  )
}