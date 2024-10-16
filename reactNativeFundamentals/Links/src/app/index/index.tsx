import { Text, View } from 'react-native'
import { style } from './styles'


export default function Index() {
  return (
    <View style={style.containter}>
      <Text style={style.title}>Hello Native</Text>
    </View>
  )
}