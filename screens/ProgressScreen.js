/**
 * Progress screen
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

import {Picker} from '@react-native-picker/picker';

import GLOBAL from './../Global'

const Separator = () => (
  <View style={styles.separator} />
);

function PopulatePicker(amount) {
}

export default function ProgressScreen({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("1");
  return (
    <View style={styles.column}>
      <Text style={styles.text}>
        Where are you in 'The Stormlight Archives'?
      </Text>
      <Separator />
      <View style={styles.row}>
        <Text>
          Book:
        </Text>
        <Picker
          style={styles.centeredView}
          selectedValue={selectedValue}
          style={{height: 20, width: 200}}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedValue(itemValue)
          }}>
          <Picker.Item label="The Way of Kings" value="1" />
          <Picker.Item label="Words of Radiance" value="2" />
          <Picker.Item label="Oathbringer" value="3" />
          <Picker.Item label="Rhythm of War" value="4" />
        </Picker>
      </View>
      <Text>
        Test
      </Text>
      <Separator />
      <Button
        title="Test"
        onPress={() => {
          alert(selectedValue)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  picker: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
