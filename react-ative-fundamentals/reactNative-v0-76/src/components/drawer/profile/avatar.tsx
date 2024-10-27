import { Image, Text, View } from "react-native";


export function AvatarDrawer() {
  return (
    <View className='flex flex-row gap-6 w-full h-32 justify-start items-center relative'>
      <View className="flex size-24 relative justify-center items-center">
        <Image 
          source={{uri:'https://www.github.com/frankdias92.png'}}
          className='flex size-20 rounded-full z-10'
        />
        <View className="flex absolute size-24 rounded-full z-0 border-lime-700 border-[2px]"/>
      </View>
      <View>
        <Text className='text-xl font-medium color-stone-900'>Franklin</Text>
        <Text className='text-lg font-light color-neutral-700'>your@email.com</Text>
      </View>
      <View className='w-full h-0.5 bg-stone-900 absolute bottom-0'/>
    </View>
  )
}