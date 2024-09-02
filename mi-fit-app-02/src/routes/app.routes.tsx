import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../app/(home)/index'
import { HomeMeal } from '../app/(home)/homeMeal'

const { Navigator, Screen } = createNativeStackNavigator()


export function AppRoutes() {
    return (
        <Navigator initialRouteName='home'>
            <Screen
                name='home'
                component={Home}
            />

            <Screen
                name='details'
                component={HomeMeal}
            />
        </Navigator>
    )
}