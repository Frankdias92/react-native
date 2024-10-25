import { AuthContextProvider } from '../context/AuthContext';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons'

import '../../global.css'

import { Alert, Text } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';

import Home from './(drawer)';
import Login from './login';


const Drawer = createDrawerNavigator() 

export default function RootLayout() {
  const [userLogged, setUserLogged] = useState(false)

  function testUser() {
    if (userLogged === true) {
      setUserLogged(false)
      router.navigate('/login')
    } else {
      setUserLogged(true)
      router.navigate('/login')
    }
  }
  
  return (
    <AuthContextProvider>
      <Drawer.Navigator screenOptions={{headerShown: false}} >
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

          {/* Login  */}
          <Drawer.Screen
            name="login/index"   
            component={Login}
            initialParams={{ message: userLogged }}
            options={{
              drawerLabel: () => (
                <Text className='flex-1'>{userLogged === true ? 'LogIn' : 'SignOut'}</Text>
              ),
              drawerIcon: ({ color, size }) => (
                <MaterialIcons 
                  name={ userLogged ? 'login' : 'logout' }
                  size={size}
                  color={color}
                />
              )
            }}
            listeners={{
              drawerItemPress: (e) => {
                e.preventDefault()
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
              }
            }}
          />
      </Drawer.Navigator>
    </AuthContextProvider>
  )
}