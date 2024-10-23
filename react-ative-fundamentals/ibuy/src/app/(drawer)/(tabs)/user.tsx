

import { StyleSheet, Text, View } from 'react-native'

export default function User() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Page</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  logo: {
    height: 32,
    width: 38,
  },
})