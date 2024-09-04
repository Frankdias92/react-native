import { ComponentProps } from "react"
import { Input as GluestackInput, 
    InputField,
     FormControl,
     FormControlError,
    FormControlErrorText 
} from "@gluestack-ui/themed"

type InputProps = ComponentProps<typeof InputField> & {
    isInvalid?: boolean
    isReadOnly?: boolean
    errorMessage?: string | null
}

export function Input({isInvalid = false, errorMessage = null, isReadOnly = false, ...rest}: InputProps) {
    const invalid = !!errorMessage || isInvalid
    
    return (
        <FormControl isInvalid={invalid} w={"$full"} >
            <GluestackInput 
                w={"$full"} 
                h={"$14"} 
                borderWidth={"$0"} 
                borderRadius={"$md"}
                $focus={{
                    borderWidth: 1,
                    borderColor: invalid ? '$red500' : "$green500",
                }}
                $invalid={{
                    borderWidth: 1,
                    borderColor: '$red500'
                }}
                isReadOnly={isReadOnly}
                isInvalid={isInvalid}
                opacity={ isReadOnly ? 0.5 : 1 }
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

            <FormControlError>
                <FormControlErrorText color="$red500">
                    {errorMessage}
                </FormControlErrorText>
            </FormControlError>
        </FormControl>
    )
}