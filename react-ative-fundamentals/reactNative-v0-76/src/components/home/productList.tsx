import { Image, Text, TouchableOpacity } from "react-native";
import { TextMessage } from "../textMessage";
import { ProductListDTO } from "@/src/dtos/ProductDTO";
import { useEffect } from "react";


interface ProductListProps {
  productsData: ProductListDTO
}

export function ProductList({ productsData }: ProductListProps) {
  

  useEffect(() => {
    console.log(productsData.image)
  }, [productsData])
  
  return (
    <TouchableOpacity className="flex-1">
      <Image source={productsData.image as any} className="flex size-24"/>
      <TextMessage text={productsData.name} />
      <Text>$ {productsData.price}</Text>
    </TouchableOpacity>
  )
}