import { router } from 'expo-router'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

export default function Index() {
  function product() {
    router.navigate('/(drawer)')
  }
  
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

      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => router.navigate('/signUp')}>
          <Text style={styles.ancount}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={product}>
          <Text style={styles.ancount}>
            Product List
          </Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1,
    alignItems: 'center', 
    paddingTop: 48
  },
  title: { fontSize: 16, fontWeight: 'bold', color: '#000' },
  ancount: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#fff',
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12
  }

})