/**
 * Characters screen
 * Lists individual characters
 */

import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

import GLOBAL from './../Global.js'

//Character data from local JSON files
import Kaladin from  './../assets/data/character/Kaladin'
import Shallan from  './../assets/data/character/Shallan'

export default function CharactersScreen({ navigation }) {
  return (
    <View>
      <Button
        title="Kaladin"
        onPress={() => {
          navigation.navigate('Character', {
            name: 'Kaladin',
            character: Kaladin
          })
        }}
      />
      <Button
        title="Shallan"
        onPress={() => {
          navigation.navigate('Character', {
            name: "Shallan",
            character: Shallan
          })
        }}
      />
    </View>
  )
}
