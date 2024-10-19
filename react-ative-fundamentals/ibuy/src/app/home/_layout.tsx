import { Slot, Stack } from "expo-router";
import { View } from "react-native";


export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: '100%', height: 70, backgroundColor: '#ee9' }}/>

      {/* <Slot /> */}
      <Stack  screenOptions={{ headerShown: false}}>
        <Stack.Screen 
          name="index" 
          options={{ 
            title: 'SignIn',
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="signUp" 
          options={{ 
            title: 'Create New Account',
            headerShown: true
          }}
        />
      </Stack>

      <View style={{ width: '100%', height: 70, backgroundColor: '#9ee' }}/>
    </View>
  )
}