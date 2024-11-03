import { useAuth } from "@/src/hooks/useAuth";
import { router } from "expo-router";
import { Image, Text, View } from "react-native";
import Profile from "./(tabs)/user";
import { ButtonText } from "@/src/components/buttonText";


export default function ProfileRoot() {
  const { user } = useAuth()
  
  return (
    <>
      { !user.email ? (
          <View className="flex-1 justify-start pt-32 items-center bg-lime-400 px-8 relative">
            <Image 
              source={require('@/assets/images/signIn.png')}
              className='flex size-96 rounded-full z-10'
            />
            
            <Text className="color-slate-900 antialiased font-semibold break-words w-[75%] text-center text-xl">
              Ops, you must signIn first or create a new account.
            </Text>

            <View className="flex w-full absolute bottom-10">
              <ButtonText 
                text="SignIn" 
                variante="slate-100" 
                onPress={() => router.navigate('/logIn')}
                size="w-full"
              />
            </View>
          </View>
        ) : (
          <Profile />
        )
      }
    </>
  )
} 