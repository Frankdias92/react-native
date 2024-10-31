import { useAuth } from "@/src/hooks/useAuth";
import { Image, Text, TouchableOpacity, View } from "react-native";


export function UserHomeHeader() {
  const { user } = useAuth()
  
  return (
    <TouchableOpacity className="flex w-[55%] flex-row gap-3">
      <Image 
        source={{uri: user.image}}
        className='flex size-11 rounded-full z-0'
      />
      <View className="flex justify-center">
        <Text className="text-base color-stone-900 font-light leading-tight">Welcome!</Text>
        <Text className="text-base color-stone-900 font-bold leading-tight">{user && user.name}</Text>
      </View>
    </TouchableOpacity>
  )
}