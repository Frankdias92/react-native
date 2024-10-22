import { Text, TextInput, Alert } from "react-native"
import { useForm, Controller } from "react-hook-form"

import { UserDTO } from "@/dtos/UserDTO";
import { useAuth } from "@/hooks/useAuth";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./style";
import { send } from "process";


export default function HandleWithSignUp() {
  const { signUp, user } = useAuth()
  
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
    signUp(data)
    if (data)
    Alert.alert('Success', 'New Account Created', [
      {
        text: 'SignIn',
        onPress: () => console.log('ok')
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
          <TextInput
            placeholder="First name"
            onBlur={onBlur}
            textContentType="name"
            onChangeText={onChange}
            value={value}
            placeholderTextColor={'#999999'}
            style={styles.input}
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
          <TextInput
            placeholder="Email"
            textContentType="emailAddress"
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
            textContentType="password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor={'#999999'}
            style={styles.input}
            onSubmitEditing={send}
          />
        )}
        name="password"
      />
      {errors.password && <Text style={styles.textAlert}>Password is required</Text>}

      <TouchableOpacity 
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
    </>
  )
}