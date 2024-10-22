import { Text, View } from "react-native"

import { styles } from "./style";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import HandleWithSignUp from "@/components/login/signUp";
import HandleWithSignIn from "@/components/login/signIn";

export default function SignUp() {
  const { user } = useAuth()
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{ user.name } | { user.email } | { user.password }</Text>

      { user.email.length > 0 ? (
        <HandleWithSignIn />
      ) : (
        <HandleWithSignUp />
        )
      }

    </View>
  )
}