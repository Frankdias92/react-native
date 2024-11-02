import { useAuth } from '@/src/hooks/useAuth';
import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';


export default function TabsLayout() {
  const { user } = useAuth()
  
  return (
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarLabelPosition: 'beside-icon',
          tabBarActiveTintColor: '#a3e635',
          // tabBarInactiveTintColor: 'blue',
          // tabBarActiveBackgroundColor: 'red',
          // tabBarInactiveBackgroundColor: 'orange',
          tabBarStyle: {backgroundColor: '#FFF'}
        }}
      >
        <Tabs.Screen name="index" options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <MaterialIcons name='home' color={color} size={size}/>
        }}/>
        {user.email ? (
            <Tabs.Screen name="user" options={{
              tabBarIcon: ({ color, size }) => <MaterialIcons name='person' color={color} size={size}/>
            }}/>
          ) : <Tabs.Screen name="user" options={{ tabBarButton: () => null }}/>
        }
        <Tabs.Screen name="settings" options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name='settings' color={color} size={size}/>
        }}/>

        <Tabs.Screen name='product' options={{ tabBarButton: () => null }}/>

      </Tabs>
  )
}