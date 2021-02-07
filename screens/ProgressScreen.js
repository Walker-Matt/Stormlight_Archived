/**
 * Progress screen
 * User input to establish their place in the books
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import {Picker} from '@react-native-picker/picker';

import GLOBAL from './../Global'

//The Way of Kings: 75 chapters
//Words of Radiance: 89 chapters
//Oathbringer: 122 chapters
//Rhythm of War: 117 chapters

export default function ProgressScreen({ navigation }) {
  const [bookValue, setBookValue] = React.useState('');
  const [partValue, setPartValue] = React.useState('');
  const [chapterValue, setChapterValue] = React.useState('');

  return (
    <View style={styles.column}>
      <Separator/>
      <View style={styles.row}>
        <Text style={styles.text}>
          Book:
        </Text>
      </View>
      <Separator/>
      <BookSelect
      bookValue={bookValue}
      setBookValue={setBookValue}/>
      <Separator/>
      <View style={styles.row}>
        <Text style={styles.text}>
          Part:
        </Text>
      </View>
      <Separator/>
      <PartSelect
      partValue={partValue}
      setPartValue={setPartValue}/>
      <Separator/>
      <View style={styles.row}>
        <Text style={styles.text}>
          Chapter:
        </Text>
      </View>
      <View style={styles.row}>
        <TextInput
        style={styles.input}
        onChangeText={text => setChapterValue(text)}
        value={chapterValue}
        keyboardType='number-pad'
        />
      </View>
      <Separator/>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.save}
          onPress={() =>
            trySetProgress(navigation, bookValue, partValue, chapterValue)}
        >
          <Text style={styles.saveText}> Save </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

function BookSelect(props) {
  return (
    <View style={styles.bookRow}>
      <Separator/>
      <TouchableOpacity
        style={(props.bookValue == 1) ?
          [styles.bookSelected] : [styles.book]}
        onPress={() => props.setBookValue(1)}>
        <Image
          style={styles.icon}
          source={require('./../assets/icons/The_Way_Of_Kings.jpg')}
        />
      </TouchableOpacity>
      <Separator/>
      <TouchableOpacity
        style={(props.bookValue == 2) ?
          [styles.bookSelected] : [styles.book]}
        onPress={() => props.setBookValue(2)}>
        <Image
          style={styles.icon}
          source={require('./../assets/icons/Words_Of_Radiance.jpg')}
        />
      </TouchableOpacity>
      <Separator/>
      <TouchableOpacity
        style={(props.bookValue == 3) ?
          [styles.bookSelected] : [styles.book]}
        onPress={() => props.setBookValue(3)}>
        <Image
          style={styles.icon}
          source={require('./../assets/icons/Oathbringer.jpg')}
        />
      </TouchableOpacity>
      <Separator/>
      <TouchableOpacity
        style={(props.bookValue == 4) ?
          [styles.bookSelected] : [styles.book]}
        onPress={() => props.setBookValue(4)}>
        <Image
          style={styles.icon}
          source={require('./../assets/icons/Rhythm_Of_War.jpg')}
        />
      </TouchableOpacity>
      <Separator/>
    </View>
  )
}

function PartSelect(props) {
  return (
    <View style={styles.row}>
      <Separator/>
      <TouchableOpacity
        style={(props.partValue == 1) ?
          [styles.partSelected] : [styles.part]}
        onPress={() => props.setPartValue(1)}>
        <Text style={styles.partText}> 1 </Text>
      </TouchableOpacity>
      <Separator/>
      <TouchableOpacity
        style={(props.partValue == 2) ?
          [styles.partSelected] : [styles.part]}
        onPress={() => props.setPartValue(2)}>
      <Text style={styles.partText}> 2 </Text>
      </TouchableOpacity>
      <Separator/>
      <TouchableOpacity
        style={(props.partValue == 3) ?
          [styles.partSelected] : [styles.part]}
        onPress={() => props.setPartValue(3)}>
        <Text style={styles.partText}> 3 </Text>
      </TouchableOpacity>
      <Separator/>
      <TouchableOpacity
        style={(props.partValue == 4) ?
          [styles.partSelected] : [styles.part]}
        onPress={() => props.setPartValue(4)}>
        <Text style={styles.partText}> 4 </Text>
      </TouchableOpacity>
      <Separator/>
      <TouchableOpacity
        style={(props.partValue == 5) ?
          [styles.partSelected] : [styles.part]}
        onPress={() => props.setPartValue(5)}>
        <Text style={styles.partText}> 5 </Text>
      </TouchableOpacity>
      <Separator/>
    </View>
  )
}

function trySetProgress(navigation, bookValue, partValue, chapterValue) {
  if(!bookValue || !partValue || !chapterValue) {
    alert("Please select the book, part, and chapter you have read to.")
  } else {
    GLOBAL.functions.SetProgress(
      bookValue + ',' +
      partValue + ',' +
      chapterValue);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home'}],
      })
  }
}

const Separator = () => (
  <View style={styles.separator} />
);

const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  row: {
    flex: 2,
    flexDirection: "row",
  },
  bookRow: {
    flex: 4,
    flexDirection: "row",
  },
  book: {
    height: 140,
    width: 95,
    borderWidth: 5,
    borderColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  bookSelected: {
    height: 140,
    width: 95,
    borderWidth: 5,
    borderColor: "red",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  icon: {
    height: 133,
    width: 88,
  },
  part: {
    flex: 3,
    borderWidth: 5,
    borderColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue"
  },
  partSelected: {
    flex: 3,
    borderWidth: 5,
    borderColor: "red",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue"
  },
  partText: {
    color: "black",
    fontSize: 50,
  },
  text: {
    flex: 1,
    color: "black",
    fontSize: 30,
    textAlign: "center"
  },
  save: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "green"
  },
  saveText: {
    color: "white",
    fontSize: 30,
    textAlign: "center"
  },
  input: {
    width: 100,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: "center",
    fontSize: 20
  },
  separator: {
    flex: 1
  },
});
