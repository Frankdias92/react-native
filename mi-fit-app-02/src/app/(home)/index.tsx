import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HeaderHome } from "@/components/home/headerHome";
import { ButtonCreateNew } from "@/components/home/btnCreateNew";

export function Home() {
    const navigation = useNavigation()

    return (
        <View className="flex flex-1 flex-col justify-start gap-4 p-4" style={{backgroundColor: '#262424'}}>
            <View className="flex flex-row justify-between">
                <HeaderHome />
            </View>
            <ButtonCreateNew title="Nova refeição" page='details'/>
        </View>
    )
}