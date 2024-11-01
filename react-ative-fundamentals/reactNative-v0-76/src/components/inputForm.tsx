import { FieldErrors, Noop } from "react-hook-form";
import { TextInputIOSProps } from "react-native";
import { TextInput } from "react-native-gesture-handler";


interface InputFormProps extends TextInputIOSProps {
  onBlur: Noop,
  onChange: () => void
  value: string
  errors: FieldErrors
  placeholder: string
  color?: 'slate-900' | 'slate-100'
}

export function InputForm({ onBlur, onChange, value, errors, placeholder, textContentType, color }: InputFormProps) {

  return (
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
  )
}