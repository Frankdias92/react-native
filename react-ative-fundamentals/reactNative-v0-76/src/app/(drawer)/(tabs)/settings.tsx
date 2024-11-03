import { useAuth } from '@/src/hooks/useAuth';
import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import { View, Text } from 'react-native';

export default function Tab() {
  const { user } = useAuth()

  useFocusEffect(useCallback(() => {
    console.log('user info from config tab:', user)
  }, [user]))
  
  return (
    <View className="flex-1 justify-center items-center bg-slate-900">
      <Text className="font-medium text-slate-100">Settings</Text>
    </View>
  )
}