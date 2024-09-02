import { View, Text, StatusBar } from 'react-native'
import './global.css'

import { Routes } from '../routes'

export default function App() {
    
    return (
        <View className='flex flex-1' style={{backgroundColor: '#262424'}}>
            <StatusBar barStyle={'light-content'} 
                backgroundColor={'transparent'}
                translucent
                />
            {Routes ? <Routes /> : <Text>Loading...</Text>}
        </View>
    )
}