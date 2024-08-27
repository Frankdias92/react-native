
import { Roboto_400Regular, useFonts } from "@expo-google-fonts/roboto";
import { Text, VStack } from "@gluestack-ui/themed";

export default function App() {
  const [fontsloaded] = useFonts({ Roboto_400Regular })
  
  return (
      <VStack>
        <Text >test</Text>
      </VStack>
  );
}
