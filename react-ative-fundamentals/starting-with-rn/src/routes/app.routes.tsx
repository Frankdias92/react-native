import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Home } from '@screens/home'
import { House } from 'lucide-react-native'

type AppRoutes = {
    home: undefined
}
export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>()

export function AppRouter() {
    return (
        <Navigator initialRouteName='home' screenOptions={{ headerShown: false}} >
            <Screen name='home' component={Home}/>
        </Navigator>
    )
}