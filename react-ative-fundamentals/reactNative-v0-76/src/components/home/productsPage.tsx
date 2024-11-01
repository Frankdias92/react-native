import { FlatList, ScrollView, Text, View } from "react-native";
import { productsData } from "@/src/utils/products.data";

import { ProductList } from "@/components/home/productList";
import { TextMessage } from "@/components/textMessage";
import { SearchBarProducts } from "@/components/home/searchBarProducts";
import { Modal } from "../../app/(drawer)/(tabs)/modal";
import { useState } from "react";

export function ProductsPage() {
  const [modalView, setModalView] = useState(false)
  
  return (
    <View className="flex w-full gap-2 pb-44 relative">
      <TextMessage text="Buy varied products" />

      <SearchBarProducts filterSearch={() => setModalView(!false)} />
        {modalView && 
          <View className="flex absolute w-full h-full z-50 bg-slate-950">
            <Modal />
          </View>
        }

      <ScrollView>
      
        <View className="flex w-full">
        <FlatList 
          data={productsData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProductList 
            productsData={ item }
            />
          )}
          scrollEnabled={false}
          numColumns={2}
          columnWrapperStyle={{flexWrap: "wrap"}}
        />
        </View>

      </ScrollView>
    </View>
  )
}