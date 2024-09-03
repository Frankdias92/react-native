import { HStack, Text, Heading, VStack, Icon } from "@gluestack-ui/themed";
import { UserPhoto } from "@components/UserPhoto";
import { LogOut } from "lucide-react-native";


export function HomeHeader() {
    return (
        <HStack bg="$trueGray600" pt={"$16"} pb={"$5"} px={"$8"} alignItems="center" gap={"$4"}>
            <UserPhoto 
                source={{ uri: "https://github.com/Frankdias92.png" }}
                size="md"
                alt="Image profile"
                />

            <VStack flex={1}>
                <Text color="$trueGray100" fontSize={"$sm"}>
                    Olá,
                </Text>
                <Heading color="$trueGray100" fontSize={"$md"}>
                    Franklin
                </Heading>
            </VStack>

            <Icon as={LogOut} color="$trueGray200" size="xl"/>
        </HStack>
    )
}