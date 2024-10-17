import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  containter: {
    flex: 1,
    paddingTop: 62,
  },
  title: {
    color: colors.green['300'],
    fontSize: 22
  },
  header: {
    paddingHorizontal: 24,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 42,
  },
  logo: {
    height: 32,
    width: 38,
  },
  links: {
    borderTopWidth: 1,
    borderTopColor: colors.gray[600]
  },
  linksContent: {
    gap: 20,
    padding: 20,
    paddingBottom: 100
  },
  modal: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  modalContent: {
    backgroundColor: colors.gray[900],
    borderTopWidth: 1,
    borderTopColor: colors.gray[800],
    paddingBottom: 32,
    padding: 24
  },
  modalHeader: {
    width: '100%',
    flexDirection: "row",
    alignItems: 'center',
    marginBottom: 32
  },
  modalCategory: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: colors.gray[400]
  },
  modalLinkName: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.gray[600]
  },
  modalUrl: {
    fontSize: 14,
    color: colors.gray[400]
  },
  modalFooter: {
    flexDirection: 'row',
    marginTop: 32,
    width: '100%',
    justifyContent:'space-between',
    borderTopWidth: 1,
    borderTopColor: colors.gray[600],
    paddingVertical: 14
  }
})

export { style }