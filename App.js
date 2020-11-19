import React, {useEffect, useState} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Alert,
  BackHandler,
  Linking,
} from 'react-native';
import VersionCheck from 'react-native-version-check';
export default function App(props) {
  useEffect(() => {
    checkversion();
  }, []);
  const checkversion = async () => {
    try {
      let updateNeeded = await VersionCheck.needUpdate();
      if (updateNeeded && updateNeeded.isNeeded) {
        Alert.alert(
          'Vui long cap nhat',
          'Ung dung cua ban can duoc cap nhat',
          [
            {
              text: 'Cap nhat',
              onPress: () => {
                BackHandler.exitApp();
                Linking.openURL(updateNeeded.storeUrl);
              },
            },
          ],
          {cancelable: false},
        );
      }
    } catch (error) {
      console.log('errr', error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Anphapetrol App v2</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFEBEE',
  },
});
