
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Alert, Image, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router';

import { useAuth } from '@/hooks/useAuth';

import Login from '@/src/app/user';
import Profile from '@/src/app/user/profile';
import Home from '@/app/(drawer)/home';

const Drawer = createDrawerNavigator() 

export default function DrawerLayout() {
  const { user } = useAuth()
  // const [userLogged, setUserLogged] = useState(false)

  function testUser() {
    if (!user) {
      // router.navigate('/(drawer)')
      router.navigate('/user')
    } else {
      console.log(user)
    }
  }
  
  return (
    <Drawer.Navigator 
      initialRouteName='index'
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
      {/* Profile */}
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

      {/* Login  */}
      <Drawer.Screen
        name="login/index"   
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
  )
}