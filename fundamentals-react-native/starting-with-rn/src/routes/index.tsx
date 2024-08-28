import { NavigationContainer } from '@react-navigation/native' 

import { AppRouter } from './app.routes'
import { Text } from 'react-native'

export function Routes() {
    return (
        <NavigationContainer>
            <AppRouter />
        </NavigationContainer>
    )
}