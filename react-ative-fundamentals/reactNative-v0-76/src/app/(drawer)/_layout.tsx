
import { Alert, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { router, useFocusEffect } from 'expo-router';
import { Drawer } from 'expo-router/drawer'

import { useAuth } from '@/hooks/useAuth';

import Login from '@/src/app';
import Profile from '@/src/app/(drawer)/(tabs)/user';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AvatarDrawer } from '@/src/components/drawer/profile/avatar';
import TabsHome from './(tabs)';
import { useCallback, useEffect } from 'react';


export default function DrawerLayout() {
  const { user, logOut } = useAuth()

  function userLogOut() {
    if (user) {
      logOut()
      router.navigate('/config')
    } else {
    }
  }
  
  // useFocusEffect(useCallback(() => {
  //   console.log('print user layout', user)
  // }, [user]))
  
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
          name="ProfileRoot"
          options={{
            drawerActiveBackgroundColor: 'transparent',
            drawerIcon: ({ color, size }) => (
              user.email ? <AvatarDrawer /> :  <AvatarDrawer />
            )
          }}
          listeners={{drawerItemPress: () => router.navigate('/(tabs)/user')}}
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
          listeners={{drawerItemPress: () => router.navigate('/(drawer)/(tabs)/')}}
        />

        {/* Login Button  */}
        <Drawer.Screen
          name="config"   
          initialParams={{ message: user }}
          options={{
            drawerLabel: !user.email ? 'LogIn' : 'SignOut',
            drawerIcon: ({ color, size }) => (
              <MaterialIcons 
                name={ !user.email ? 'login' : 'logout' }
                size={size}
                color={color}
              />
            )
          }}
          listeners={{
            drawerItemPress: (e) => {
              e.preventDefault()
              {
                user.email ? 
                Alert.alert('SignOut', 'Do you want to log out?', [
                  {
                    text: 'Cancel',
                    style: 'cancel',
                    onPress: () => router.navigate('/(drawer)/(tabs)')
                  },
                  {
                    text: 'Leave',
                    onPress: () => userLogOut()
                  }
                ])
                : router.navigate('/logIn')
              }
            }
          }}
        /> 
      </Drawer>
    </GestureHandlerRootView>
  )
}