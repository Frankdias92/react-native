import { Center, HStack, Icon, Text, VStack} from "@gluestack-ui/themed";
import { Check, Circle, Trash2 } from "lucide-react-native";
import { useState } from "react";
import { TouchableOpacity, View,  } from "react-native";

interface ShowTasksProps {
    task: string
    onDelete?: () => void
    handleWithTask?: () => void
    isChecket?: boolean
}

export function ShowTasks({ task, onDelete, isChecket, handleWithTask, ...rest }: ShowTasksProps) {
    
    return (
        <HStack 
            w={"$full"}
            mt={"$2"}
            bg="$secondary700" 
            p={"$5"} 
            gap={"$2"}
            rounded={"$md"}
            justifyContent="space-between"
            alignItems="center"
        >
            <TouchableOpacity onPress={handleWithTask}>
                <VStack w={"$5"}>
                    {!isChecket 
                        ? <Icon as={Circle} color="$cyan400" size="lg"/> 
                        : <Icon as={Check} color="$cyan400" rounded={"$full"} bgColor="$cyan900"/>
                    }
                </VStack>
            </TouchableOpacity>

                <Text 
                    flex={1} 
                    numberOfLines={2} 
                    color={isChecket ? "$secondary400" : "$secondary300"}
                    textDecorationLine={isChecket ? "line-through" : 'none'}
                >
                    {task}
                </Text>
                <TouchableOpacity onPress={onDelete}>
                    <Icon as={Trash2} color="$secondary400"/>                    
                </TouchableOpacity>
        </HStack>
    )
}