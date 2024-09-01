import { Image, View } from 'react-native'


export function HeaderHome() {
    const logo = require('../../assets/images/my-fit-logo.png')
    const profile = require('../../assets/images/profile.png')

    return (
            <View className='flex-1 flex-row justify-between'>
                    <Image source={logo} className='w-20 h-9'/>

                <View className='flex' style={{backgroundColor: 'green', borderRadius: 50}}>
                    <Image  source={profile} className='size-9' style={{margin: 4}}/>
                </View>
            </View>
    )
}