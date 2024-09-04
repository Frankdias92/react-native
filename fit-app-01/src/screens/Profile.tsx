import { ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";

import { VStack, Text, Center, Heading, useToast } from "@gluestack-ui/themed";
import * as ImagePicker from 'expo-image-picker'
import * as FileSyetem from 'expo-file-system'

import { ScreenHeader } from "@components/history/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Button } from "@components/Button";
import { Input } from "@components/imput";
import { ToastMessage } from "@components/ToastMessage";

export function Profile() {
    const [userPhoto, setUserPhoto] = useState("https://github.com/frankdias92.png")
    
    const toast = useToast()
    
    async function handleUserPhotoSelect() {
        try {
            const photoSelected = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
                aspect: [4, 4],
                allowsEditing: true,
            })
    
            if (photoSelected.canceled) {
                return
            }
    
            const photoURI = photoSelected.assets[0].uri
    
            if (photoURI) {
                const photoInfo = await FileSyetem.getInfoAsync(photoURI) as {
                    size: number
                }
    
                if (photoInfo.size &&  photoInfo.size / 1024 / 1024 > 3 ) {
                    return toast.show({
                        placement: 'top',
                        render: ({ id }) => (
                            <ToastMessage id={id} 
                                action="error" title="This image is too larger. chose another smaller than 5MB."
                                onClose={() => toast.close(id)}
                            />
                        )
                    })
                }
                photoInfo.size 
                setUserPhoto(photoURI)
            }
        } catch (error) {
            console.error("Something goes wrong", error)
        }
    }
    
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
                        source={{ uri: userPhoto}}
                        alt="Profile photo"
                        size="xl"
                    />

                    <TouchableOpacity onPress={handleUserPhotoSelect}>
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