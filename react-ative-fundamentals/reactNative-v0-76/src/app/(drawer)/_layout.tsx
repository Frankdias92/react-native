
import { Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router';
import { Drawer } from 'expo-router/drawer'

import { useAuth } from '@/hooks/useAuth';

import Login from '@/src/app';
import Profile from '@/src/app/(drawer)/(tabs)/user';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AvatarDrawer } from '@/src/components/drawer/profile/avatar';
import TabsHome from './(tabs)';


export default function DrawerLayout() {
  const { user, logOut } = useAuth()

  function userLogOut() {
    if (user) {
      logOut()
      router.navigate('/')
      console.log('print function testUser', user)
    } else {
    }
  }
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: '#1c1917', // stone 900
          drawerActiveTintColor: '#fafaf9', // stone 50
          drawerContentContainerStyle: {
            flex: 1,
            backgroundColor: '#a3e635', // lime 400
          }
        }}
      >     
        {/* Profile Avatar */}
        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: 'Profile',
            drawerActiveBackgroundColor: 'transparent',
            drawerIcon: ({ color, size }) => (
              <AvatarDrawer />
            )
          }}
          listeners={{drawerItemPress: () => router.navigate('/(drawer)/(tabs)/user')}}
        />

        {/* Home */}
        <Drawer.Screen
          name="(tabs)"
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
          listeners={{drawerItemPress: () => console.log('click')}}
        />

        {/* Login Button  */}
        <Drawer.Screen
          name="config"   
          initialParams={{ message: user }}
          options={{
            drawerLabel: !user ? 'LogIn' : 'SignOut',
            drawerIcon: ({ color, size }) => (
              <MaterialIcons 
                name={ !user ? 'login' : 'logout' }
                size={size}
                color={color}
              />
            )
          }}
          listeners={{
            drawerItemPress: (e) => {
              e.preventDefault()
              {
                user ? 
                Alert.alert('SignOut', 'Do you want to log out?', [
                  {
                    text: 'Cancel',
                    style: 'cancel'
                  },
                  {
                    text: 'Leave',
                    onPress: () => userLogOut()
                  }
                ])
                : userLogOut()
              }
            }
          }}
        /> 
      </Drawer>
    </GestureHandlerRootView>
  )
}