/**
 * Progress screen
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
} from 'react-native';

import {Picker} from '@react-native-picker/picker';

import GLOBAL from './../Global'

const Separator = () => (
  <View style={styles.separator} />
);

//The Way of Kings: 75 chapters
//Words of Radiance: 89 chapters
//Oathbringer: 122 chapters
//Rhythm of War: 117 chapters

export default function ProgressScreen({ navigation }) {
  const [bookValue, setBookValue] = React.useState("null");
  const [partValue, setPartValue] = React.useState("null");
  const [chapterValue, setChapterValue] = React.useState("null");
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
          selectedValue={bookValue}
          style={{height: 20, width: 200}}
          onValueChange={(itemValue, itemIndex) => {
            setBookValue(itemValue)
          }}>
          <Picker.Item label="The Way of Kings" value="1" />
          <Picker.Item label="Words of Radiance" value="2" />
          <Picker.Item label="Oathbringer" value="3" />
          <Picker.Item label="Rhythm of War" value="4" />
        </Picker>
      </View>
      <Separator />
      <View style={styles.row}>
        <Text>
          Part:
        </Text>
        <Picker
          style={styles.centeredView}
          selectedValue={partValue}
          style={{height: 20, width: 200}}
          onValueChange={(itemValue, itemIndex) => {
            setPartValue(itemValue)
          }}>
          <Picker.Item label="One" value="1" />
          <Picker.Item label="Two" value="2" />
          <Picker.Item label="Three" value="3" />
          <Picker.Item label="Four" value="4" />
          <Picker.Item label="Five" value="5" />
        </Picker>
      </View>
      <Separator />
      <View style={styles.row}>
        <Text>
          Chapter:
        </Text>
        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setChapterValue(text)}
        value={chapterValue}
        keyboardType='number-pad'
        />
      </View>
      <Separator />
      <Button
        title="Set"
        onPress={() => {
          GLOBAL.functions.SetProgress(
            bookValue + ',' +
            partValue + ',' +
            chapterValue);
        }}
      />
      <Text>
        {GLOBAL.functions.GetProgress()}
      </Text>
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
    fontSize: 35,
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
