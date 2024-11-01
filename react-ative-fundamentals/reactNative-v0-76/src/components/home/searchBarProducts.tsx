
import { Controller, useForm } from "react-hook-form";
import { InputForm } from "@/components/inputForm";
import { ReactNode } from "react";
import { View } from "react-native";

interface SearchBarProps {
  filterSearch: () => void
}

export function SearchBarProducts({ filterSearch }: SearchBarProps) {
  const { control, handleSubmit, formState: { errors } } = useForm()

  
  return (
    <View className="flex w-full">
    <Controller
        control={control}
        rules={{
          maxLength: 100,
          required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputForm 
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            errors={errors}

            placeholder="Search"
            textContentType='name'
            color='slate-100'
            OnPress={ filterSearch }
          />
        )}
        name="search"
      />
    </View>
  )
}