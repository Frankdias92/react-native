import { Text, TextInput, Alert } from "react-native"
import { useForm, Controller } from "react-hook-form"

import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./style";
import { useAuth } from "@/src/hooks/useAuth";
import { UserDTO } from "@/src/dtos/UserDTO";


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
        text: 'SignIn',
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
            // onSubmitEditing={}
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