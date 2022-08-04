/* eslint-disable global-require */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, TouchableOpacity } from 'react-native';
import Success from './src/pages/Success/Success';
import SetData from './src/pages/SetData/SetData';
import HomeScreen from './src/pages/HomeScreen/HomeScreen';
import { STACK_SCREEN } from './src/helper/constants';

const Stack = createNativeStackNavigator();

const { HOME, SET_DATA, SUCCESS } = STACK_SCREEN;

// const MyCustomHeaderBackImage = (navigation) => (
//   <View onPress={() => navigation.goBack()}>
//     <Image
//     source={require('./src/asset/icons/back-icon/back@2x.android.png')}
//     style={{
//       width: 20, height: 15,
//     }}
//   />
//   </View>
// );

const App = () => (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={HOME}
        screenOptions = {({ navigation }) => ({
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            elevation: 0,
            shadowColor: 'transparent',
          },
          headerLeft: () => (
            <TouchableOpacity style={{ width: 50 }} onPress={() => navigation.navigate(HOME)}>
              <Image
                source={require('./src/asset/icons/back-icon/back@3x.android.png')}
                style={{
                  width: 20, height: 15,
                }}
              />
            </TouchableOpacity>
          ),
          headerBackTitleVisible: false,
        })}
      >
        <Stack.Screen
          name={HOME}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SET_DATA}
          component={SetData}
          options={({ route }) => ({
            title: route?.params?.name || SET_DATA,
          })}
        />
        <Stack.Screen
          name={SUCCESS}
          component={Success}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
);

export default App;
