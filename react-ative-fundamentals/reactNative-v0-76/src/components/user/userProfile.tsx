import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { Feather } from "@expo/vector-icons";

interface UserProfileProps {
  imageUser: string
  onPress?: () => void
}

export function UserProfile({ imageUser, onPress }: UserProfileProps) {
  
  return (
    <View className='flex flex-row gap-6 w-full justify-start items-center relative'>
      <View className="flex size-36 relative justify-center items-center">

        { imageUser ? (
          <>
            <Image 
              source={{uri: imageUser}}
              className='flex size-32 rounded-full z-0'
            />

          <TouchableOpacity 
            onPress={onPress} 
            className="flex rounded-full z-20 items-center justify-center absolute bg-lime-500 size-8 right-2 bottom-2"
          >
            <Feather name="camera" color={'white'} size={18} />     
          </TouchableOpacity>
          </>
        ) : (
            <TouchableOpacity onPress={onPress} className="flex size-32 rounded-full z-20 items-center justify-center">
              <Feather name="camera" color={'green'} size={32}/>     
            </TouchableOpacity>
          )
        }
        <View className="flex absolute size-36 rounded-full z-0 border-lime-500 border-[2px]"/>
      </View>
    </View>
  )
}