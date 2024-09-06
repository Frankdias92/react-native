import { Center, Icon } from "@gluestack-ui/themed";
import { HandMetal } from 'lucide-react-native'

export function HomeHeader() {

    return (
        <Center sx={{ justifyContent: "flex-start"}}>

            <Icon as={HandMetal} className="text-red-500" color="$white"/>
        </Center>
    )
}