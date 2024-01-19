import React from 'react';
import { Button, View, Text, Pressable} from 'react-native';

import { styles } from './BatButtomStyle';

export function BatButtom() {
  return (
    <View style={styles.container}>
        <Button 
        onPress={() => {console.log("Ola")}}
        title='Click aqui'
        accessibilityLabel='Gerar senha'
        />
        <Pressable onPress={() => {console.log("OFui pressionado")}}>
            
            <Text>
                ❤ copy
            </Text>
        </Pressable>

    </View>
  );
}