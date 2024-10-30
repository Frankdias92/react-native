import { ButtonText } from "@/src/components/buttonText";
import { InputForm } from "@/src/components/inputForm";
import { UserProfile } from "@/src/components/user/userProfile";
import { useAuth } from "@/src/hooks/useAuth";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, View } from "react-native";


type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string
}


export default function ControllerProfile() {
  const [submittedData, setSubmittedData] = useState<FormDataProps>({} as FormDataProps)
  const { control, handleSubmit, formState: { errors }} = useForm<FormDataProps>()
  const { user } = useAuth()

  const onSubmit = (data: FormDataProps) => {
    setSubmittedData(data)
  }
  
  useEffect(() => {
    console.log('Submitted Data', submittedData)
  }, [submittedData])
  
  return (
    <View className="flex-1 justify-center items-center gap-4">
      <View>
        <UserProfile />
      </View>

      <Controller 
        name="name"
        control={control}
        render={({ field: {onChange, value, onBlur} }) => (
          <InputForm 
            placeholder="Name"
            textContentType="name"
            onBlur={onBlur}
            onChange={onChange}
            value={user.name || value}
            errors={errors}
          />
        )} 
        rules={{ required: 'You must enter with a value'}}
      />
      
      <Controller 
        name="email"
        control={control}
        render={({ field: {onChange, value, onBlur} }) => (
          <InputForm 
            placeholder='E-mail' 
            textContentType='emailAddress'
            onBlur={onBlur}
            onChange={onChange}
            value={user.email || value}
            // errors={errors.email?.message}
            errors={errors}
          />
        )}
        rules={{ required: 'you must enter with your email' }}
      />

      <Controller 
        name="password"
        control={control}
        render={({ field: {value, onBlur, onChange}}) => (
          <InputForm 
            placeholder='password'
            textContentType='password'
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            // errors={errors.email?.message}
            errors={errors}
          />
        )}
        rules={{ required: 'you must enter with you password'}}
      />

      <Controller 
        name="password_confirm"
        control={control}
        render={({ field: {onChange, value, onBlur}}) => (
          <InputForm 
            placeholder='password'
            textContentType='password'
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            // errors={errors.email?.message}
            errors={errors}
          />
        )}
      />

      <ButtonText text="Update profile" variante="lime-500" onPress={handleSubmit(onSubmit)} />

    </View>
  )
}