import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  styles from "./Styles";
import { BatLogo } from "../../components/BatLogo/Batlogo";
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";
import { BatButtom } from "../../components/BatButtom/BatButtom";



//funcao que ira retornar o componente
export default function Home() {
    return (
        <View style={styles.appContainer}>
            <View  style={styles.logoContainer}>
                <BatLogo />
            </View>

            <View style={styles.inputContainer}> 
            <BatTextInput />
            <BatButtom />
            </View>

            <StatusBar style="light" />
        </View>
    )
}