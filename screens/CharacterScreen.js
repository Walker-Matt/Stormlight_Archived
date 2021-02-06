/**
 * Character screen
 * Displays info about a specific character
 */

import React from 'react';
import {
  Text,
} from 'react-native';

import GLOBAL from './../Global.js'

export default function CharacterScreen({ navigation, route }) {
  const { character } = route.params;
  return (
    <Text> {character.data.lastname.value} </Text>
  )
}
