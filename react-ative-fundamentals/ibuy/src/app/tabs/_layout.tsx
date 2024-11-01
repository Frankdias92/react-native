import { MaterialIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'beside-icon', // below 
        tabBarInactiveTintColor: '#CECECE',
        tabBarActiveTintColor: '#000',
        // tabBarShowLabel: false, // remove label
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Sign In',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="signUp"
        options={{
          tabBarLabel: 'Sign Up',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}