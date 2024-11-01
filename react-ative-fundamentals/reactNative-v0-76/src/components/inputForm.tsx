import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { FieldErrors, Noop } from "react-hook-form";
import { TextInputIOSProps, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";


interface InputFormProps extends TextInputIOSProps {
  onBlur: Noop,
  onChange: () => void
  value: string
  errors: FieldErrors
  placeholder: string
  color?: 'slate-900' | 'slate-100'
  OnPress?: () => void
}

export function InputForm({ onBlur, onChange, value, errors, placeholder, textContentType, color, OnPress }: InputFormProps) {

  return (
    <View className="flex w-full justify-center relative">
      <TextInput
        placeholder={placeholder}
        onBlur={onBlur}
        textContentType={textContentType}
        onChangeText={onChange}
        value={value}
        placeholderTextColor={'red'}
        // style={styles.input}
        className={`flex w-full justify-center h-14 rounded-md px-4  placeholder:color-stone-300 antialiased font-medium
          ${ color ? 'bg-stone-100 border-stone-200 color-stone-500' : 'bg-slate-900 border-slate-600' }
          ${!errors ? 'border-red-500 border-2' : 'color-neutral-200  border-2 focus-visible:border-1'}
          ${false ? 'text-2xl' : 'border-2 border-green-500'}
        `}
      />

      <View className="flex flex-row gap-2 absolute right-4">
      <TouchableOpacity className="flex ">
          <MaterialIcons name="search" size={24} color={'#0f172a'}/>
        </TouchableOpacity>

        <View className="flex w-px h-6 bg-stone-900"/>
        
        <TouchableOpacity className="flex" onPress={OnPress}> 
          <View className="rotate-90">
            <FontAwesome6 name="sliders" size={24} color={'#1c1917'} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}