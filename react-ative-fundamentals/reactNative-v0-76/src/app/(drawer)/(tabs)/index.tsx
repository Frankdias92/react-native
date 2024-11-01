import { HeaderHome } from "@/src/components/home/header";
import { ProductsPage } from "@/src/components/home/productsPage";
import { YourStoreInfo } from "@/src/components/home/yourStoreInfo";
import { ScrollView, View } from "react-native";


export default function Home() {

  
  return (
    <ScrollView >
    <View className="flex w-full h-full pt-12 pb-32 px-8 gap-8 justify-start items-center bg-slate-200 ">
      <HeaderHome />
      <YourStoreInfo />
      <ProductsPage />
    </View>
    </ScrollView>
  )
}