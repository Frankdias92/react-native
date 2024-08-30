import { Alert, Button, View } from "react-native";
import { styleBtn } from "./styleBtn";


export function BtnNewMeal() {
    const handleOnClick = () => {
        Alert.alert('btn works')
    }
    
    return (
        <View style={styleBtn.btnMeal}>
            <Button 
                title="Nova Refeição" 
                onPress={handleOnClick}
            />
        </View>
    )
}