import { Text, TouchableOpacity } from "react-native";

interface TextOnPressProps {
  text: string
  onPress: () => void
}

export function TextOnPress({ text, onPress, ...rest}: TextOnPressProps) {
  return (
    <TouchableOpacity 
      onPress={onPress}
      className="flex w-full items-center"
      {...rest}
    >
      <Text className="font-normal antialiased color-stone-500">{ text }</Text>
    </TouchableOpacity>
  )
}