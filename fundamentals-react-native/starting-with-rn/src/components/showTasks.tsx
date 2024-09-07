import { Center, HStack, Icon, VStack, Text} from "@gluestack-ui/themed";
import { Check, Circle, CircleCheck, Trash2 } from "lucide-react-native";
import { useState } from "react";
import { TouchableOpacity, View,  } from "react-native";

interface ShowTasksProps {
    task: string
    onDelete?: () => void
}

export function ShowTasks({ task, onDelete, ...rest }: ShowTasksProps) {
    const [isChecket, setIsChecket] = useState(false)
    
    return (
        <HStack 
            w={"$full"}
            mt={"$5"}
            bg="$trueGray400" 
            p={"$5"} 
            rounded={"$md"}
            justifyContent="space-between"
            alignItems="center"
        >
                {isChecket 
                    ? <Icon as={Circle} color="$cyan400" size="lg" m={"$0.5"}/> 
                    : <Icon as={Check} color="$trueGray100" m={"$0.5"} margin={"$2"}  rounded={"$full"} bgColor="$cyan400"/>
                }

                <Text flex={1} numberOfLines={2}>
                    {task}
                </Text>
                <TouchableOpacity onPress={onDelete}>
                    <Icon as={Trash2} />                    
                </TouchableOpacity>
        </HStack>
    )
}