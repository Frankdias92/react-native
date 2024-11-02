import { FlatList, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { productsData } from "@/src/utils/products.data";

import { ProductList } from "@/components/home/productList";
import { TextMessage } from "@/components/textMessage";
import { SearchBarProducts } from "@/components/home/searchBarProducts";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import { RoudedButton } from "../buttons/roudedButton";
import { FilterProductDTO } from "@/src/dtos/ProductDTO";
import { useForm } from "react-hook-form";

export function ProductsPage() {
  const [modalVisible, setModalVisible] = useState(false);
  const [filteredProduct, setFilteredProduct] = useState<FilterProductDTO | null>({
    id: 1,
    condition: ['NEW', 'OLD'],
    conditionIsSelected: false,
    payment_methods: 'Pix',
    description: 'Sample product description',
    accepts_exchange: true,
  })
  
  const [submittedData, setSubmittedData] = useState<FilterProductDTO>({} as FilterProductDTO)
  const { control, handleSubmit, formState: { errors }} = useForm<FilterProductDTO>()
  
  const [condition, setCondition] = useState<string>()
  const [exchange, setExchange] = useState(false)
  
  
  function handleWithCondition(condition: string) {
    if(condition) {
      return setCondition(condition)
    }
  }


  
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
                <FlatList 
                  data={filteredProduct?.condition || []}
                  keyExtractor={(item, index) => `${item}-${index}`}
                  renderItem={({ item, index }) => (
                    <View className="flex h-8 justify-center mr-2">
                      <RoudedButton 
                        condition={condition === item}
                        value={item}
                        onPress={() => handleWithCondition(item)}

                      />
                    </View>
                  )}
                  horizontal={true}
                />
              </TextMessage>

              <TextMessage text="Accepts exchange?" 
                variante="text-bold"
              >
                <TouchableOpacity 
                  className="flex w-16 h-8 bg-stone-400 rounded-3xl overflow-hidden justify-center relative"
                  onPress={() => setExchange(!exchange)}
                  activeOpacity={.9}
                >
                  <View
                    className={
                    `flex size-7 rounded-full overflow-hidden absolute mx-1
                    bg-lime-400
                      ${!exchange && 'bg-stone-300 right-0'}
                    `}
                  />
                </TouchableOpacity>
              </TextMessage>


            </View>
          </View>

        </Modal>
      </ScrollView>
    </View>
  )
}