import { View, Text, StatusBar } from 'react-native'
import './global.css'

import { Routes } from '../routes'
import { ThemeProvider } from '@react-navigation/native'

export default function App() {
    
    return (
        <View >
            <StatusBar barStyle={'light-content'} 
                backgroundColor={'transparent'}
                translucent
            />
            {Routes ? <Routes /> : <Text>Loading...</Text>}
        </View>
    )
}