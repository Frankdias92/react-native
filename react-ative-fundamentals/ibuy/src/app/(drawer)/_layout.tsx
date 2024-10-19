import { MaterialIcons } from '@expo/vector-icons'
import { Drawer } from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ title: 'ibuy' }}>
        <Drawer.Screen 
          name='(tabs)' 
          options={{ 
            drawerLabel: 'start',
            drawerIcon: ({ color }) => (
              <MaterialIcons name='home' size={20} color={color}/> 
            )
          }}
        />

        <Drawer.Screen 
          name='configs' 
          options={{ 
            drawerLabel: 'Configs',
            drawerIcon: ({ color }) => (
              <MaterialIcons name='settings' size={20} color={color}/> 
            )
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}