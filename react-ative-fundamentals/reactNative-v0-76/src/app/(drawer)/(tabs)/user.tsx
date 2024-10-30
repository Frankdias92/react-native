import { Text, View } from "react-native";
import ControllerProfile from "@/src/components/user/controllerProfile";
import { useState } from "react";
import { ButtonText } from "@/src/components/buttonText";
import { router } from "expo-router";


export default function Profile() {
  const [editProfile, setEditProfile] = useState(false)
  
  return (
    <View className="flex h-full w-full justify-center items-start bg-slate-900 px-8">
      <View className="flex w-full h-full">
        <ControllerProfile />
      </View>

      <ButtonText text="Voltar" variante="lime-500" onPress={() => router.navigate('/(drawer)/(tabs)/')} />

    </View>
  )
}