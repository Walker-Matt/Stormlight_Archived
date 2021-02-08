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
  KeyboardAvoidingView
} from 'react-native';

import {Picker} from '@react-native-picker/picker';

import GLOBAL from './../Global'

export default function ProgressScreen({ navigation }) {
  const [bookValue, setBookValue] = React.useState('');
  const [partValue, setPartValue] = React.useState('');
  const [chapterValue, setChapterValue] = React.useState('');

  return (
    <KeyboardAvoidingView
    style={styles.column}
    behavior="height">
      <Separator/>
      <View style={styles.textRow}>
        <Text style={styles.text}>
          Book:
        </Text>
      </View>
      <BookSelect
        bookValue={bookValue}
        setBookValue={setBookValue}/>
      <Separator/>
      <View style={styles.textRow}>
        <Text style={styles.text}>
          Part:
        </Text>
      </View>
      <Separator/>
      <PartSelect
        partValue={partValue}
        setPartValue={setPartValue}/>
      <Separator/>
      <View style={styles.textRow}>
        <Text style={styles.text}>
          Chapter:
        </Text>
      </View>
      <Separator/>
      <ChapterSelect
        chapterValue={chapterValue}
        setChapterValue={setChapterValue}/>
      <Separator/>
      <View style={styles.contentRow}>
        <TouchableOpacity
          style={styles.save}
          onPress={() =>
            trySetProgress(navigation, bookValue, partValue, chapterValue)}
        >
          <Text style={styles.saveText}> Save </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
    <View style={styles.contentRow}>
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

function ChapterSelect(props) {
  return (
    <View style={styles.contentRow}>
      <TextInput
      style={styles.input}
      onChangeText={text => props.setChapterValue(text)}
      value={props.chapterValue}
      keyboardType='number-pad'
      />
    </View>
  )
}

//The Way of Kings: 75 chapters
//Words of Radiance: 89 chapters
//Oathbringer: 122 chapters
//Rhythm of War: 117 chapters

function trySetProgress(navigation, bookValue, partValue, chapterValue) {
  if(!bookValue || !partValue || !chapterValue) {
    alert("Please select the book, part, and chapter you have read to.")
  } else {
    if(chapterValue % 1 != 0) {
      alert("Please enter a valid chapter number")
    } else {
      //Book 1
      if(bookValue == 1 && partValue == 1 &&
        (chapterValue < 1 || chapterValue > 11)) {
        alert("Please select a chapter from 1 to 11.")
      } else if(bookValue == 1 && partValue == 2 &&
        (chapterValue < 12 || chapterValue > 28)) {
        alert("Please select a chapter from 12 to 28.")
      } else if(bookValue == 1 && partValue == 3 &&
        (chapterValue < 29 || chapterValue > 51)) {
        alert("Please select a chapter from 29 to 51.")
      } else if(bookValue == 1 && partValue == 4 &&
        (chapterValue < 52 || chapterValue > 69)) {
        alert("Please select a chapter from 52 to 69.")
      } else if(bookValue == 1 && partValue == 5 &&
        (chapterValue < 70 || chapterValue > 75)) {
        alert("Please select a chapter from 70 to 75.")
      //Book 2
      } else if(bookValue == 2 && partValue == 1 &&
        (chapterValue < 1 || chapterValue > 12)) {
        alert("Please select a chapter from 1 to 12.")
      } else if(bookValue == 2 && partValue == 2 &&
        (chapterValue < 13 || chapterValue > 34)) {
        alert("Please select a chapter from 13 to 34.")
      } else if(bookValue == 2 && partValue == 3 &&
        (chapterValue < 35 || chapterValue > 58)) {
        alert("Please select a chapter from 35 to 58.")
      } else if(bookValue == 2 && partValue == 4 &&
        (chapterValue < 59 || chapterValue > 75)) {
        alert("Please select a chapter from 59 to 75.")
      } else if(bookValue == 2 && partValue == 5 &&
        (chapterValue < 76 || chapterValue > 89)) {
        alert("Please select a chapter from 76 to 89.")
      //Book 3
      } else if(bookValue == 3 && partValue == 1 &&
        (chapterValue < 1 || chapterValue > 32)) {
        alert("Please select a chapter from 1 to 32.")
      } else if(bookValue == 3 && partValue == 2 &&
        (chapterValue < 33 || chapterValue > 57)) {
        alert("Please select a chapter from 33 to 57.")
      } else if(bookValue == 3 && partValue == 3 &&
        (chapterValue < 58 || chapterValue > 87)) {
        alert("Please select a chapter from 58 to 87.")
      } else if(bookValue == 3 && partValue == 4 &&
        (chapterValue < 88 || chapterValue > 113)) {
        alert("Please select a chapter from 88 to 113.")
      } else if(bookValue == 3 && partValue == 5 &&
        (chapterValue < 114 || chapterValue > 122)) {
        alert("Please select a chapter from 114 to 122.")
      //Book 4
      } else if(bookValue == 4 && partValue == 1 &&
        (chapterValue < 1 || chapterValue > 19)) {
        alert("Please select a chapter from 1 to 19.")
      } else if(bookValue == 4 && partValue == 2 &&
        (chapterValue < 20 || chapterValue > 43)) {
        alert("Please select a chapter from 20 to 43.")
      } else if(bookValue == 4 && partValue == 3 &&
        (chapterValue < 44 || chapterValue > 72)) {
        alert("Please select a chapter from 44 to 72.")
      } else if(bookValue == 4 && partValue == 4 &&
        (chapterValue < 73 || chapterValue > 97)) {
        alert("Please select a chapter from 73 to 97.")
      } else if(bookValue == 4 && partValue == 5 &&
        (chapterValue < 98 || chapterValue > 117)) {
        alert("Please select a chapter from 98 to 117.")
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
  contentRow: {
    flex: 2,
    flexDirection: "row",
  },
  textRow: {
    flex: 2,
    flexDirection: "row",
    backgroundColor: "white"
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
    fontSize: 40,
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
