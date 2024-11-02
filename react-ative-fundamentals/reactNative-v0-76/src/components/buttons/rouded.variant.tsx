import { TouchableOpacity } from "react-native";
import { TextMessage } from "../textMessage";
import { FontAwesome } from "@expo/vector-icons";

export interface RoudedTextVariantProps {
  condition: true | false
  text: string
  onPress?: () => void
  showIcone?: boolean
}

export function RoudedTextVariant({ condition, text, onPress, showIcone }: RoudedTextVariantProps) {
  
  
  return (
    <TouchableOpacity activeOpacity={.90}
      className={`flex flex-row px-8 items-center gap-2 rounded-full
       ${!condition ? 'bg-stone-400' : 'bg-stone-900'} 
      `}
      onPress={onPress}
      >
        <TextMessage text={ text } variante={!condition ? 'text-base' : 'text-bold-white'}/>
        {showIcone && <FontAwesome name="close" color={'#f5f5f4'}/> }
      </TouchableOpacity>
  )
}