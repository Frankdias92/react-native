import { View } from "react-native";
import { RoudedTextVariant } from "./rouded.variant";
import { useEffect, useState } from "react";


export function RoudedButton() {
  const [isConditionSelected, setIsConditionSelected] = useState(true)
  
  function handleWithCondition() {
    setIsConditionSelected(!true)
  }

  useEffect(() => {
    console.log('change value?', isConditionSelected)
  }, [isConditionSelected])
  
  return (
    <View className="flex flex-row w-full justify-sta
     gap-2 items-start">

      <RoudedTextVariant text="NEW" condition={isConditionSelected} onPress={handleWithCondition}/>
    </View>
  )
}