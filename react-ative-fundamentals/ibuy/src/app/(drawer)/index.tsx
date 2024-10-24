import { useAuth } from "@/hooks/useAuth";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function Ibuy() {
  const { logOut } = useAuth()

  async function deleteUser() {
    try {
      logOut()
    } catch (error) {
      throw error
    }
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <DrawerToggleButton />
      </View>

      <TouchableOpacity style={styles.button} onPress={deleteUser}>
        <Text>iBuy</Text>
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
    backgroundColor: '#888',
    paddingHorizontal: 32,
    paddingVertical: 10
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end'
  }
})