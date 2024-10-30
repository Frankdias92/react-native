import { useAuth } from "@/src/hooks/useAuth";
import { router } from "expo-router";
import { Image, Text, View } from "react-native";
import Profile from "./(tabs)/user";
import { ButtonText } from "@/src/components/buttonText";

import logInImage from '@/assets/images/signIn.svg'


export default function ProfileRoot() {
  const { user } = useAuth()
  
  
  return (
    <>
      {user ? (
          <View className="flex-1 justify-center items-center bg-lime-400 px-8 relative">
            <Image 
              source={require('@/assets/images/signIn.png')}
              className='flex size-32 rounded-full z-10'
            />
            
            <Text className="color-slate-900 antialiased font-semibold break-words">Ops, signIn into your account, please.</Text>

            <View className="flex w-full absolute bottom-10">
              <ButtonText text="SignIn" variante="slate-100" onPress={() => router.navigate('/logIn')} />
            </View>
          </View>
        ) : (
          <Profile />
        )
      }
    </>
  )
} 