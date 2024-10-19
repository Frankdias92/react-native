import { router } from 'expo-router'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

export default function Index() {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.navigate('/home')}>
        <Text style={styles.title}>
          Go to Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.navigate('/tabs')}>
        <Text style={styles.title}>
          Go to Tabs
        </Text>
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 16, fontWeight: 'bold', color: '#000' },

})