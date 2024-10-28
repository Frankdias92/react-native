import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";


export default function Product() {
  const { id } = useLocalSearchParams()
  
  return (
    <View className="flex-1 justify-center items-center bg-slate-900">
      <Text className="font-medium text-slate-100">Products: { id }</Text>
    </View>
  )
}