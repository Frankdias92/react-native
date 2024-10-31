import { Text, ToastAndroid } from "react-native"
import { useForm, Controller } from "react-hook-form"

import { styles } from "./style";
import { useAuth } from "@/src/hooks/useAuth";
import { UserSignInDTO } from "@/src/dtos/UserDTO";
import { InputForm } from "../inputForm";
import { ButtonText } from "../buttonText";


export function HandleWithSignIn() {
  const { signIn, user } = useAuth()
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  })


  const onSubmit = async (data: UserSignInDTO) => {
    signIn(data)
  }

  
  return (
    <>
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

            placeholder="Email"
            textContentType='name'
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
            textContentType='emailAddress'
          />
        )}
        name="password"
      />
      {errors.password && <Text style={styles.textAlert}>Password is required</Text>}

      <ButtonText
        text="Login"
        onPress={handleSubmit(onSubmit)}
        variante="lime-500"
      />
    </>
  )
}