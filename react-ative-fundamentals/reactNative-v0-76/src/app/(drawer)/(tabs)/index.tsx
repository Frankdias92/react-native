import { HeaderHome } from "@/src/components/home/header";
import { YourStoreInfo } from "@/src/components/home/yourStoreInfo";
import { Loading } from "@/src/components/loading";
import { router } from "expo-router";
import { Suspense } from "react";
import { Text, TouchableOpacity, View } from "react-native";


export default function Home() {

  
  return (
    <View className="flex w-full h-full pt-12 px-8 gap-8 justify-start items-center bg-slate-200 ">
      <HeaderHome />
      <YourStoreInfo />
    </View>
  )
}