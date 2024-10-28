import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Test() {
  return (
    <View className="flex-1 justify-center items-center bg-slate-900">
      <Text className="color-gray-100 text-2xl font-semibold">Page Home</Text>
      <TouchableOpacity onPress={() => router.navigate('/(drawer)/user')}>
        <Text className="color-slate-400">Go to login</Text>
      </TouchableOpacity>
    </View>
  )
}