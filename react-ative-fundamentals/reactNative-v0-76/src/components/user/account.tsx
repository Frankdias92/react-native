import { View } from "react-native";
import { HeaderComponent } from "../headerComponent";


export function AccountManager() {
  return (
    <View className="flex w-full">
      <HeaderComponent 
        text="My Announcements"
        btnRight="plus"
      />
    </View>
  )
}