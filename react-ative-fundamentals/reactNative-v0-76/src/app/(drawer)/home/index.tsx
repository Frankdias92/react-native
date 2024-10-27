import { Loading } from "@/src/components/loading";
import { Suspense } from "react";
import { Text, View } from "react-native";


export default function Home() {
  return (
    <View className="flex-1 justify-center items-center bg-purple-800">
      <Suspense fallback={<Loading />}>
        <Text className="color-gray-100 text-2xl font-semibold">Page Home</Text>
      </Suspense>
    </View>
  )
}