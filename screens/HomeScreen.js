/**
 * Home screen
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  Button,
  Modal,
} from 'react-native';

import GLOBAL from './../Global'

const Separator = () => (
  <View style={styles.separator} />
);

export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Wait! To avoid any spoilers to
            the book series, please enter your reading progress.</Text>
            <Button
              title="Set Reading Progress"
              onPress={() => {
                navigation.navigate('Progress')
                setModalVisible(!modalVisible);
              }}
            />
            <Separator />
            <Button
              title="I've read nothing"
              onPress={() => {
                GLOBAL.functions.SetProgress('0,0,0')
                setModalVisible(!modalVisible);
              }}
            />
            <Separator />
            <Button
              title="I've read it all"
              onPress={() => {
                GLOBAL.functions.SetProgress('4,5,117')
                setModalVisible(!modalVisible);
              }}
            />
          </View>
        </View>
      </Modal>
      <ImageBackground source={require('./../assets/images/background.jpg')}
        style={styles.image}>
        <Text style={styles.text}>Stormlight Archived</Text>
        <Button
          title="Characters"
          onPress={() =>
            navigation.navigate('Characters')
          }
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
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
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
