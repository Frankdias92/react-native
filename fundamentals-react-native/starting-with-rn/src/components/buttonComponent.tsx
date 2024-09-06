import { Button, HStack, Input as GluestackInput, VStack, InputField, Icon } from "@gluestack-ui/themed";
import { PlusCircle } from "lucide-react-native";
import { ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof InputField> & {
    isInvalid?: boolean
}

export function ButtonComponent({ isInvalid, ...rest }: ButtonProps) {
    return (
        <VStack translateY={-35} >
            <HStack w={"$full"} px={"$8"} gap={"$1"} h={"$12"}>
                <GluestackInput
                    w={"$full"} 
                    h={"$12"} 
                    borderWidth={"$0"} 
                    borderRadius={"$md"}
                    $focus={{
                        borderWidth: 1,
                        borderColor: "$cyan400"
                    }}
                >
                    <InputField 
                        px={"$4"}
                        color="$trueGray100"
                        backgroundColor="$trueGray600"
                        fontFamily="$body" 
                        // borderRadius={"$md"}
                        placeholderTextColor={"$trueGray400"}
                        {...rest}
                    />
                </GluestackInput>
                
                <Button  height={"$12"}>
                    <Icon as={PlusCircle} color="$trueGray100" />
                </Button>
            </HStack>
        </VStack>
    )
}