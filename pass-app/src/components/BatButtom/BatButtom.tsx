import React,{ useState } from 'react';
import { Button, View, Text, Pressable} from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { styles } from './BatButtomStyle';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';

export function BatButtom() {
  const [pass, setPass] = useState('')
  function handleGenerateButton() {
    let generateToken = generatePass();
    setPass(generateToken)
  }
  function handleCopyButton() {
    Clipboard.setStringAsync(pass);
    console.log(pass)
  }
  return (
    < > 
        <BatTextInput pass = {pass}/>
        <Pressable onPress={handleGenerateButton} style={styles.buttom}>            
            <Text style={styles.text}>
                GENERATE
            </Text>
        </Pressable>

        <Pressable onPress={handleCopyButton} style={styles.buttom}>
            
            <Text style={styles.text}>
                ❤ COPY
            </Text>
        </Pressable>

    </>
  );
}