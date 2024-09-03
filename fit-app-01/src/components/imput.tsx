import { Input as GluestackInput, InputField } from "@gluestack-ui/themed"
import { ComponentProps } from "react"

type InputProps = ComponentProps<typeof InputField> & {
    isReadOnly?: boolean
}

export function Input({isReadOnly = false, ...rest}: InputProps) {
    return (
        <GluestackInput 
            w={"$full"} 
            h={"$14"} 
            borderWidth={"$0"} 
            borderRadius={"$md"}
            $focus={{
                borderWidth: 1,
                borderColor: "$green500",
            }}
            isReadOnly={isReadOnly}
        >
            <InputField 
                bg="$trueGray700" 
                px={"$4"}
                color="$white"
                fontFamily="$body" 
                // borderRadius={"$md"}
                placeholderTextColor={"$trueGray300"}
                {...rest}
            />
        </GluestackInput>
    )
}