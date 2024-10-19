import { router } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Products() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product List</Text>

      <TouchableOpacity onPress={() => router.navigate('/product/12')}>
        <Text>Product id 12</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
})