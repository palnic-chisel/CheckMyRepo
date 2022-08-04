import React, { useState } from 'react';
import { SafeAreaView, TextInput, View } from 'react-native';
import Button from '../../components/Button/Button';
import { SET_DATA_SCREEN, STACK_SCREEN } from '../../helper/constants';
import { styles } from './SetData.styles';

const SetData = ({ navigation, route }) => {
  const { name, placeholder } = route.params;
  const [text, setText] = useState('');
  const { DONE_BUTTON } = SET_DATA_SCREEN;
  const { HOME } = STACK_SCREEN;

  const backgroundStyle = {
    backgroundColor: 'white',
    height: '100%',
    paddingVertical: 10,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={text}
          onChangeText={(q) => {
            setText(q);
          }}
        />
      </View>
      <Button
        label={DONE_BUTTON}
        handler={() => navigation.navigate(HOME, {
          inputName: name,
          value: text,
        })
        }
      />
    </SafeAreaView>
  );
};

export default SetData;
