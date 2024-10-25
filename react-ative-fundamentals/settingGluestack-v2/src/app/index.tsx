// import { StatusBar } from 'expo-status-bar';

import { VStack } from "@/components/ui/vstack";
import { Text, View } from "react-native";

export default function App() {
  return (
    <VStack  className="w-full max-w-[300px] rounded-md border bg-black border-background-200 p-4"
      space="2xl" 
      style={{
        flex: 1, justifyContent: 'center', alignItems: 'center',
      }} 
    >
    <View className="flex-1 justify-center items-center bg-background-500">
      <Text className="text-primary-500 text-2xl font-bold"
        style={{fontWeight: "700"}}>Olá, NativeWind!</Text>
    </View> 
    </VStack>
  );
}
{/* cant use style with nativeWind.. */}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });
