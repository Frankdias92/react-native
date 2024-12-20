import { ButtonSpinner, Button as GluestackButton, Text } from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof GluestackButton> & {
    title: string
    variant?: 'solid' | 'outline'
    isLoading?: boolean
}

export function Button({ title, isLoading = false, variant = 'solid', ...rest }: ButtonProps) {
    return (
        <GluestackButton
            w={"$full"}
            h={"$14"}
            bg={variant === "outline" ? "transparent" : "$green700"}
            borderWidth={variant === "outline" ? "$1" : "$0" }
            borderColor="$green500"
            rounded={"$sm"}
            $active-bg={variant === "outline" ? "$trueGray500" : "$green500"}
            {...rest}
        >
            { isLoading ? <ButtonSpinner color={"$white"}/> :
                <Text 
                    color={"$secondary100"}
                    fontFamily="$heading"
                    fontSize={"$sm"}
                    disabled={isLoading}
                >
                    {title}
                </Text>
            }
        </GluestackButton>
    )
}