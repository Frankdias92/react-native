import { ReactNode } from "react";
import { Text, View } from "react-native";

interface TextMessageProps {
  text: string
  variante?: 'text-base' | 'text-xl' | 'text-bold' | 'text-bold-white'
  children?: ReactNode
}

export function TextMessage({ text, variante, children }: TextMessageProps) {
  return (
    <View className="gap-2">
    <Text 
      className={`flex text-base leading-6 color-stone-500 antialiased
        ${variante === 'text-base' && 'text-base '}
        ${variante === 'text-bold' && 'text-base font-bold color-stone-900'}
        ${variante === 'text-bold-white' && 'text-base font-bold color-stone-50'}
        ${variante === 'text-xl' && 'text-xl leading-10 color-stone-900 font-bold'}
      `}
    >
      { text }
    </Text>
      <>
        {children}
      </>
    </View>
  )
}