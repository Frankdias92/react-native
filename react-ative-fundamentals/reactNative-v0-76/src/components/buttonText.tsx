import { Feather } from "@expo/vector-icons";
import { Button, Text, TouchableOpacity } from "react-native";


type ButtonTextProps = {
  text: string
  onPress?: () => void
  variante: 'lime-500' | 'slate-100' | 'slate-900'
  size: 'w-full' | 'flex-1'
  icone?: keyof typeof Feather.glyphMap 
}

export function ButtonText({ text, onPress, variante, size, icone, ...rest }: ButtonTextProps) {
  return (
    <TouchableOpacity 
      className={`flex flex-row items-center gap-2 justify-center px-2  rounded-lg h-14 relative
        ${size === 'w-full' ? 'w-full' : 'flex-1 h-10'}
        ${variante === 'lime-500' && 'bg-lime-500'}
        ${variante === 'slate-100' && 'bg-slate-100'}
        ${variante === 'slate-900' && 'bg-slate-900'}
      `}
      onPress={onPress}
      {...rest}
    >
      <Text 
        className="flex absolute left-2 color-slate-100"
      >
        {icone && <Feather name={icone} size={14}/>}
      </Text>
      <Text 
        className={`text-center font-semibold antialiased text-xl
          ${variante === 'lime-500' && 'color-slate-100'}
          ${variante === 'slate-100' && 'color-stone-950'}
          ${variante === 'slate-900' && 'color-stone-100'}
          ${size === 'w-full' ? '' : 'text-[12px] font-light'}
          `}
      >
        { text }
      </Text>
    </TouchableOpacity>
  )
}