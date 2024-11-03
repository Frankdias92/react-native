import { AuthContextProvider } from '../context/AuthContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View } from 'react-native';
import { useState } from 'react';

import { Stack } from 'expo-router';

import '../../global.css'

export default function RootLayout() {
  const [layouts, setLayout] = useState(false);

  return (
    <AuthContextProvider>
      <View className="flex-1 bg-slate-950">
        <GestureHandlerRootView style={{ flex: 1 }} >
          <Stack screenOptions={
            { 
              headerShown: false, 
              statusBarColor: '#a3e635', // look for issue on loading
              statusBarStyle: 'light',
              statusBarAnimation: 'slide'
            }}
          />
        </GestureHandlerRootView>
      </View>
    </AuthContextProvider>
  );
}
