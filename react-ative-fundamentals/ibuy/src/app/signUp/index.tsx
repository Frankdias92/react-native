import { Text, View, TextInput, Button, Alert } from "react-native"
import { useForm, Controller } from "react-hook-form"

import { UserDTO } from "@/dtos/UserDTO";
import { styles } from "./style";
import { useAuth } from "@/hooks/useAuth";

export default function SignUp() {
  const { setUser, user } = useAuth()
  
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
  const onSubmit = (data: UserDTO) => setUser(data)

  
  return (
    <View style={styles.container}>
      <Text>{ user.name } | { user.email } | { user.password }</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="First name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor={'#999999'}
            style={styles.input}
          />
        )}
        name="name"
      />
      {errors.name && <Text>Please, insert your name.</Text>}

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
      {errors.email && <Text>Email is required!</Text>}

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
      {errors.password && <Text>Password is required</Text>}

      <View style={styles.button}>
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  )
}