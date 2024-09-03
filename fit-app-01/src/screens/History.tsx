import { Heading, Text, VStack } from "@gluestack-ui/themed";

import { ScreenHeader } from "@components/history/ScreenHeader";
import { HistoryCart } from "@components/history/HistoryCart";
import { useState } from "react";
import { SectionList } from "react-native";

export function History() {
    const [exercices, setExercices] = useState([
        {
            title: '03.09.2024',
            data: ['Squat', 'Leg Press']
        },
        {
            title: '05.09.2024',
            data: ['DeadLift']
        }
    ])


    return (
        <VStack flex={1}>
            <ScreenHeader title="History" />

            <SectionList 
                sections={exercices}
                keyExtractor={item => item}
                renderItem={() => <HistoryCart /> }
                renderSectionHeader={({ section }) => (
                    <Heading 
                        color="$trueGray200"
                        fontSize={"$md"}
                        mt={"$10"}
                        mb={"$3"}
                        fontFamily="$heading"
                    >
                        {section.title}
                    </Heading>
                )}
                style={{ paddingHorizontal: 32 }}
                contentContainerStyle={
                    exercices.length === 0 && {flex: 1, justifyContent: 'center'}
                }
                ListEmptyComponent={() => (
                    <Text color="$trueGray100" textAlign="center">
                        There is no exercices yet! {'\n'}
                        Let's do some exercices?
                    </Text>
                )}
                showsVerticalScrollIndicator={false}
            />
        </VStack>
    )
}