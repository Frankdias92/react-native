import { AuthContextProvider } from '@/context/AuthContext'
import { MaterialIcons } from '@expo/vector-icons'
import { Drawer } from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function Layout() {
  return (
    <AuthContextProvider >
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer 
          screenOptions={{
            drawerActiveTintColor: '#000',
            drawerInactiveTintColor: '#CECECE',
            headerShown: false
          }}
        >
          <Drawer.Screen 
            name='home'
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

          <Drawer.Screen 
            name='tabs'
            options={{
              drawerLabel: 'Tabs & Drawer',
              drawerIcon: ({ color, size }) => (
                <MaterialIcons 
                  name='home'  
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </AuthContextProvider>
  )
}