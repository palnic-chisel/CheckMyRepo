import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {styles} from './Button.styles';

const Button = ({label, handler}) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={handler}>
        <View style={styles.button}>
          <Text style={styles.label}>{label}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default Button;
