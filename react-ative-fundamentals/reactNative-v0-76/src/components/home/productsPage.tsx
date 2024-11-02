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
import { SwitchButton } from "../buttons/switchButton";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { ButtonText } from "../buttonText";

export function ProductsPage() {
  const [modalVisible, setModalVisible] = useState(false);
  const [filteredProduct, setFilteredProduct] = useState<FilterProductDTO | null>({
    id: 1,
    condition: ['NEW', 'OLD'],
    conditionIsSelected: false,
    payment_methods: ['Pix', 'Card Credit', 'Boleto'],
    description: 'Sample product description',
    accepts_exchange: true,
  })
  
  const [submittedData, setSubmittedData] = useState<FilterProductDTO>({} as FilterProductDTO)
  const { control, handleSubmit, formState: { errors }} = useForm<FilterProductDTO>()
  
  const [condition, setCondition] = useState<string>()
  const [exchange, setExchange] = useState(false)

  const [isPaymenteSelected, setIsPaymenteSelected] = useState<string[]>([])
  
  function handleWithCondition(condition: string) {
    if(condition) {
      return setCondition(condition)
    }
  }

  function handleSelectMethod(itemSelected: string) {
    setIsPaymenteSelected((prevSelected) => 
      prevSelected.includes(itemSelected) ? prevSelected.filter((item) => item !== itemSelected )
      : [...prevSelected, itemSelected])
  }

  
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

        <Modal 
          visible={modalVisible}
          animationType='slide'
          transparent
        >
          <TouchableOpacity 
            activeOpacity={1}
            onPress={() => setModalVisible(false)}
            className="flex-1 justify-end z-10
              bg-black/60 transition-colors"
          >
            <TouchableOpacity 
              activeOpacity={1}
              onPress={() => console.log('click on the model')}
              className="flex w-full min-h-[120px] rounded-t-2xl bg-white p-4 gap-4 z-50 relative"
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
                <SwitchButton exchange={exchange} onPress={() => setExchange(!exchange)} />
              </TextMessage>

              <TextMessage text="Payment" variante="text-bold">
                  <FlatList 
                    data={filteredProduct?.payment_methods}
                    keyExtractor={(item, index) => `${item}-${index}`}
                    renderItem={({ item }) => (
                      <TouchableOpacity 
                        onPress={() => handleSelectMethod(item)}
                        className="flex flex-row w-full"
                      >
                        {isPaymenteSelected.includes(item) ? (
                          <MaterialCommunityIcons name="checkbox-marked" size={24} color={'#171717'}/>
                        ) : (
                          <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color={'#171717'}/>
                        )}
                        <TextMessage text={item}/>
                      </TouchableOpacity>
                    )}
                  />
              </TextMessage>

              <View className="flex w-full flex-row gap-2 mt-10">
                <ButtonText text="Reset filter" variante="slate-100" size="flex-1" />
                <ButtonText text="Apply" variante="slate-900" size="flex-1" />
              </View>

              <TouchableOpacity 
                className="flex w-full absolute top-4 items-end"
                onPress={() => setModalVisible(false)}
              >
                <MaterialCommunityIcons name="close" size={24} color={'#171717'}/>
              </TouchableOpacity>
            </TouchableOpacity>
          </TouchableOpacity>

        </Modal>
      </ScrollView>
    </View>
  )
}