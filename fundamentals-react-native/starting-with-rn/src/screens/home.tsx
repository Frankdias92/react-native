import { Center, VStack } from "@gluestack-ui/themed";
import { Text } from "react-native";

export function Home() {
    return (
        <Center className="flex flex-1 bg-black">
        {/* <VStack  className="flex bg-black text-white"> */}
            <Text className="text-red-500">Page Home</Text>
        {/* </VStack> */}
        </Center>
    )
}