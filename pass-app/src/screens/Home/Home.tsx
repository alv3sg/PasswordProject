import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  styles from "./Styles";
import { Menu } from "../../components/Menu/Menu";


//funcao que ira retornar o componente
export default function Home() {
    return (
        <View style={styles.container}>
            <Menu />
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    )
}