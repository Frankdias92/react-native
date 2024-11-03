import { FlatList, Modal, TouchableOpacity, View } from "react-native";
import { useState } from "react";

import { FilterProductDTO } from "@/src/dtos/ProductDTO";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RoudedButton } from "@/components/buttons/roudedButton";
import { SwitchButton } from "@/components/buttons/switchButton";
import { ButtonText } from "@/components/buttonText";
import { TextMessage } from "../textMessage";


const filteredProduct: FilterProductDTO = {
  id: 1,
  condition: ['NEW', 'OLD'],
  conditionIsSelected: false,
  payment_methods: ['Pix', 'Card Credit', 'Boleto'],
  description: 'Sample product description',
  accepts_exchange: true,
}

interface ModalFilteredProductsProps {
  modalVisible: boolean
  onPress: () => void
}

export function ModalFilteredProducts({ modalVisible, onPress }: ModalFilteredProductsProps) {
  const [condition, setCondition] = useState<string>()
  const [exchange, setExchange] = useState(false)
  const [isPaymenteSelected, setIsPaymenteSelected] = useState<string[]>([])
  
  function handleWithCondition(condition: string) {
    if(condition) {
      return setCondition(condition)
    }
  }

  function handleWithExchange() {
    setExchange(!exchange)
  }

  function handleSelectMethod(itemSelected: string) {
    setIsPaymenteSelected((prevSelected) => 
      prevSelected.includes(itemSelected) ? prevSelected.filter((item) => item !== itemSelected )
      : [...prevSelected, itemSelected])
  }
  
  return (
    <Modal 
      visible={modalVisible}
      animationType='slide'
      transparent
    >
      <TouchableOpacity 
        activeOpacity={1}
        onPress={onPress}
        className="flex-1 justify-end z-10
          bg-black/60 transition-colors"
      >
        <TouchableOpacity 
          activeOpacity={1}
          className="flex w-full min-h-[120px] rounded-t-2xl bg-white p-4 gap-4 z-50 relative"
        >
          <TextMessage text="Filter products" variante="text-xl" />

          <TextMessage text="Condition" variante="text-bold" >
            <FlatList 
              data={filteredProduct?.condition || []}
              keyExtractor={(item, index) => `${item}-${index}`}
              renderItem={({ item, index }) => (
                <View className="flex h-8 justify-center mr-2">
                  <RoudedButton 
                    condition={condition === item}
                    text={item}
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
            <SwitchButton exchange={exchange} onPress={handleWithExchange} />
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
            onPress={onPress}
          >
            <MaterialCommunityIcons name="close" size={24} color={'#171717'}/>
          </TouchableOpacity>
        </TouchableOpacity>
      </TouchableOpacity>

    </Modal>
  )
}