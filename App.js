/**
 * Practice React App
 * https://github.com/Walker-Matt/React_Practice
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//importing each custom screen
import HomeScreen from './screens/HomeScreen'
import CharactersScreen from './screens/CharactersScreen'
import ProgressScreen from './screens/ProgressScreen'
import CharacterScreen from './screens/CharacterScreen'

const Stack = createStackNavigator();

//root function
//handles navigation between screens
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Characters" component={CharactersScreen}/>
        <Stack.Screen name="Progress" component={ProgressScreen}/>
        <Stack.Screen name="Character" component={CharacterScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
