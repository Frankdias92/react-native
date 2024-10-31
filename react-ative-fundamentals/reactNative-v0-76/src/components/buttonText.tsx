import { Feather } from "@expo/vector-icons";
import { Button, Text, TouchableOpacity } from "react-native";


type ButtonTextProps = {
  text: string
  onPress: () => void
  variante: 'lime-500' | 'slate-100' 
  size: 'w-full' | 'flex-1'
  icone?: keyof typeof Feather.glyphMap 
}

export function ButtonText({ text, onPress, variante, size, icone, ...rest }: ButtonTextProps) {
  return (
    <TouchableOpacity 
      className={`flex ${size === 'w-full' ? 'w-full' : 'flex-1 h-10'} flex-row items-center gap-2 justify-center px-2  rounded-lg h-14 relative
        ${variante === 'lime-500' ? 'bg-lime-500' : 'bg-slate-100'}
      `}
      onPress={onPress}
      {...rest}
    >
      <Text className="flex absolute left-2 color-slate-100">{icone && <Feather name={icone} size={14}/>}</Text>
      <Text 
        className={`text-center font-semibold antialiased text-xl
          ${variante === 'lime-500' ? 'color-slate-100' : 'color-stone-950'}
          ${size === 'w-full' ? '' : 'text-[12px] font-light'}
          `}
      >
        { text }
      </Text>
    </TouchableOpacity>
  )
}