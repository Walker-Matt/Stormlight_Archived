/**
 * Getter/Setter for locally stored reading progress
 */

import React from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

class Global {}
module.exports = {
  functions: Global
}

Global.SetProgress = async (value) => {
  try {
    await AsyncStorage.setItem('@storage_key', value)
  } catch (e) {
    alert(e)
  }
};

Global.Progress = function() {
  const [progress, setProgress] = React.useState(null);
  const fetch = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_key');
      setProgress(value)
    } catch(e) {
      alert(e)
    }
  }
  fetch();
  return progress;
}
