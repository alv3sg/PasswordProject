import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './BatTextStyles';

export function BatTextInput() {
    return (

        <TextInput placeholder='pass' style={styles.inputer} />
    );
}