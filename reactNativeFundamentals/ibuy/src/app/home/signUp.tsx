import { Link, router, useLocalSearchParams } from 'expo-router'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function SingUp() {
  const { name } = useLocalSearchParams()

  function goBack() {
    if (!router.canGoBack()) {
      return Alert.alert('This is not possible!')
    }
    router.back()
  }
  
  return (
    <View style={styles.container}>
      <Text>My Params: { name } </Text>

      <Link href={'/home'} style={styles.back}>Go Back</Link>

      <TouchableOpacity onPress={goBack}>
        <Text>Go Back Router</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  back: { fontSize: 16, fontWeight: 'bold' },
})