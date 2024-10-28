import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';


export default function TabsLayout() {
  return (
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarLabelPosition: 'beside-icon',
          tabBarActiveTintColor: '#000',
          // tabBarInactiveTintColor: 'blue',
          // tabBarActiveBackgroundColor: 'red',
          // tabBarInactiveBackgroundColor: 'orange',
          tabBarStyle: {backgroundColor: 'gray'}
        }}
      >
        <Tabs.Screen name="index" options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <MaterialIcons name='home' color={color} size={size}/>
        }}/>
        <Tabs.Screen name="user" options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name='person' color={color} size={size}/>
        }}/>
        <Tabs.Screen name="settings" options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name='settings' color={color} size={size}/>
        }}/>

        <Tabs.Screen name='product' options={{ tabBarButton: () => null }}/>
      </Tabs>
  )
}