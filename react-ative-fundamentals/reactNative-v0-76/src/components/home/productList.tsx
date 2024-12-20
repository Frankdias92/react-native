import { Image, Text, TouchableOpacity } from "react-native";
import { TextMessage } from "../textMessage";
import { ProductListDTO, Product } from "@/src/dtos/ProductDTO";
import { useEffect } from "react";


interface ProductListProps {
  // productsData: ProductListDTO['products'][number]
  productsData: Product
  onPress: () => void
}

export function ProductList({ productsData, onPress }: ProductListProps) {
  
  
  return (
    <TouchableOpacity className="flex-1 w-[143px] h-[153px]" onPress={onPress}>
      <Image source={productsData.image as any} className="flex w-[153px] h-[100px] rounded-lg"/>
      <TextMessage text={productsData.name} />
      <Text className="color-stone-900 font-bold text-sm">
        $ <Text className="color-stone-900 font-bold text-base">{productsData.price}</Text>
      </Text>
    </TouchableOpacity>
  )
}