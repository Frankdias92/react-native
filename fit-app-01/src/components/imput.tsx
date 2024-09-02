import { Input as GluestackInput, InputField } from "@gluestack-ui/themed"
import { ComponentProps } from "react"

type InputProps = ComponentProps<typeof InputField>

export function Input({...rest}: InputProps) {
    return (
        <GluestackInput bg="$trueGray700" h={"$14"} borderWidth={"$0"} borderRadius={"$md"}>
            <InputField 
                color="$white"
                fontFamily="$body" 
                borderRadius={"$md"}
                placeholderTextColor={"$trueGray300"}
                {...rest}
                $focus={{
                    borderWidth: 1,
                    borderColor: "$green500",
                }}
            />
        </GluestackInput>
    )
}