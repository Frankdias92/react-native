import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";


export function HistoryCart() {
    return (
        <HStack 
            w={"$full"} 
            px={"$5"} 
            py={"$4"} 
            mb={"$3"} 
            bg="$trueGray600" 
            rounded={"$md"}
            alignItems="center"
            justifyContent="space-between"
        >
            <VStack flex={1} mr={"$5"}>
                <Heading color="$white" fontSize={"$md"} textTransform="capitalize" fontFamily="$heading" numberOfLines={1}>
                    Deadlift
                </Heading>

                <Text color="$trueGray100" fontSize={"$lg"} numberOfLines={1}>
                    Push Up
                </Text>
            </VStack>

            <Text color="$trueGray300" fontSize={"$md"} >08:46</Text>
        </HStack>
    )
}