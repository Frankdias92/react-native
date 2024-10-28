import { Image, Text, View } from "react-native";


export function UserProfile() {
  return (
    <View className='flex flex-row gap-6 w-full justify-start items-center relative'>
      <View className="flex size-36 relative justify-center items-center">
        <Image 
          source={{uri:'https://www.github.com/frankdias92.png'}}
          className='flex size-32 rounded-full z-10'
        />
        <View className="flex absolute size-36 rounded-full z-0 border-lime-700 border-[2px]"/>
      </View>
    </View>
  )
}