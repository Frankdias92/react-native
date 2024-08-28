import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Roboto_400Regular, useFonts } from "@expo-google-fonts/roboto";

import { Center, GluestackUIProvider, Text, VStack } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

import { AppRouter } from "@routes/app.routes";

export default function App() {
  const [fontsloaded] = useFonts({ Roboto_400Regular })
  
  return (
    <NavigationContainer>
      <GluestackUIProvider config={config}>
        {fontsloaded ? <AppRouter /> : <Text>Loading...</Text>}
      </GluestackUIProvider>
    </NavigationContainer>
  );
}
