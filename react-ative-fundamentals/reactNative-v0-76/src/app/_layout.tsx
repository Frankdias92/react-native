import { AuthContextProvider } from '../context/AuthContext';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons'

import '../../global.css'

import { Alert, Image, Text, View } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';

import Home from './(drawer)';
import Login from './login';
import Profile from './login/profile';


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
      <Drawer.Navigator 
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: '#999',
          drawerActiveTintColor: '#44403c',
          drawerContentContainerStyle: {
            flex: 1,
            backgroundColor: '#C3C3C3',

          }

        }} 
      >
        <Drawer.Screen
          name="login/profile/index"          
          component={Profile}
          options={{
            drawerLabel: 'Profile',
            drawerActiveBackgroundColor: 'transparent',
            drawerIcon: ({ color, size }) => (
              <View className='flex flex-row gap-6 w-full h-32 justify-start items-center relative'>
                <Image 
                  source={{uri:'https://www.github.com/frankdias92.png'}}
                  className='flex size-24 rounded-full border-green-500 border-2'
                />
                <View>
                  <Text className='text-xl font-medium color-stone-700'>Franklin</Text>
                  <Text className='text-lg font-light color-stone-500'>your@email.com</Text>
                </View>
                <View className='w-full h-0.5 bg-stone-400 absolute bottom-0'/>
              </View>
            )
          }}
          listeners={{drawerItemPress: () => console.log('click')}}
        />

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
                <Text >{userLogged === true ? 'LogIn' : 'SignOut'}</Text>
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
                {
                  !userLogged ? 
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
    </AuthContextProvider>
  )
}