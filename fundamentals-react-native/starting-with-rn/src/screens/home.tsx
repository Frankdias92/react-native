import { HomeHeader } from "@components/homeHeader";
import { ButtonComponent } from "@components/buttonComponent";
import { Button, Center, HStack, Input, ScrollView, VStack } from "@gluestack-ui/themed";
import { Text } from "react-native";
import { Main } from "@components/main";

export function Home() {
    function handleClick () {
        console.log('click')
    }
    
    return (
        <ScrollView 
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <VStack flex={1} bgColor="$secondary800">
                <HomeHeader />
                <Center flex={1} justifyContent="flex-start" px={"$8"}>
                    <Main />
                </Center>
            </VStack>
        </ScrollView>
    )
}