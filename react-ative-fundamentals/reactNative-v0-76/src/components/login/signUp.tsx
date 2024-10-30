import { Text, Alert } from "react-native"
import { useForm, Controller } from "react-hook-form"

import { styles } from "./style";
import { useAuth } from "@/src/hooks/useAuth";
import { UserDTO } from "@/src/dtos/UserDTO";
import { InputForm } from "../inputForm";
import { ButtonText } from "../buttonText";


export function HandleWithSignUp() {
  const { signUp } = useAuth()
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })
  
  const onSubmit = (data: UserDTO) => {
    
    if (data)
      Alert.alert('Success', 'New Account Created', [
      {
        text: 'Log In',
        onPress: () => signUp(data)
      }
    ]
  )
  }

  
  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputForm 
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            errors={errors}

            placeholder="Name"
            textContentType='name'
          />
        )}
        name="name"
      />
      {errors.name && <Text style={styles.textAlert}>Please, insert your name.</Text>}

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

            placeholder="Your Email"
            textContentType='emailAddress'
          />
        )}
        name="email"
      />
      {errors.email && <Text style={styles.textAlert}>Email is required!</Text>}

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

            placeholder="Password"
            textContentType='password'
          />
        )}
        name="password"
      />
      {errors.password && <Text style={styles.textAlert}>Password is required</Text>}

      <ButtonText 
        text="Create account"
        onPress={handleSubmit(onSubmit)}
        variante="lime-500"
      />

    </>
  )
}