import { ReactNode } from "react";
import { Text, View } from "react-native";

interface TextMessageProps {
  text: string
  variante?: 'text-base' | 'text-xl' | 'text-bold' | 'text-bold-white'
  children?: ReactNode
  color?: 'lime' | 'white' | 'black'
  justify?: 'center'
}

export function TextMessage({ text, variante, color, justify, children }: TextMessageProps) {
  return (
    <View className="gap-2">
    <Text 
      className={`flex text-base leading-6 antialiased
        ${variante === 'text-base' && 'text-base '}
        ${variante === 'text-bold' && 'text-base font-bold leading-4'}
        ${variante === 'text-bold-white' && 'text-base font-bold color-stone-50'}
        ${variante === 'text-xl' && 'text-xl leading-10 font-bold'}
        ${color === 'lime' && 'color-lime-500'}
        ${color === 'white' && 'color-stone-100'}
        ${color === 'black' && 'color-stone-900'}
        ${justify === 'center' && 'text-center' }
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