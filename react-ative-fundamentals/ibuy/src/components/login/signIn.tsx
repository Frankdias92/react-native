import { Text, View, TextInput, Button, Alert } from "react-native"
import { useForm, Controller } from "react-hook-form"

import { UserDTO } from "@/dtos/UserDTO";
import { useAuth } from "@/hooks/useAuth";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./style";

export default function HandleWithSignIn() {
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
  const onSubmit = (data: UserDTO) => {
    if (data) {
      if (user.email === data.email && user.password === data.password) {
        console.log(true)
        signIn(data)
      } else console.log(false)
    }
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
          <TextInput
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor={'#999999'}
            style={styles.input}
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
          <TextInput
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor={'#999999'}
            style={styles.input}
          />
        )}
        name="password"
      />
      {errors.password && <Text style={styles.textAlert}>Password is required</Text>}

      <TouchableOpacity 
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </>
  )
}