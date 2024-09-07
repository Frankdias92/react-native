import { Center, HStack, Icon, Text, VStack } from "@gluestack-ui/themed";
import { ButtonComponent } from "./buttonComponent";
import { ShowTasksResults } from "./showTasksResults";
import { ShowTasks } from "./showTasks";
import { useState } from "react";
import { ClipboardPenLine, View } from "lucide-react-native";
import { gluestackUIConfig } from "@gluestack-ui/config";
import { FlatList } from "react-native";


export function Main() {
    const [tasks, setTask] = useState<string[]>([])

    const { tokens } = gluestackUIConfig
    const iconSize = tokens.fontSizes["9xl"]
    
    return (
        <Center>
            <ButtonComponent />

            <HStack 
                w={"$full"}  
                justifyContent="space-between"  
                borderBottomWidth={1} pb={"$4"} 
                borderBottomColor="$trueGray500"
            >
                <ShowTasksResults label="Created" value="0"/>
                <ShowTasksResults label="Finished" value="0"/>
            </HStack>

            <VStack flex={1} w={"$full"} mx={"$8"}>
                {tasks 
                    ? (
                            <FlatList 
                                data={tasks}
                                keyExtractor={(item) => item}
                                renderItem={() => <ShowTasks task={tasks}/> }
                            />
                            // 
                        )
                    : (
                        <Center mt={"$10"}>
                            <ClipboardPenLine className="text-stone-600 mb-4"  size={56}/>
                            <Text fontWeight={"$bold"}>Você ainda não tem tarefas cadastradas</Text>
                            <Text>Crie tarefas e organize seus itens a fazer</Text>
                        </Center>
                    )
                }
            </VStack>

        </Center>
    )
}