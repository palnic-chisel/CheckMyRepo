import React from 'react';
import {
  Text, View, SafeAreaView, TouchableHighlight,
} from 'react-native';
import Button from '../../components/Button/Button';
import { styles } from './HomeScreen.styles';
import { HOME_SCREEN } from '../../helper/constants';
import HomeScreenController from './HomeScreen.controller';

export default function HomeScreen({ navigation, route }) {
  const {
    GITHUB, CHECK_BUTTON, SEND_BUTTON, TITLE,
  } = HOME_SCREEN;

  const {
    inputField,
    sendDataToApi,
    checkInput,
    backgroundStyle,
    errorLabel,
    errors,
  } = HomeScreenController(navigation, route);

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.container}>
        <Text style={styles.title}>{TITLE}</Text>

        <View style={styles.body}>
          <Text style={styles.url}>{GITHUB}</Text>
          {inputField.map(({ name, onPress }) => (
              <View key={name} style={styles.click}>
                <Text style={styles.url}>/</Text>
                <TouchableHighlight onPress={onPress}>
                  <View>
                    <Text style={styles.urlPlaceholder}>{name}</Text>
                  </View>
                </TouchableHighlight>
              </View>
          ))}
          <View style={styles.errorLabelContainer}>
            {errorLabel && <Text>{errorLabel.map((label) => (
              <Text key={label.label} style={[styles.errorLabel, { fontWeight: label.weight }]}>{label.label}</Text>
            ))}</Text>}
          </View>
        </View>
        {(errors === true || errors === null) && (
          <Button label={CHECK_BUTTON} handler={() => checkInput()} />
        )}
        {errors === false && errors !== null && (
          <Button label={SEND_BUTTON} handler={() => sendDataToApi()} />
        )}
      </View>
    </SafeAreaView>
  );
}
