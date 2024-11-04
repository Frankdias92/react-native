import { router, useLocalSearchParams } from "expo-router";
import { FlatList, Image, ScrollView, Text, View } from "react-native";

import { productsData } from "@/src/utils/products.data"; 
import { TextMessage } from "@/src/components/textMessage";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { UserHomeHeader } from "@/src/components/user/userHomeHeader";
import { RoudedButton } from "@/src/components/buttons/roudedButton";
import { ButtonText } from "@/src/components/buttonText";

export default function Product() {
  const { id } = useLocalSearchParams();
  
  const data = productsData.flatMap(item => item.products).find((item) => item.id === Number(id));

  if (!data) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-red-500">Product not found!</Text>
      </View>
    );
  }

  return (
    <View className="flex w-full h-full pt-16 gap-4 pb-24 justify-start items-center bg-slate-200 relative">
      <ScrollView>
      <Image 
        source={data.image} 
        // style={{ width: 153, height: 100, borderRadius: 8 }} // Estilos para ajustar a imagem
        className="flex w-full h-[280px]"
        resizeMode="cover"
      />

      <View className="flex w-full px-8 gap-4 pb-8">
        <View className="flex w-full mt-2">
          <UserHomeHeader showMessage={false} />
        </View>

        
        <RoudedButton text="NEW" condition showIcone={false} />

        <View className="flex gap-2">
          <View className="flex flex-row w-full justify-between">
            <TextMessage text={data.name} variante="text-xl" />
            <View className="flex flex-row gap-1">
              <TextMessage text={'$'} variante="text-bold" color="lime"/>
              <TextMessage text={data.price.toFixed(2)} variante="text-xl" color="lime"/>
            </View>
          </View>
          <TextMessage text={data.description} variante="text-base" />
        </View>

        <View className="flex w-full flex-row gap-2">
          <TextMessage text="Accepts enchange?" variante="text-bold"/>
          <TextMessage text="Yes"/>
        </View>

        <View className="flex w-full gap-2">
          <TextMessage text="Payment:" variante="text-bold"/>

          <FlatList 
            data={data.payment_methods}
            keyExtractor={(item, index) => `${item}-${index}`}
            renderItem={({ item }) => (
              <View className="flex w-full flex-row gap-2 items-center">
                {item === 'Pix' &&<MaterialCommunityIcons name="qrcode" size={16} color={'#1c1917'}/>}
                {item === 'Cash' &&<MaterialCommunityIcons name="cash" size={16} color={'#1c1917'}/>}
                {item === 'Card Credit' &&<MaterialCommunityIcons name="credit-card-check" size={16} color={'#1c1917'}/>}
                <TextMessage text={item}/>
              </View>
            )}
            scrollEnabled={false}
          />
        </View>

      </View>
    </ScrollView>
        {/* BTN GO BACK */}
        <View className="flex absolute top-5 left-8">
          <TouchableOpacity 
            onPress={() => router.navigate('/(drawer)/(tabs)')}
          >
            <MaterialIcons name="arrow-back-ios" size={24} color={'#1c1917'}/>
          </TouchableOpacity>
        </View>

        <View className="flex absolute w-full justify-center bottom-0 px-8 h-24 bg-white">
          <View className="flex flex-row gap-2 items-center">
            <View className="flex flex-row gap-1 flex-1">
              <TextMessage text={'$'} variante="text-xl" color="lime" />
              <TextMessage text={data.price.toFixed(2)} variante="text-xl" color="lime"/>
            </View>
            <ButtonText text="Contact" variante="lime-500" size="flex-1"/>
          </View>
        </View>
    </View>
  );
}
