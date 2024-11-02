import { TouchableOpacity, View } from "react-native";


interface SwitchButtonProps {
  onPress: () => void
  exchange: boolean
}

export function SwitchButton({ onPress, exchange }: SwitchButtonProps) {
  return (
    <TouchableOpacity
      className="flex w-16 h-8 bg-stone-400 rounded-3xl overflow-hidden justify-center relative"
      onPress={onPress}
      activeOpacity={.9}
    >
      <View
        className={
        `flex size-7 rounded-full overflow-hidden absolute mx-1
        bg-stone-100
          ${!exchange && 'bg-stone-300 right-0'}
        `}
      />
    </TouchableOpacity>
  )
}