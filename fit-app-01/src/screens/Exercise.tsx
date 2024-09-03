import { VStack, Text, Icon, HStack, Heading, Image, Box, ScrollView } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { ArrowLeft } from "lucide-react-native";
import { TouchableOpacity } from "react-native";

import BodySvg from '@assets/body.svg'
import SeriesSvg from '@assets/series.svg'
import RepetitionsSvg from '@assets/repetitions.svg'
import { Button } from "@components/Button";


export function Exercise() {
    const navigation = useNavigation<AppNavigatorRoutesProps>()
    
    return (
        <VStack flex={1}>
            <VStack
                px={"$8"}
                bg="$trueGray600"
                pt={"$12"}
            >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon as={ArrowLeft} color="$green500" size="xl"/>
                </TouchableOpacity>

                <HStack
                    justifyContent="space-between"
                    alignItems="center"
                    mt={"$4"}
                    mb={"$8"}
                >
                    <Heading 
                        color="$trueGray100"
                        fontFamily="$heading"
                        fontSize={"$lg"}
                        flexShrink={1}
                    >
                        DeadLift
                    </Heading>

                    <HStack
                        alignItems="center"
                    >
                        <BodySvg />
                        <Text 
                            color="$trueGray300"
                            ml={"$1"}
                            textTransform="capitalize"
                        >
                            Back
                        </Text>
                    </HStack>
                </HStack>
                
            </VStack>

            <ScrollView 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 32}}
            >
                <VStack p={"$8"}>
                    <Image 
                        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-7MuJHexFIh9Pdfyyf7OqT7B8_iWTfx84UOMnvhmt5qQ_a6yVECn2oQGCXKlVlml7yo&usqp=CAU"}}
                        resizeMode="cover"
                        alt="Exercice img"
                        w={"$full"}
                        h={"$80"}
                        rounded={"$lg"}
                        mb={"$3"}
                    />

                    <Box 
                        bg="$trueGray600"
                        rounded={"$md"}
                        pb={"$4"}
                        px={"$4"}
                    >
                        <HStack alignContent="center" justifyContent="space-around" mb={"$6"} mt={"$5"}>
                            <HStack >
                                <SeriesSvg />
                                <Text color="$trueGray200" ml={"$2"} >3 Series</Text>
                            </HStack>

                            <HStack>
                                <RepetitionsSvg />
                                <Text color="$trueGray200" ml={"$2"} >12 repetitions</Text>
                            </HStack>
                        </HStack>

                        <Button title="Marked with done"/>
                    </Box>


                </VStack>
            </ScrollView>
        </VStack>
    )
}