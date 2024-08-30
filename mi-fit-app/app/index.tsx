import { StatusBar, Text } from "react-native";
import Home from "./(home)/home";

export default function App() {
    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor={'#000'} translucent/>
            <Text>page app</Text>
            <Home />
        </>
    )
}