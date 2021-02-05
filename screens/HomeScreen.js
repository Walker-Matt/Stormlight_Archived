/**
 * Home screen
 * Initial screen on start-up
 * Lists each feature screen
 */

import React from 'react';
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
  return (
    <View style={styles.container}>
      <ShowModal navigation={navigation}/>
      <ImageBackground source={require('./../assets/images/background.jpg')}
        style={styles.image}>
        <Text style={styles.text}>Stormlight Archived</Text>
        <Button
          title="Update Reading Progression"
          onPress={() =>
            navigation.navigate('Progress')
          }
        />
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

function ShowModal(props) {
  const navigation = props.navigation;
  const progress = GLOBAL.functions.GetProgress();
  const [modalVisible, setModalVisible] = React.useState(true);
  if(progress == 'null,null,null') {
    return (
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
    )
  } else {
    return null;
  }
}

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
    flexDirection: "column",
    //alignItems: "center"
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
