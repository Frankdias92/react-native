import { Center, Image, Text, VStack } from "@gluestack-ui/themed";

import BackgraoundImg from '@assets/background.png'

import Logo from '@assets/logo.svg'

export function SignIn() {
    return (
        <VStack flex={1} bg="$trueGray700">
            <Image 
                source={BackgraoundImg}
                defaultSource={BackgraoundImg}
                alt="People workout"
                w={'$full'}
                h={624}
                position="absolute"
            />

            <Center my={24}>
                <Logo />

                <Text>
                    Train you mind and body.
                </Text>
            </Center>
        </VStack>
    )
}