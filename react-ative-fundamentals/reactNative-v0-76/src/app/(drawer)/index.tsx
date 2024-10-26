import { useAuth } from "@/src/hooks/useAuth";
import { View } from "react-native";
import { Text } from "react-native";


export default function DrawerRN76() {
  const { user } = useAuth()
  
  return (
    <View className="flex-1 justify-center items-center">
      <Text>DrawerRN76 {user ? 'test user' : 'if not'}</Text>
    </View>
  )
}