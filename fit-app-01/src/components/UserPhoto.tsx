import { Image } from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof Image>

export function UserPhoto({...rest}: Props) {
    return <Image {...rest}
        rounded={"$full"}
        borderWidth={"$2"}
        borderColor="$trueGray400"
        backgroundColor="$trueGray500"
    />
}