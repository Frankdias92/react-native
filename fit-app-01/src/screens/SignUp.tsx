import { Center, Heading, Image, ScrollView, Text, VStack } from "@gluestack-ui/themed";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
 
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

import { Input } from "@components/imput";
import { Button } from "@components/Button";

import Logo from '@assets/logo.svg'
import BackgraoundImg from '@assets/background.png'

type FormDataProps = {
    name: string
    email: string
    password: string
    password_confirm: string
}

const signUpSchema = yup.object({
    name: yup.string().required('Enter with your name'),
    email: yup.string().required('Enter with your e-mail').email('E-mail invalid'),
    password: yup.string().required('Enter with your password')
        .min(6, 'Your password must have at last 6 digits'),
    password_confirm: yup.string().required('Enter with your password')
        .oneOf([yup.ref('password'), ""], 'Your password must be iguals, please confirm they are the same.')
})

export function SignUp() {
    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        resolver: yupResolver(signUpSchema)
    })
    
    const navigator = useNavigation()

    function handleSignUp({name, email, password, password_confirm}: FormDataProps) {
        console.log(name)
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

                <VStack flex={1} px={"$8"} pb={"$10"}>
                    <Center my={"$16"}>
                        <Logo />
                        <Text color="$trueGray100" fontSize={"$sm"}>
                            Train you mind and body.
                        </Text>
                    </Center>

                    <Center gap={"$3"} w={"$full"}>
                        <Heading color="$trueGray100" mb={"$2"}>Create your account</Heading>

                        <Controller 
                            control={control}
                            name="name"
                            render={({ field: {onChange, value} }) => (
                                <Input
                                    placeholder="Name"
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.name?.message}
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
                                    errorMessage={errors.email?.message}
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
                                    errorMessage={errors.password?.message}
                                />
                            )}
                        />

                        <Controller 
                            control={control}
                            name="password_confirm"
                            render={({ field: {onChange, value} }) => (
                                <Input 
                                   placeholder='Confirm Password'
                                   secureTextEntry
                                   onChangeText={onChange}
                                   value={value}
                                   onSubmitEditing={handleSubmit(handleSignUp)}
                                   returnKeyType="send"
                                   errorMessage={errors.password_confirm?.message}
                               />
                            )}
                        />
                        
                        <Button 
                            title="Create new account"
                            onPress={handleSubmit(handleSignUp)}
                        />
                    </Center>

                    <Center flex={1} justifyContent="flex-end" >
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