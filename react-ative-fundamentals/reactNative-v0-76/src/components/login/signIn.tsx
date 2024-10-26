import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, TextInput, ToastAndroid } from "react-native"
import { useForm, Controller } from "react-hook-form"

import { styles } from "./style";
import { useAuth } from "@/src/hooks/useAuth";
import { UserSignInDTO } from "@/src/dtos/UserDTO";


export default function HandleWithSignIn() {
  const { signIn, user, isLoadingUserStorageData } = useAuth()
  
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
    if (user.email === data.email && user.password === data.password) {
      signIn(data)
    } else {
      console.log('error')
      ToastAndroid.show('Ops! something wrong with your data.', ToastAndroid.LONG);
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
        disabled={isLoadingUserStorageData}
      >
        <Text style={styles.text}>
          Login
        </Text>
      </TouchableOpacity>
    </>
  )
}