/**
 * Practice React App
 * https://github.com/Walker-Matt/React_Practice
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
} from 'react-native';

import background from './android/app/src/main/assets/Background.jpg'
const image = Image.resolveAssetSource(background).uri;

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={{uri: image}} style={styles.image}>
      <Text style={styles.text}>Stormlight Archived</Text>
    </ImageBackground>
  </View>
);

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
