import { Alert, GestureResponderEvent, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { styles } from "./style";
import { router } from "expo-router";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { useState } from "react";
import { LinkStorage } from "@/storage/link-storage";


export default function Add() {
  const [name, setName] = useState('')
  const [adress, setAdress] = useState('')
  const [category, setCategory] = useState('')
  
  async function handleClick(value: GestureResponderEvent) {
    try {
      if(!category) {
        return Alert.alert('Category', 'select the category')
      }
  
      if (!name) {
        return Alert.alert('name', 'Insert a title')
      }
  
      if (!adress) {
        return Alert.alert('Website', 'Insert a link')
      }

      await LinkStorage.save({
        id: new Date().getTime().toString(),
        name,
        url: adress,
        category
      })

      const data = await LinkStorage.get()
      
      Alert.alert('Success', 'New link added', [
        {
          text: 'Ok',
          onPress: () => router.back()
        }
      ])
    } catch (error) {
      Alert.alert('Error', 'Something goes wrong on save the link')
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>
        <Text style={styles.title}>New</Text>
      </View>
      <Text style={styles.label}>Select a new category</Text>
      <Categories onChange={setCategory} selected={category}/>

      <View style={styles.form}>
        <Input 
          placeholder="Title" 
          autoCorrect={false} 
          onChangeText={(value) => setName(value)}
        />
        <Input 
          placeholder="Website"
          autoCapitalize="none"
          onChangeText={(value) => setAdress(value)}
        />

        <Button title="Add" onPress={(e) => handleClick(e)}/>
      </View>
    </View>
  )
}