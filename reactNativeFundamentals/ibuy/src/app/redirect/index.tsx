import { Link, Redirect, useLocalSearchParams } from 'expo-router'
import { router } from 'expo-router'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

export default function RedirectPage() {
  const { id } = useLocalSearchParams()

  if (!id) {
    return <Redirect href='/' />
  }
  
  
  return (
    <View style={styles.container}>
      <Text>
        Retrive params from main page: { id } 
      </Text>

        <TouchableOpacity style={styles.button} onPress={() => router.back()}>
          <Text style={styles.title}>
            Go Back
          </Text>
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