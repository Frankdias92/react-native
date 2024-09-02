import { Center, Heading, Image, ScrollView, Text, VStack } from "@gluestack-ui/themed";

import BackgraoundImg from '@assets/background.png'

import Logo from '@assets/logo.svg'

import { Input } from "@components/imput";
import { Button } from "@components/Button";

export function SignOut() {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} 
            showsVerticalScrollIndicator={false}
        >

            <VStack flex={1} bg="$trueGray700">
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

                        <Input placeholder="Name"/>
                        
                        <Input 
                            placeholder='E-mail' 
                            keyboardType="email-address" 
                            autoCapitalize="none"
                            />
                        <Input 
                            placeholder='Password'
                            secureTextEntry
                        />
                        <Button title="Create new account"/>
                    </Center>

                    <Center flex={1} justifyContent="flex-end" mb={"$10"}>
                        <Button title="Already have account?" variant="outline"/>
                    </Center>
                    
                </VStack>
            </VStack>

        </ScrollView>
    )
}