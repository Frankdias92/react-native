import { Center, Heading, Image, ScrollView, Text, VStack } from "@gluestack-ui/themed";

import BackgraoundImg from '@assets/background.png'

import Logo from '@assets/logo.svg'

import { Input } from "@components/imput";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

export function SignUp() {

    const navigator = useNavigation()
    const { control } = useForm()
    

    function handleSignUp() {

    }

    
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} 
            showsVerticalScrollIndicator={false}
        >

            <VStack flex={1} >
                <Image 
                    source={BackgraoundImg}
                    defaultSource={BackgraoundImg}
                    alt="People workout"
                    w={'$full'}
                    h={624}
                    position="absolute"
                />

                <VStack flex={1} px={"$8"} >
                    <Center my={"$16"}>
                        <Logo />
                        <Text color="$trueGray100" fontSize={"$sm"}>
                            Train you mind and body.
                        </Text>
                    </Center>

                    <Center gap={"$4"} w={"$full"}>
                        <Heading color="$trueGray100">Create your account</Heading>

                        <Controller 
                            control={control}
                            name="name"
                            render={({ field: {onChange, value} }) => (
                                <Input
                                    placeholder="Name"
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                        />

                        <Controller 
                            control={control}
                            name="email"
                            render={({ field: {onChange, value} }) => (
                                <Input 
                                    placeholder='E-mail' 
                                    keyboardType="email-address" 
                                    autoCapitalize="none"
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                        />

                        <Controller 
                            control={control}
                            name="password"
                            render={({ field: {onChange, value} }) => (
                                <Input 
                                    placeholder='Password'
                                    secureTextEntry
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                        />

                        <Controller 
                            control={control}
                            name="confirmPasswordl"
                            render={({ field: {onChange, value} }) => (
                                <Input 
                                   placeholder='Confirm Password'
                                   secureTextEntry
                                   onChangeText={onChange}
                                   value={value}
                               />
                            )}
                        />
                        
                        <Button title="Create new account"/>
                    </Center>

                    <Center flex={1} justifyContent="flex-end" mb={"$10"}>
                        <Button 
                            title="Already have account?" 
                            variant="outline"
                            onPress={() => navigator.goBack()}
                        />
                    </Center>
                    
                </VStack>
            </VStack>

        </ScrollView>
    )
}