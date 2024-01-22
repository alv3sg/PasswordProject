import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './BatTextStyles';
interface BatTextInput{
    pass: string;
}

export function BatTextInput(props: BatTextInput) {
    return (

        <TextInput placeholder='pass' style={styles.inputer} value={props.pass}/>
    );
}