import { useAuth } from "@/src/hooks/useAuth";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { TextMessage } from "../textMessage";
import { router } from "expo-router";


interface UserProfileProps {
  showMessage?: boolean
}

export function UserHomeHeader({ showMessage=true }: UserProfileProps) {
  const { user } = useAuth()
  
  function handleWithNavigationIsUserRegister() {
    if (!user.email) {
      return router.navigate('/(tabs)/user')
    }
    router.navigate('/(drawer)/ProfileRoot')
  }
  
  return (
    <TouchableOpacity 
      className="flex w-[55%] flex-row gap-3"
      onPress={handleWithNavigationIsUserRegister}
    >
      <Image 
        source={{uri: user.image}}
        className='flex size-11 rounded-full z-0'
      />
      <View className="flex justify-center">
        {showMessage && <TextMessage text="Welcome!" variante="text-base"/>}
        <TextMessage text={user && user.name} variante="text-bold"/>
      </View>
    </TouchableOpacity>
  )
}