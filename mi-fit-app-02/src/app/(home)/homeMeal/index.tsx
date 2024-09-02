import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function HomeMeal() {
    const navigation = useNavigation()
    
    return (
        <View>
            <Text>Meal Home</Text>
            <Button title="Return to Home"
                onPress={() => navigation.navigate('home')}
            />
        </View>
    )
}