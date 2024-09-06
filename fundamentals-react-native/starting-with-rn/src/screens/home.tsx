import { HomeHeader } from "@components/homeHeader";
import { Button, Center, HStack, Input, ScrollView, VStack } from "@gluestack-ui/themed";
import { Text } from "react-native";

export function Home() {
    return (
        <ScrollView 
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <VStack flex={1} bgColor="$trueGray700" pt={"$10"}>
                <HomeHeader />
            </VStack>
        </ScrollView>
    )
}