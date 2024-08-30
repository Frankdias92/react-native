import React from "react"
import { Text, View } from "react-native"
import { styleHome } from "../style"

export function HeaderHome() {

    return (
        <View style={styleHome.header}>
            <Text style={styleHome.textTitle}>imagem</Text>
            <Text style={styleHome.textTitle}>profile</Text>
        </View>
    )
}