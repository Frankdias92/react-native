import { MaterialIcons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { Drawer } from 'expo-router/drawer'
import { Text, TouchableOpacity, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'


export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ title: 'ibuy', headerShown: false}}>
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
            drawerLabel: 'LogOut',
            drawerIcon: ({ color }) => (
              <MaterialIcons name='logout' size={20} color={color}/>
            )
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}
