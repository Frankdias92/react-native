import { useAuth } from "@/src/hooks/useAuth";
import { useFocusEffect, useGlobalSearchParams } from "expo-router";
import { useCallback, useEffect } from "react";
import { Text, View } from "react-native";


export default function Login() {
  const { signOut } = useAuth()
  const { message } = useGlobalSearchParams()

  console.log('print', message )

  useEffect(() => {
    if(message === 'false') {
      console.log('Call the function LogOut')
      signOut()
    }
  })

  return (
    <View>
      <Text>Login Page { message === 'true' ? 'Logado' : 'Log In'}</Text>
    </View>
  )
}