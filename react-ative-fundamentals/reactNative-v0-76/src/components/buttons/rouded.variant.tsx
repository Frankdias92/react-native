import { TouchableOpacity } from "react-native";
import { TextMessage } from "../textMessage";
import { FontAwesome } from "@expo/vector-icons";

interface RoudedTextVariantProps {
  condition: true | false
  text: string
  onPress?: () => void
}

export function RoudedTextVariant({ condition, text, onPress }: RoudedTextVariantProps) {
  
  
  return (
    <TouchableOpacity
      className={`flex flex-row px-8 items-center gap-2 rounded-full
       ${condition ? 'bg-stone-400' : 'bg-lime-500'} 
      `}
      onPress={onPress}
      >
        <TextMessage text={ text } variante={condition ? 'text-base' : 'text-bold-white'}/>
        <FontAwesome name="close" color={'#f5f5f4'}/>
      </TouchableOpacity>
  )
}