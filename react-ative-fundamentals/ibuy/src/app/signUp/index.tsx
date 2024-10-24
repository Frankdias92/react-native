import { Text, View } from "react-native"

import { styles } from "./style";
import { useAuth } from "@/hooks/useAuth";
import HandleWithSignUp from "@/components/login/signUp";
import HandleWithSignIn from "@/components/login/signIn";
import { Loading } from "@/components/loading";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SignUp() {
  const { user, isLoadingUserStorageData, logOut } = useAuth()

  
  if (isLoadingUserStorageData) {
    return (
      <View style={styles.container}>
        <Text>sign in</Text>
        <Loading  />
      </View>
    )
  }

  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{ user.name } | { user.email } | { user.password }</Text>
      <Text style={styles.text}> value { isLoadingUserStorageData ? <Text>True</Text> : false}</Text>

      { user.email ? 
        (
          <HandleWithSignIn />
        ) : (
          <HandleWithSignUp />
        )
      }

      <TouchableOpacity onPress={logOut}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}