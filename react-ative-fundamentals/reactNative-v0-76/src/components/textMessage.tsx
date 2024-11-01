import { Text } from "react-native";

interface TextMessageProps {
  text: string
}

export function TextMessage({ text }: TextMessageProps) {
  return (
    <Text 
      className="flex text-base leading-6 color-stone-500 antialiased"
    >
      { text }
    </Text>
  )
}