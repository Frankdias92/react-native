import { Group } from "@components/home/Group";
import { HomeHeader } from "@components/home/HomeHeader";
import { HStack, VStack } from "@gluestack-ui/themed";
import { useState } from "react";
import { FlatList } from "react-native";


export function Home() {
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
            
        </VStack>
    )
}