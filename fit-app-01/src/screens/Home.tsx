import { useState } from "react";

import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";

import { HomeHeader } from "@components/home/HomeHeader";
import { Group } from "@components/home/Group";
import { ExerciceCart } from "@components/ExerciseCart";
import { FlatList } from "react-native";


export function Home() {
    const [exercices, setExercices] = useState([
        "Squat",
        "Deadlift",
        "Pushup",
        "Barbell row"
    ])
    const [groups, setGroups] = useState(['Back', 'Legs', 'Arms', 'Biceps'])
    const [groupSelected, setGroupSelected] = useState('biceps')
    
    return (
        <VStack>
            <HomeHeader />

            <FlatList 
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Group name={item}
                        isActive={groupSelected === item}
                        onPress={() => setGroupSelected(item)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 32}}
                style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
            />
            
            <VStack px={"$8"} flex={1}>
                <HStack justifyContent="space-between" mb={"$5"} alignItems="center">
                    <Heading color="$trueGray200" fontSize={"$md"} fontFamily="$body">
                        Exercice
                    </Heading>

                    <Text color="$trueGray200" fontSize={"$sm"} fontFamily="$body">
                        {exercices.length}
                    </Text>
                </HStack>

                <FlatList 
                    data={exercices}
                    keyExtractor={(item) => item}   
                    renderItem={(() => <ExerciceCart />  )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 20}}
                />
            </VStack>
        </VStack>
    )
}