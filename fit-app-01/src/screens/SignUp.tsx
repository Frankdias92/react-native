import { Center, Heading, Image, ScrollView, Text, VStack } from "@gluestack-ui/themed";

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

export function SignUp() {

    const navigator = useNavigation()
    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        defaultValues: {
            // name: 'user',
            // email: 'user@email.com',
            // password: 'user123',
            // password_confirm: 'user123'
        }
    })

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
                            rules={{
                                required: 'Insert name',
                                pattern: {
                                    value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'name invalid'
                                  }
                            }}
                            render={({ field: {onChange, value} }) => (
                                <Input
                                    placeholder="Name"
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                        />
                        {errors.name?.message && (
                            <Text color="$white">{errors.name.message}</Text>
                        )}


                        <Controller 
                            control={control}
                            name="email"
                            rules={{
                                required: 'Insert email',
                                pattern: {
                                    value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'E-mail invalid'
                                  }
                            }}
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
                        {errors.email?.message && (
                            <Text color="$white">{errors.email.message}</Text>
                        )}

                        <Controller 
                            control={control}
                            name="password"
                            rules={{
                                required: 'Insert your password',
                                pattern: {
                                    value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'type of password is invalid'
                                  }
                            }}
                            render={({ field: {onChange, value} }) => (
                                <Input 
                                    placeholder='Password'
                                    secureTextEntry
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                        />
                        {errors.password?.message && (
                            <Text color="$white">{errors.password.message}</Text>
                        )}

                        <Controller 
                            control={control}
                            name="password_confirm"
                            rules={{
                                required: 'confirm you password',
                                pattern: {
                                    value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'type of password is invalid'
                                  }
                            }}
                            render={({ field: {onChange, value} }) => (
                                <Input 
                                   placeholder='Confirm Password'
                                   secureTextEntry
                                   onChangeText={onChange}
                                   value={value}
                                   onSubmitEditing={handleSubmit(handleSignUp)}
                                   returnKeyType="send"
                               />
                            )}
                        />
                        {errors.password_confirm?.message && (
                            <Text color="$white">{errors.password_confirm.message}</Text>
                        )}
                        
                        <Button 
                            title="Create new account"
                            onPress={handleSubmit(handleSignUp)}
                        />
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