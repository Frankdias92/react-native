import { Link } from 'expo-router'
import { router } from 'expo-router'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

export default function Index() {
  function signUp() {
    router.replace('/home/signUp')
  }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.navigate('/')}>
        <Text style={styles.title2}>
          Go to INDEX
        </Text>
      </TouchableOpacity>
      
        <TouchableOpacity style={styles.button} onPress={signUp}>
          <Text style={styles.title}>
            New Account
          </Text>
        </TouchableOpacity>

      <Link  /* asChild */
        href={{ 
          pathname: '/home/signUp',
          params: { name: 'Franklin'}
        }}
      >
        Send Params
      </Link>

      <Link  /* asChild */
        href='/product/7'>
        Send ID to Product
      </Link>


      <Link
        href={{ 
          pathname: '/redirect',
          params: { id: 12 }
        }}
      >
        Send Params to REDIRECT
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 16, fontWeight: 'bold', color: '#fff' },
  title2: { fontSize: 16, fontWeight: 'bold', color: '#000' },
  button: {
    backgroundColor: '#000',
    paddingHorizontal: 32,
    paddingVertical: 10
  }
})