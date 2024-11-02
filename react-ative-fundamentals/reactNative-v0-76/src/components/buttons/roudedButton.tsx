import { FlatList, View } from "react-native";
import { RoudedTextVariant } from "./rouded.variant";
import { useEffect, useState } from "react";
import { FilterProductDTO } from "@/src/dtos/ProductDTO";


interface conditionProductProps {
  condition: boolean
  value: string
  onPress?: () => void
}
// export const conditionProductState:conditionProductProps[] = [
//   {id: '1', value: 'NEW'},
//   {id: '2', value: 'OLD'}
// ]

export function RoudedButton({ condition, value, onPress }: conditionProductProps) {
  
  return (
    <View className="flex w-full justify-start
     gap-2 items-start">
       <RoudedTextVariant text={value} condition={condition} onPress={onPress}/>
    </View>
  )
}