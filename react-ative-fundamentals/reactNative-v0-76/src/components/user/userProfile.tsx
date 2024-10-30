import { useState } from "react";
import { Image, Text, View } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from "react-native-gesture-handler";

export function UserProfile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)
  const [image, setImage] = useState<string | null>(null)

  async function handleUserPhotoSelect() {
    try {
      setPhotoIsLoading(true)

      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true
      })

      if (!photoSelected.canceled) {
        setImage(photoSelected.assets[0].uri)
      }
      
    } catch (error) {
      console.error('something wrong with the photo', error)
    } finally {
      setPhotoIsLoading(false)
    }
  }
  
  return (
    <View className='flex flex-row gap-6 w-full justify-start items-center relative'>
      <View className="flex size-36 relative justify-center items-center">
        <TouchableOpacity >

        <Image 
          source={{uri:'https://www.github.com/frankdias92.png'}}
          className='flex size-32 rounded-full z-10'
        />
          </TouchableOpacity>
        <View className="flex absolute size-36 rounded-full z-0 border-lime-700 border-[2px]"/>
      </View>
    </View>
  )
}