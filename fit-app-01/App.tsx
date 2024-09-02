import { StyleSheet, Text, View } from 'react-native';
import { 
    useFonts,
   Roboto_400Regular,
    Roboto_700Bold 
  } from '@expo-google-fonts/roboto';



export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})
  return (
    <View style={styles.container}>
      {fontsLoaded ? <Text style={styles.textTitle}>New app!</Text> : <View />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    fontFamily: 'Roboto_700Bold'
  }
});
