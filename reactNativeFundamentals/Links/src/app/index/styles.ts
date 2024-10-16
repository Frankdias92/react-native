import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  containter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.green['300'],
    fontSize: 22
  }
})

export { style }