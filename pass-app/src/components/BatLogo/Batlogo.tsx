import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './BatlogoStyles';
// import {batLogo} from '../../../assets/bat-logo.png'

export function BatLogo() {
  return (
    <>
        <Text style={styles.title}>
            BatPass-Generation
        </Text>
        <Image source={require('../../../assets/bat-logo.png')} style={styles.imagem} />
    </>
  );
}