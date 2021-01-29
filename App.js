/**
 * Practice React App
 * https://github.com/Walker-Matt/React_Practice
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  Button,
} from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Characters" component={CharacterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/images/background.jpg')}
        style={styles.image}>
        <Text style={styles.text}>Stormlight Archived</Text>
        <Button
          title="Characters"
          onPress={() =>
            navigation.navigate('Characters', { testword: 'Test' })
          }
        />
      </ImageBackground>
    </View>
  );
};

const CharacterScreen = ({ navigation, route }) => {
  return <Text> {route.params.testword} </Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});

export default App;
