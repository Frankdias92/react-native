import { FlatList, View } from "react-native";
import { RoudedTextVariant, RoudedTextVariantProps } from "./rouded.variant";
import { useEffect, useState } from "react";
import { FilterProductDTO } from "@/src/dtos/ProductDTO";



export function RoudedButton({ condition, text, onPress, showIcone }: RoudedTextVariantProps) {
  
  return (
    <View className="flex w-full justify-start
     gap-2 items-start">
       <RoudedTextVariant text={text} condition={condition} onPress={onPress} showIcone={showIcone}/>
    </View>
  )
}