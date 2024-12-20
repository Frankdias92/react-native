import { Text, View } from "react-native";
import { UserHomeHeader } from "../user/userHomeHeader";
import { ButtonText } from "../buttonText";

export function HeaderHome() {
  return (
    <View className="flex w-full justify-center items-stretch">
      <View className="flex w-full h-fit flex-row items-stretch gap-2"> 
        <UserHomeHeader />
        <ButtonText 
          text="Sell an item" 
          variante="lime-500" 
          onPress={() => console.log('click new header home')}
          size="flex-1"
          icone="plus"
        />
      </View>
    </View>
  )
}