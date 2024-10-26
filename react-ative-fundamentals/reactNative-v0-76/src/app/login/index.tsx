import { useAuth } from "@/src/hooks/useAuth";
import { useFocusEffect, useGlobalSearchParams } from "expo-router";
import { useCallback, useEffect } from "react";
import { Text, View } from "react-native";


export default function Login() {
  const { logOut } = useAuth()
  const { message } = useGlobalSearchParams()


  useFocusEffect(useCallback(() => {
    if(message === 'false') {
      logOut()
    }
  }, [message]))

  return (
    <View>
      <Text>Login Page { message === 'true' ? 'Logado' : 'Make a log In'}</Text>
    </View>
  )
}