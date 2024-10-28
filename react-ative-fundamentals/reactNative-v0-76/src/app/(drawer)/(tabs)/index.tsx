import { Loading } from "@/src/components/loading";
import { router } from "expo-router";
import { Suspense } from "react";
import { Text, TouchableOpacity, View } from "react-native";


export default function Home() {
  function test() {
    console.log('click')
    router.navigate('/')
  }
  
  return (
    <View className="flex-1 justify-center items-center bg-slate-900">
      <Suspense fallback={<Loading />}>
        <Text className="color-gray-100 text-2xl font-semibold">Page Home</Text>
      </Suspense>
      <TouchableOpacity onPress={test}>
        <Text className="color-slate-400">Go to login</Text>
      </TouchableOpacity>
    </View>
  )
}