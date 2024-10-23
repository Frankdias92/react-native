import { MaterialIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { Image } from 'react-native'
import { styles } from './user'
import { useAuth } from '@/hooks/useAuth'


export default function TabsLayout() {
  const { user } = useAuth()
  
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarLabelPosition: 'beside-icon'
    }}>
      <Tabs.Screen name='index'
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='list' color={color} size={size} />
          ),
          tabBarLabel: 'Products'
        }}
      />
      <Tabs.Screen name='order'
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='shopping-bag' color={color} size={size} />
          ),
          tabBarLabel: 'Receip'
        }}
      />
      <Tabs.Screen name='user'
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image 
              style={styles.logo}
              source={require('@/images/profileimg.png')}
            />
            // <MaterialIcons name='person' color={color} size={size} />
          ),
          tabBarLabel: user ? `${user.name}` : 'user'
        }}
      />

    <Tabs.Screen name='product'
      options={{
        tabBarButton: () => null
      }}  
    />

    </Tabs>
  )
}
