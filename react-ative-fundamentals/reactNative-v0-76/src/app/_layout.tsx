import { Slot, Stack } from "expo-router";
import { AuthContextProvider } from "../context/AuthContext";
import { Drawer } from 'expo-router/drawer'

import '../../global.css'
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <AuthContextProvider >
      <GestureHandlerRootView style={{ flex: 1 }} >
        <View className="flex-1 bg-slate-950">
          <Slot initialRouteName="index" screenOptions={{
            headerShown: false
          }}/>
        </View>
      </GestureHandlerRootView>
    </AuthContextProvider>
  )
}