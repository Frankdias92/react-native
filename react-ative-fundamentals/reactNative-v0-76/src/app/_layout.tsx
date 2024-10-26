import { Stack } from "expo-router";
import { AuthContextProvider } from "../context/AuthContext";

import '../../global.css'
import Login from "./user";

export default function RootLayout() {
  return (
    <AuthContextProvider >
      <Stack initialRouteName="user/index"/>
    </AuthContextProvider>
  )
}