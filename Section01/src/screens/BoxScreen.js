import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    flexDirection: 'row',
    height: 200,
    justifyContent: 'space-between',
  },
  viewOneStyle: {
    backgroundColor: '#ffb399',
    borderWidth: 1,
    borderColor: '#cc3300',
    height: 50,
    width: 50,
  },
  viewTwoStyle: {
    backgroundColor: '#adebad',
    borderWidth: 1,
    borderColor: '#28a428',
    height: 50,
    width: 50,
    marginTop: 50,
    // alignSelf: 'flex-end',
    // top: 50,
  },
  viewThreeStyle: {
    backgroundColor: '#99b3ff',
    borderWidth: 1,
    borderColor: '#0033cc',
    // flex: 2,
    height: 50,
    width: 50,
  },
});

export default BoxScreen;
