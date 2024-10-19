import { HomeHeader } from "@components/homeHeader";
import { Center, VStack } from "@gluestack-ui/themed";
import { Main } from "@components/main";

export function Home() {
    
    return (
        <VStack flex={1} bgColor="$secondary800">
            <HomeHeader />
            <Center flex={1} justifyContent="flex-start" px={"$8"}>
                <Main />
            </Center>
        </VStack>
    )
}