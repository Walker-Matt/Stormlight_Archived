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
import MapScreen from './screens/MapScreen'
import LocationsScreen from './screens/LocationsScreen'
import RacesScreen from './screens/RacesScreen'
import ReligionScreen from './screens/ReligionScreen'
import CreaturesScreen from './screens/CreaturesScreen'
import SprenScreen from './screens/SprenScreen'
import PlantsScreen from './screens/PlantsScreen'
import ItemsScreen from './screens/ItemsScreen'
import ShardsScreen from './screens/ShardsScreen'
import SoulcastingScreen from './screens/SoulcastingScreen'
import SurgebindingScreen from './screens/SurgebindingScreen'

const Stack = createStackNavigator();

//root function
//handles navigation between screens
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
        options={{
          title: ' Stormlight Archived',
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
        <Stack.Screen name="Map" component={MapScreen}/>
        <Stack.Screen name="Locations" component={LocationsScreen}/>
        <Stack.Screen name="Races" component={RacesScreen}/>
        <Stack.Screen name="Religion" component={ReligionScreen}/>
        <Stack.Screen name="Creatures" component={CreaturesScreen}/>
        <Stack.Screen name="Spren" component={SprenScreen}/>
        <Stack.Screen name="Plants" component={PlantsScreen}/>
        <Stack.Screen name="Items" component={ItemsScreen}/>
        <Stack.Screen name="Shards" component={ShardsScreen}/>
        <Stack.Screen name="Soulcasting" component={SoulcastingScreen}/>
        <Stack.Screen name="Surgebinding" component={SurgebindingScreen}/>
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
