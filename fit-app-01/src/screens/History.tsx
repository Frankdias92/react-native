import { VStack } from "@gluestack-ui/themed";

import { ScreenHeader } from "@components/history/ScreenHeader";
import { HistoryCart } from "@components/history/HistoryCart";

export function History() {
    return (
        <VStack flex={1}>
            <ScreenHeader title="History" />
            <HistoryCart />
        </VStack>
    )
}