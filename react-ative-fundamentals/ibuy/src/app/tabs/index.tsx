import { DrawerToggleButton } from '@react-navigation/drawer'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'
import { useAuth } from '@/hooks/useAuth'

export default function Index() {
  const { user }  = useAuth()
  console.log('user', user)
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <DrawerToggleButton  />
      </View>
        
        <TouchableOpacity style={styles.button} >
          <Text style={styles.title}>
            Tabs
          </Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    gap: 32,
    padding: 32
  },
  title: { fontSize: 16, fontWeight: 'bold', color: '#fff' },
  button: {
    backgroundColor: '#000',
    paddingHorizontal: 32,
    paddingVertical: 10
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end'
  }
})