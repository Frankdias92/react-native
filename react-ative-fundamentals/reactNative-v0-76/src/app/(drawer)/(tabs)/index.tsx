import { HeaderHome } from "@/src/components/home/header";
import { Loading } from "@/src/components/loading";
import { router } from "expo-router";
import { Suspense } from "react";
import { Text, TouchableOpacity, View } from "react-native";


export default function Home() {

  
  return (
    <View className="flex-1 pt-12 px-8 justify-start items-center bg-slate-200 w-full h-full">
      <HeaderHome />
    </View>
  )
}