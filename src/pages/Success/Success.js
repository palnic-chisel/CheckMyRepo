import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Button from '../../components/Button/Button';
import { styles } from './Success.styles';
import { SUCCESS_SCREEN, STACK_SCREEN, PALETTE } from '../../helper/constants';

export default function Success({ navigation }) {
  const { COOL_BUTTON, ALL_DONE, REPOSITORY_SENT } = SUCCESS_SCREEN;
  const { HOME } = STACK_SCREEN;
  const { basicBg } = PALETTE;

  const backgroundStyle = {
    backgroundColor: basicBg,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.container}>
        <Text style={styles.text}>
          {ALL_DONE}
          {'\n'}
          {REPOSITORY_SENT}
        </Text>
      </View>
      <Button label={COOL_BUTTON} handler={() => navigation.navigate(HOME, { success: true })} />
    </SafeAreaView>
  );
}
