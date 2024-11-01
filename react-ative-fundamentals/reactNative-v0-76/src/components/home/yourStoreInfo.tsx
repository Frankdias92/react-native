import { Text, View } from "react-native";
import { Feather } from '@expo/vector-icons'
import { TextMessage } from "../textMessage";

export function YourStoreInfo() {
  return (
    <View className="flex w-full gap-2 rounded-lg justify-between items-stretch">

      <TextMessage text="Your products advertised for sale" />
        

      <View className="flex w-full flex-row h-16 gap-4 px-4 rounded-lg bg-slate-100 justify-between items-stretch">
        <View className="flex flex-row gap-4 items-center">
          <Feather name="tag" size={22} color={'#a3e635'}/>
          <View>
            <Text className="flex text-lg font-semibold">4</Text>
            <Text className="flex text-sm color-stone-500 antialiased font-light">actives</Text>
          </View>
        </View>

        <View className="flex flex-row gap-4 items-center">
          <Text className="flex text-center color-stone-900 antialiased font-medium"
          >
            My announcements
          </Text>
        </View>
      </View>
    </View>
  )
}