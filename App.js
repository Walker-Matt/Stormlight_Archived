/**
 * Practice React App
 * https://github.com/Walker-Matt/React_Practice
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import React from 'react';
import {
  StyleSheet,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//importing each custom screen
import HomeScreen from './screens/HomeScreen'
import ProgressScreen from './screens/ProgressScreen'
import CharactersScreen from './screens/CharactersScreen'
import CharacterScreen from './screens/CharacterScreen'

const Stack = createStackNavigator();

//root function
//handles navigation between screens
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
        options={{
          title: 'Stormlight Archived',
          headerStyle: {
            backgroundColor: '#BD3705',
          },
          headerTitleStyle: styles.homeTitle,
          }}/>
        <Stack.Screen name="Progress" component={ProgressScreen}
        options={{
          title: 'Where have you read to?',
        }}/>
        <Stack.Screen name="Characters" component={CharactersScreen}/>
        <Stack.Screen name="Character" component={CharacterScreen}
        options={({ route }) => ({ title: route.params.name })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  homeTitle: {
    color: "white",
    fontSize: 40,
  }
});

export default App;
