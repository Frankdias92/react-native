import { TouchableOpacity, View } from "react-native";
import { TextMessage } from "./textMessage";
import { Feather, MaterialIcons } from "@expo/vector-icons";

interface HeaderComponentProps {
  btnReturn?: boolean
  text?: string
  btnRight?: keyof typeof Feather.glyphMap
}

export function HeaderComponent({ btnReturn, text, btnRight }: HeaderComponentProps) {
  return (
    <View className="flex flex-row w-full relative justify-center items-center">
      {btnReturn && 
        <View className="flex absolute left-0">
          <TouchableOpacity onPress={() => console.log('create a new proeduct')}>
          <MaterialIcons name="arrow-back" color={'#1c1917'} size={24}/>
          </TouchableOpacity>
        </View>
      }
      
      {text &&
        <TextMessage text="My Announcements" variante="text-xl" color="black"/>
      }
      
      {btnRight &&
        <View className="flex absolute right-0">
          <TouchableOpacity onPress={() => console.log('create a new proeduct')}>
            <Feather name="plus" size={24} color="#1c1917" />
          </TouchableOpacity>
        </View>
      }
    </View>
  )
}