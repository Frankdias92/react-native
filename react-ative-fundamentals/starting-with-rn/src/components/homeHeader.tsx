import { Center, HStack, Icon, VStack } from "@gluestack-ui/themed";
import { HandMetal } from 'lucide-react-native'
import { Text } from "react-native";

export function HomeHeader() {

    return (
        <Center sx={{ justifyContent: "flex-start", backgroundColor: "$secondary950", height: 173 }}>
            <HStack sx={{ alignContent: "center", height: "auto", alignItems: "center", gap: 4, m: "auto" }}>
                <HandMetal className="text-gray-100" size={42} />
                {/* <Icon as={HandMetal} className="text-red-500" size="xl" color="$trueGray100"/> */}
                <Text className=" text-gray-100 text-4xl font-bold">
                    Dev<Text className="text-cyan-300">Journey</Text>
                </Text>
            </HStack>
        </Center>
    )
}