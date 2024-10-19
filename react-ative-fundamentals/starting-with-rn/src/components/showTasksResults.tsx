import { HStack } from "@gluestack-ui/themed";
import { Text } from "react-native";


interface ShowTasksResults {
    label: string
    value: number
}

export function ShowTasksResults({label, value}: ShowTasksResults) {
    return (
        <HStack gap={"$2"}>
            <Text className="font-bold text-cyan-400">
                {label} 
            </Text>

            <Text className=" rounded-full w-6 h-5 text-center bg-gray-500 text-white" >
                {value}
            </Text>
        </HStack>
    )
}