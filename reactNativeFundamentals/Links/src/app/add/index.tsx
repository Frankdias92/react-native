import { GestureResponderEvent, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { styles } from "./style";
import { router } from "expo-router";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { useState } from "react";


export default function Add() {
  const [name, setName] = useState('')
  const [adress, setAdress] = useState('')
  const [category, setCategory] = useState('')
  
  function handleClick(value: GestureResponderEvent) {
    console.log({ name, adress })
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
          placeholder="Name" 
          autoCorrect={false} 
          onChangeText={(value) => setName(value)}
        />
        <Input 
          placeholder="Name"
          onChangeText={(value) => setAdress(value)}
        />

        <Button title="Add" onPress={(e) => handleClick(e)}/>
      </View>
    </View>
  )
}