import { View } from "react-native";
import { ButtonText } from "../../../components/buttonText";
import { router } from "expo-router";
import { useState } from "react";


export function Modal() {
  
  return (
    <View className="flex w-full h-full">      
      <ButtonText text="test modal" 
        onPress={() => router.back()}
        variante="slate-100"
        size="w-full"
      />
    </View>
  )
}