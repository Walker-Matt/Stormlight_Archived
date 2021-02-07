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
  TouchableOpacity,
  Modal,
  StatusBar,
} from 'react-native';

import GLOBAL from './../Global'

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.parentView}>
      <ShowModal navigation={navigation}/>
      <View style={styles.mainView}>
        <ImageBackground
          source={require('./../assets/images/background.jpg')}
          style={styles.background}>
          <Separator/>
          <View style={styles.row}>
            <Separator/>
            <Icon
              navigation={navigation}
              screen='Characters'
              iconName='placeholder'
              text='Characters'
            />
            <Separator/>
            <Icon
              navigation={navigation}
              screen='Characters'
              iconName='placeholder'
              text='Characters'
            />
            <Separator/>
            <Icon
              navigation={navigation}
              screen='Characters'
              iconName='placeholder'
              text='Characters'
            />
            <Separator/>
          </View>
          <Separator/>
          <View style={styles.row}>
            <Separator/>
            <Icon
              navigation={navigation}
              screen='Characters'
              iconName='placeholder'
              text='Characters'
            />
            <Separator/>
            <Icon
              navigation={navigation}
              screen='Characters'
              iconName='placeholder'
              text='Characters'
            />
            <Separator/>
            <Icon
              navigation={navigation}
              screen='Characters'
              iconName='placeholder'
              text='Characters'
            />
            <Separator/>
          </View>
          <Separator/>
          <View style={styles.row}>
            <Separator/>
            <Icon
              navigation={navigation}
              screen='Characters'
              iconName='placeholder'
              text='Characters'
            />
            <Separator/>
            <Icon
              navigation={navigation}
              screen='Characters'
              iconName='placeholder'
              text='Characters'
            />
            <Separator/>
            <Icon
              navigation={navigation}
              screen='Characters'
              iconName='placeholder'
              text='Characters'
            />
            <Separator/>
          </View>
          <Separator/>
          <View style={styles.row}>
            <Separator/>
            <Icon
              navigation={navigation}
              screen='Characters'
              iconName='placeholder'
              text='Characters'
            />
            <Separator/>
            <Icon
              navigation={navigation}
              screen='Characters'
              iconName='placeholder'
              text='Characters'
            />
            <Separator/>
            <Icon
              navigation={navigation}
              screen='Characters'
              iconName='placeholder'
              text='Characters'
            />
            <Separator/>
          </View>
          <Separator/>
        </ImageBackground>
      </View>
      <ProgressView navigation={navigation}/>
    </View>
  );
};

const Separator = () => (
  <View style={styles.separator} />
);

const Icon = (props) => (
  <View style={styles.buttonView}>
    <TouchableOpacity
      style={styles.button}
      onPress={() => props.navigation.navigate(props.screen)}
    >
      <Image
        style={styles.icon}
        source={require('./../assets/icons/Character_Icon.png')}
      />
    </TouchableOpacity>
    <Text style={styles.iconText}>
      {props.text}
    </Text>
  </View>
);

function ProgressView(props) {
  const progressArr = GLOBAL.functions.GetProgress().split(',');
  return (
    <View style={styles.progressView}>
      <Separator/>
      <Text style={styles.progressText}>
        Book: {progressArr[0] + '  '}
        Part: {progressArr[1] + '  '}
        Chapter: {progressArr[2]}
      </Text>
      <Separator/>
      <TouchableOpacity
        style={styles.progressButton}
        onPress={() => props.navigation.navigate('Progress')}
      >
        <Text> Update </Text>
      </TouchableOpacity>
      <Separator/>
    </View>
  )
}

function ShowModal(props) {
  const navigation = props.navigation;
  const progress = GLOBAL.functions.GetProgress();
  const [modalVisible, setModalVisible] = React.useState(true);
  if(progress == null) {
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
                GLOBAL.functions.SetProgress(',,')
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
  parentView: {
    flex: 1,
    flexDirection: "column",
  },
  mainView: {
    flex: 12,
    flexDirection: "column",
  },
  progressView: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "steelblue",
    justifyContent: "center",
    alignItems: "center"
  },
  progressText: {
    flex: 9,
    color: "white",
    fontSize: 20
  },
  progressButton: {
    flex: 2,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  row: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center"
  },
  separator: {
    flex: 1,
  },
  buttonView: {
    flex: 5,
    flexDirection: "column",
  },
  button: {
    flex: 3,
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    borderRadius: 25,
  },
  iconText: {
    backgroundColor: "white",
    textAlign: "center",
    fontWeight: "bold"
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  icon: {
    height: 100,
    width: 100,
  },
});
