import { useAuth } from '@/src/hooks/useAuth';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigationState } from '@react-navigation/native';
import { router, Tabs } from 'expo-router';


export default function TabsLayout() {
  const { user } = useAuth()

  // const isProductScreen = useNavigationState(
  //   (state) => state?.routes[state.index]?.name === 'product/[id]'
  // );

  return (
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarLabelPosition: 'beside-icon',
          tabBarActiveTintColor: '#a3e635',
          // tabBarInactiveTintColor: 'blue',
          // tabBarActiveBackgroundColor: 'red',
          // tabBarInactiveBackgroundColor: 'orange',
          tabBarStyle: { backgroundColor: '#FFF' }
        }}
      >
        <Tabs.Screen name="index" options={{
          headerStyle:{backgroundColor: '#a3e635'},
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <MaterialIcons name='home' color={color} size={size}/>
        }}/>
        {user.email ? (
            <Tabs.Screen name="user" options={{
              tabBarIcon: ({ color, size }) => <MaterialIcons name='person' color={color} size={size}/>
            }}/>
          ) : <Tabs.Screen name="user" options={{ tabBarButton: () => null }}/>
        }
        <Tabs.Screen 
          name="settings" 
          options={{
            tabBarIcon: ({ color, size }) => <MaterialIcons name='settings' color={color} size={size}/>,
            tabBarLabel: 'Account'
          }}
        />

        <Tabs.Screen 
          name='product' 
          options={{ 
            tabBarButton: () => null,
            headerShown: false,
            tabBarStyle: {display: 'none'}
          }}
        />

      </Tabs>
  )
}