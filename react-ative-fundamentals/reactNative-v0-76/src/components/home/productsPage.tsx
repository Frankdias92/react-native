import { FlatList, ScrollView, View } from "react-native";
import { useState } from "react";

import { productsData } from "@/src/utils/products.data";

import { ModalFilteredProducts } from "@/components/modal/modal";
import { SearchBarProducts } from "@/components/home/searchBarProducts";
import { ProductList } from "@/components/home/productList";
import { TextMessage } from "@/components/textMessage";
import { router } from "expo-router";


export function ProductsPage() {
  const [modalVisible, setModalVisible] = useState(false);
  const data = productsData.flatMap(item => item.products)

  return (
    <View className="flex w-full gap-2 pb-44">
      <TextMessage text="Buy varied products" />

      <SearchBarProducts filterSearch={() => setModalVisible(true)} />

      <ScrollView>
        <View className="flex w-full">
        <FlatList 
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProductList 
            productsData={ item }
            onPress={() => router.navigate(`/(tabs)/product/${item.id}`)}
            />
          )}
          scrollEnabled={false}
          numColumns={2}
          columnWrapperStyle={{flexWrap: "wrap"}}
        />
        </View>
      </ScrollView>

      <ModalFilteredProducts 
        modalVisible={modalVisible} 
        onPress={() => setModalVisible(false)}
      />
    </View>
  )
}