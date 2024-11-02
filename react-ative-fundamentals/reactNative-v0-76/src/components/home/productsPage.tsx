import { FlatList, ScrollView, View } from "react-native";
import { useState } from "react";


import { productsData } from "@/src/utils/products.data";

import { SearchBarProducts } from "@/components/home/searchBarProducts";

import { ProductList } from "@/components/home/productList";
import { TextMessage } from "@/components/textMessage";
import { ModalFilteredProducts } from "../modal/modal";


export function ProductsPage() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View className="flex w-full gap-2 pb-44">
      <TextMessage text="Buy varied products" />

      <SearchBarProducts filterSearch={() => setModalVisible(true)} />

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

        <ModalFilteredProducts modalVisible={modalVisible} onPress={() => setModalVisible(false)}/>
      </ScrollView>
    </View>
  )
}