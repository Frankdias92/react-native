import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HeaderHome } from "@/src/components/home/headerHome";

export function Home() {
    const navigation = useNavigation()

    return (
        <View className="flex flex-1 flex-col justify-start gap-4 p-4" style={{backgroundColor: '#262424'}}>
            <View className="flex">
                <HeaderHome />
            </View>
            <Button title="Navegar"
                onPress={() => navigation.navigate('homeMeal')}
            />
        </View>
    )
}