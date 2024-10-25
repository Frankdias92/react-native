// import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { Drawer } from 'expo-router/drawer'
import { MaterialIcons } from '@expo/vector-icons'

const Drawer = createDrawerNavigator() 

import '../../global.css'
import { View } from 'react-native'
import Home from './(drawer)';

export default function RootLayout() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
        <Drawer.Screen 
          name="(drawer)/index"          
          component={Home}
          options={{
            drawerLabel: 'Home',
            drawerIcon: ({ color, size }) => (
              <MaterialIcons 
                name='home'
                size={size}
                color={color}
              />
            )
          }}
        />
    </Drawer.Navigator>
  )
}