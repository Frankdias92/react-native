import { useNavigation } from "expo-router";
import { Button, Text, TouchableHighlightBase } from "react-native";
import { View } from "react-native";

type BtnProps = {
    title: string
    page: string
}

export function ButtonCreateNew({title, page}: BtnProps) {
    const navigation = useNavigation()

    function handleWitchNavigation() {
        if (!page) {
            return console.log('page not found')
        } else {
            navigation.navigate(page)
        }
    }
    
    return (
        <View className="bg-red-950">

            {/* <Button color={'#D3E94C'}
                title={title}
                onPress={handleWitchNavigation}
            /> */}
        </View>
    )
}