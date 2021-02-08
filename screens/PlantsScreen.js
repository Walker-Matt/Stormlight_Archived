/**
 * Map screen
 * Displays image of Roshar Map
 */

import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Text,
} from 'react-native';

import GLOBAL from './../Global.js'

export default function PlantsScreen({ navigation, route }) {
  return (
    <ImageBackground
      source={require('./../assets/images/construction.jpg')}
      style={styles.background}>
      <Text
      style={{
        color: "white",
        fontSize: 70,
        textAlign: "center",
        backgroundColor: "black"
      }}> Under Construction </Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
