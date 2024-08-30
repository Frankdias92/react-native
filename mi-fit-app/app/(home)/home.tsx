import { Text, View } from "react-native";
import { styles } from "./style";
import { HeaderHome } from "@/components/homeComponent/header/HeaderHome";
import { InsideOfMeal } from "@/components/homeComponent/insideOfMeal/InsideOfMeal";
import { BtnNewMeal } from "@/components/btnNewMeal";

export default function Home() {
    return (
        <>
            <View style={styles.container}>
                <HeaderHome />
                <InsideOfMeal />
                <BtnNewMeal />
                <Text style={styles.textTitle}>test</Text>
            </View>

            <View>
                <Text>anoter section</Text>
            </View>
        </>
    )
}


