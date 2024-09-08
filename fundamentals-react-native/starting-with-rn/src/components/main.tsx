import { Center, HStack, Icon, ScrollView, Text, VStack } from "@gluestack-ui/themed";
import { ButtonComponent } from "./buttonComponent";
import { ShowTasksResults } from "./showTasksResults";
import { ShowTasks } from "./showTasks";
import { useState } from "react";
import { ClipboardPenLine, View } from "lucide-react-native";
import { gluestackUIConfig } from "@gluestack-ui/config";
import { FlatList } from "react-native";

interface TasksProps {
    task: string
    isFinished: boolean
}

export function Main() {
    const [data, setData] = useState<TasksProps[]>([])
    const [newTask, setNewTask] = useState<string>('')
    const [totalTasksFineshed, setTotalTasksFineshed] = useState<number>(0)

    const { tokens } = gluestackUIConfig
    const iconSize = tokens.fontSizes["9xl"]

    const handleAddTask = () => {
        if (newTask.trim() === '') {
            return
        }
        setData((prevData) => [...prevData, { task: newTask, isFinished: !false }])
        setNewTask('')
    }

    const handleDeleteTask = (value: string) => {
        setData((prevData) => prevData.filter((item) => item.task !== value))
        const removeTask = data.find((item) => item.task === value)

        if (removeTask?.isFinished) {
            setTotalTasksFineshed((prev) => prev - 1)
        }
    }

    const handleTaskFinished = (task: string) => {
        setData((prevData) => prevData.map((item) => {
            if (item.task === task) {
                const updateTask = { ...item, isFinished: !item.isFinished }

                setTotalTasksFineshed((prev) => updateTask.isFinished ? prev - 1 : prev + 1)
                return updateTask
            }
            return item
        }) 

        )
    }
    
    return (
        <Center>
            <ButtonComponent 
                value={newTask}
                onChangeText={(e) => setNewTask(e)} 
                onClick={handleAddTask}
            />

            <HStack 
                w={"$full"}  
                justifyContent="space-between"  
                borderBottomWidth={1} pb={"$4"} 
                borderBottomColor="$trueGray500"
            >
                <ShowTasksResults label="Created" value={data.length}/>
                <ShowTasksResults label="Finished" value={totalTasksFineshed}/>
            </HStack>

            <VStack flex={1} w={"$full"} mx={"$8"}>
                <ScrollView 
                    contentContainerStyle={{ flexGrow: 1 }}
                    showsVerticalScrollIndicator={false}
                >
                    {data.length >= 1 
                        ? (
                                <FlatList 
                                    data={data}
                                    keyExtractor={(item) => item.task}
                                    renderItem={( {item} ) => (
                                        <ShowTasks 
                                            task={item.task} 
                                            onDelete={() => handleDeleteTask(item.task)}
                                            isChecket={item.isFinished}
                                            handleWithTask={() => handleTaskFinished(item.task)}
                                        />
                                    ) }
                                />
                            )
                        : (
                            <Center mt={"$10"}>
                                <ClipboardPenLine className="text-stone-600 mb-4"  size={56}/>
                                <Text fontWeight={"$bold"}>Você ainda não tem tarefas cadastradas</Text>
                                <Text>Crie tarefas e organize seus itens a fazer</Text>
                            </Center>
                        )
                    }
            </ScrollView>
            </VStack>

        </Center>
    )
}