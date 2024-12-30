import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
  const name = 'Nahid Ahmed';
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.nameTextStyle}>My name is {name}.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  nameTextStyle: {
    fontSize: 20,
  },
});

export default ComponentScreen;
