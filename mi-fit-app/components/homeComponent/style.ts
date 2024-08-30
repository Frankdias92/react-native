import { StyleSheet } from "react-native";


export const styleHome = StyleSheet.create({
    header :{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        color: '#fff',
    },
    textTitle: {
        color: '#fff',
    },
    sectionIsInsideBox: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#991111',
        borderRadius: 8,
    },
    sectionIsInsideText: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold'
    },
    sectionIsInsideSubText: {
        fontSize: 16,
        color: '#eee'
    }
})