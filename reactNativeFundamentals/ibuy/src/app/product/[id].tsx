import { Link, useLocalSearchParams } from 'expo-router'
import { router } from 'expo-router'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

export default function Product() {
  const { id } = useLocalSearchParams()
  
  return (
    <View style={styles.container}>
      <Text>
        ID product: { id }
      </Text>

      <TouchableOpacity onPress={() => router.back()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 16, fontWeight: 'bold', color: '#fff' },
  button: {
    backgroundColor: '#000',
    paddingHorizontal: 32,
    paddingVertical: 10
  }
})