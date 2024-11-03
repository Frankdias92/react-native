import { ButtonText } from '@/src/components/buttonText';
import { styles } from '@/src/components/login/style';
import { TextMessage } from '@/src/components/textMessage';
import { AccountManager } from '@/src/components/user/account';
import { useAuth } from '@/src/hooks/useAuth';
import { router, useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Tab() {
  const { user } = useAuth()

  if (!user.email) {
    return (
      <View className="flex-1 px-8 justify-center items-center bg-lime-400 gap-4">
        <TextMessage 
          text='You dont have permission, please create an account'
          variante='text-bold-white'
          color='white'
          justify='center'
        />
        <TouchableOpacity className='flex px-4 py-2 bg-stone-100 rounded-lg'
          onPress={() => router.navigate('/logIn')}
        >
          <TextMessage text='Create an account' color='lime' variante='text-base'/>
        </TouchableOpacity>
      </View>
    )
  }

  useFocusEffect(useCallback(() => {
    console.log('user info from config tab:', user)
  }, [user]))
  
  return (
    <View className="flex w-full h-full px-8 justify-start pt-12 items-center bg-slate-200">
      <AccountManager />
    </View>
  )
}