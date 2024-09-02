import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

import { SignIn } from "@screens/SignIn";
import { SignOut } from "@screens/SignOut";

type AuthRoutes = {
    signIn: undefined
    signOut: undefined
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>()

export function AuthRoutes() {
    return (
        <Navigator initialRouteName="signIn">
            <Screen 
                name="signIn"
                component={SignIn}
            />
            <Screen 
                name="signOut"
                component={SignOut}
            />
        </Navigator>
    )
}