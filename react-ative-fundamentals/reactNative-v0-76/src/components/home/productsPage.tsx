import { FlatList, Modal, ScrollView, Text, View } from "react-native";
import { productsData } from "@/src/utils/products.data";

import { ProductList } from "@/components/home/productList";
import { TextMessage } from "@/components/textMessage";
import { SearchBarProducts } from "@/components/home/searchBarProducts";
import { useState } from "react";
import { router } from "expo-router";
import { RoudedButton } from "../buttons/roudedButton";

export function ProductsPage() {
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View className="flex w-full gap-2 pb-44">
      <TextMessage text="Buy varied products" />

      <SearchBarProducts filterSearch={() => setModalVisible(!!false)} />

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

        <Modal 
          visible={!modalVisible}
          animationType="slide"
          transparent
        >
          <View 
            className="flex-1 justify-end bg-black/75"
          >
            <View 
              className="flex w-full min-h-[120px] rounded-t-2xl bg-white p-4"
            >
              <TextMessage text="Filter products" variante="text-2xl" />
              <TextMessage text="Condition" variante="text-bold" >
                <RoudedButton />
              </TextMessage>
            </View>
          </View>

        </Modal>
      </ScrollView>
    </View>
  )
}