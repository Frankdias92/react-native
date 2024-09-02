import { Slot } from "expo-router";
import { ReactNode } from "react";
import { View } from "react-native";

type LayoutProps = {
    children: ReactNode
}

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode
  }>) {
    return (
        <View className="flex-1">
            <Slot />
            {children}
        </View>
    ) 
}