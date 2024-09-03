import { ScreenHeader } from "@components/history/ScreenHeader";
import { Input } from "@components/imput";
import { UserPhoto } from "@components/UserPhoto";
import { VStack, Text, Center, Heading } from "@gluestack-ui/themed";
import { ScrollView, TouchableOpacity } from "react-native";
import {  } from "../../config/theme";
import { Button } from "@components/Button";


export function Profile() {
    return (
        <VStack flex={1}>
            <ScreenHeader title="Profile"/>

            <ScrollView 
                contentContainerStyle={{paddingBottom: 36}}
            >
                <Center 
                    mt={"$6"}
                    px={"$10"}
                >
                    <UserPhoto 
                        source={{ uri: "https://github.com/frankdias92.png"}}
                        alt="Profile photo"
                        size="xl"
                    />

                    <TouchableOpacity>
                        <Text 
                            color="$green500" 
                            fontFamily="$heading"
                            fontSize={"$md"}
                            mt={"$2"}
                            mb={"$8"}
                        >
                            Change profile photo
                        </Text>
                    </TouchableOpacity>

                    <Center w={"$full"} gap={"$4"}>
                        <Input 
                            placeholder="Name"
                            bg="$trueGray400"
                        />

                        <Input 
                            value="frank@email.com"
                            bg="$trueGray400"
                            isReadOnly
                        />
                    </Center>

                    <Heading 
                        alignSelf="flex-start"
                        fontFamily="$heading"
                        color="$trueGray200"
                        fontSize={"$md"}
                        mt={"$12"}
                        mb={"$2"}
                    >
                        Change password
                    </Heading>

                    <Center w={"$full"} gap={"$4"}>
                        <Input placeholder="Old password" bg="$trueGray600" secureTextEntry/>
                        <Input placeholder="New password" bg="$trueGray600" secureTextEntry/>
                        <Input placeholder="Confirm new password" bg="$trueGray600" secureTextEntry/>

                        <Button title="Update"/>
                    </Center>
                </Center>

            </ScrollView>
        </VStack>
    )
}