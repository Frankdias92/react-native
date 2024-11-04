import { FlatList, View } from "react-native";
import { HeaderComponent } from "../headerComponent";
import { TextMessage } from "../textMessage";
import { ProductList } from "../home/productList";
import { productsData, productTest } from "@/src/utils/products.data";
import { useAuth } from "@/src/hooks/useAuth";


export function AccountManager() {
  const { user } = useAuth()

  // const response = productsData.find(item => item.userId === Number(user.id))?.products || []
  const data = productTest.flatMap(item => item.users)
  const userProducts = data.find(product => product.products)?.products || []
  console.log('account', userProducts)
  
  return (
    <View className="flex w-full gap-4">
      <HeaderComponent 
        text="My Announcements"
        btnRight="plus"
      />

      <View className="flex pt-4">
        <TextMessage text="Announcements" variante="text-base"/>
      </View>

      <FlatList
        data={userProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => 
          <ProductList 
            onPress={() => console.log('click product announcement')}
            productsData={item}
          /> 
        }
      />
    </View>
  )
}