import { Center, HStack, VStack } from "@gluestack-ui/themed";
import { ButtonComponent } from "./buttonComponent";
import { Text } from "react-native";
import { ShowTasksResults } from "./showTasksResults";


export function Main() {
    return (
        <Center>
            <ButtonComponent />

            <HStack w={"$full"}  justifyContent="space-between">
                <ShowTasksResults label="Created" value="0"/>
                <ShowTasksResults label="Finished" value="0"/>
            </HStack>

        </Center>
    )
}