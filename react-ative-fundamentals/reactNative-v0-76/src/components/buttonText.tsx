import { Button, Text, TouchableOpacity } from "react-native";


interface ButtonTextProps {
  text: string
  onPress: () => void
  variante: 'lime-500' | 'slate-100'
}

export function ButtonText({ text, onPress, variante, ...rest }: ButtonTextProps) {
  return (
    <TouchableOpacity 
        className={`flex w-full py-4 px-2 bg-${variante} rounded-lg`}
        onPress={onPress}
        {...rest}
      >
        <Text 
          className={`text-center font-semibold antialiased text-xl  
            ${variante === 'lime-500' ? 'color-slate-100' : 'color-stone-950'}`}
        >
          { text }
        </Text>
      </TouchableOpacity>
  )
}