import React from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

class Global {}

const STORAGE_KEY = '@storage_key'

module.exports = {
  progress: '',
  functions: Global
}

Global.setProgress = async (value) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, value)
    GLOBAL.PROGRESS = value;
  } catch (e) {
    alert(e)
  }
};

Global.getProgress = async () => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY);
    GLOBAL.PROGRESS = value;
  } catch(e) {
    alert(e)
  }
}
