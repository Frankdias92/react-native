import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222222',
    gap: 8
  },
  input : {
    width: '80%',
    backgroundColor: '#444444',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 8,
    color: '#fff',
    borderWidth: 2,
    borderColor: '#999999'
  },
  button: {
    backgroundColor: '#6B38FB',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
    color: '#fff',
  },
  text: {
    color: '#fff'
  },
  textAlert: {
    color: '#E30425',
    fontStyle: "italic",
    fontSize: 12
  }
})