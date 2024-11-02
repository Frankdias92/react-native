import { router, useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";

import { productsData } from "@/src/utils/products.data"; 
import { TextMessage } from "@/src/components/textMessage";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { UserProfile } from "@/src/components/user/userProfile";
import { UserHomeHeader } from "@/src/components/user/userHomeHeader";
import { RoudedTextVariant } from "@/src/components/buttons/rouded.variant";
import { RoudedButton } from "@/src/components/buttons/roudedButton";

export default function Product() {
  const { id } = useLocalSearchParams();
  
  const data = productsData.find((item) => item.id === Number(id));

  if (!data) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-red-500">Product not found!</Text>
      </View>
    );
  }

  return (
    <View className="flex w-full h-full pt-16 pb-32 gap-4 justify-start items-center bg-slate-200 relative">
      <Image 
        source={data.image} 
        // style={{ width: 153, height: 100, borderRadius: 8 }} // Estilos para ajustar a imagem
        className="flex w-full h-[280px]"
        resizeMode="cover"
      />


      <View className="flex w-full px-8 gap-4">
        <View className="">
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


      </View>
        {/* BTN GO BACK */}
        <View className="flex absolute top-5 left-8">
          <TouchableOpacity 
            onPress={() => router.navigate('/(drawer)/(tabs)')}
          >
            <MaterialIcons name="arrow-back-ios" size={24} color={'#1c1917'}/>
          </TouchableOpacity>
        </View>
    </View>
  );
}
