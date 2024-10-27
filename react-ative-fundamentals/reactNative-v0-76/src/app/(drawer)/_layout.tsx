
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Alert, Image, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router';

import { useAuth } from '@/hooks/useAuth';

import Login from '@/src/app';
import Profile from '@/src/app/(drawer)/user';
import Home from '@/src/app/(drawer)/home';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AvatarDrawer } from '@/src/components/drawer/profile/avatar';

const Drawer = createDrawerNavigator() 

export default function DrawerLayout() {
  const { user, logOut } = useAuth()

  function testUser() {
    if (user) {
      logOut()
      console.log('print function testUser', user)
    } else {
      router.navigate('/')
    }
  }
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer.Navigator 
        initialRouteName='home/(drawer)/index'
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: '#1c1917',
          drawerActiveTintColor: '#eee',
          drawerContentContainerStyle: {
            flex: 1,
            backgroundColor: '#a3e635',
          }
        }} 
      >
        {/* Profile */}
        <Drawer.Screen
          name="login/profile/index"          
          component={Profile}
          options={{
            drawerLabel: 'Profile',
            drawerActiveBackgroundColor: 'transparent',
            drawerIcon: ({ color, size }) => (
              <AvatarDrawer />
            )
          }}
          listeners={{drawerItemPress: () => console.log('click')}}
        />

        {/* Home */}
        <Drawer.Screen
          name="(drawer)/index"          
          component={Home}
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
          name="index"   
          component={Login}
          initialParams={{ message: user }}
          options={{
            drawerLabel: () => (
              <Text >{ !user ? 'LogIn' : 'SignOut'}</Text>
            ),
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
                    onPress: () => testUser()
                  }
                ])
                : testUser()
              }
            }
          }}
        />
      </Drawer.Navigator>
    </GestureHandlerRootView>
  )
}