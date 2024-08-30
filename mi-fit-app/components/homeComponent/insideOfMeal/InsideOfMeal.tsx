import { Text, View } from "react-native";
import { styleHome } from "../style";


export function InsideOfMeal() {
    return (
        <View style={styleHome.sectionIsInsideBox}>
            <Text style={styleHome.sectionIsInsideText}>90,86%</Text>
            <Text style={styleHome.sectionIsInsideSubText}>das refeições dentro da dieta</Text>
        </View>
    )
}