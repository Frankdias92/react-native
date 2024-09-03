import { Heading, HStack, Icon, Image, Text, VStack } from "@gluestack-ui/themed";
import { ChevronRight } from "lucide-react-native";
import { TouchableOpacity, TouchableHighlightProps } from "react-native";


type Props = TouchableHighlightProps

export function ExerciceCart({...rest}: Props) {
    return (
        <TouchableOpacity {...rest}>
            <HStack bg="$trueGray500" alignItems="center" p={"$2"} pr={"$4"} rounded={"$md"} mb={"$3"}>
                <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-7MuJHexFIh9Pdfyyf7OqT7B8_iWTfx84UOMnvhmt5qQ_a6yVECn2oQGCXKlVlml7yo&usqp=CAU"}}
                    alt="Exercice img"
                    w={"$16"}
                    h={"$16"}
                    rounded={"$md"}
                    mr={"$4"}
                    resizeMode="cover"
                />

                <VStack flex={1}>
                    <Heading fontSize={"$lg"} color="$white" fontFamily="$heading">
                        Exemple of Exercice
                    </Heading>

                    <Text fontSize={"$sm"} color="$trueGray200" mt={"$1"} numberOfLines={2}>
                        series x
                    </Text>
                </VStack>

                <Icon as={ChevronRight} color="$trueGray300"/>
            </HStack>
        </TouchableOpacity>
    )
}