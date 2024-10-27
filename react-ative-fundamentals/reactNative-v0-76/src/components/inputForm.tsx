import { FieldErrors, Noop } from "react-hook-form";
import { TextInputIOSProps } from "react-native";
import { TextInput } from "react-native-gesture-handler";


interface InputFormProps extends TextInputIOSProps {
  onBlur: Noop,
  onChange: () => void
  value: string
  errors: FieldErrors
  placeholder: string
}

export function InputForm({ onBlur, onChange, value, errors, placeholder, textContentType }: InputFormProps) {

  return (
    <TextInput
      placeholder={placeholder}
      onBlur={onBlur}
      textContentType={textContentType}
      onChangeText={onChange}
      value={value}
      placeholderTextColor={'#999999'}
      // style={styles.input}
      className={`flex w-full justify-center bg-slate-900 h-14 rounded-md px-4  placeholder:color-neutral-500 antialiased font-medium
        ${!errors ? 'border-red-500 border-2' : 'color-neutral-200 border-slate-600 border-2 focus-visible:border-1'}
        ${false ? 'text-2xl' : 'border-2 border-green-500'}
      `}
    />
  )
}